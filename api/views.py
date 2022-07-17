from django.contrib.auth.models import User
from .models import ListContent, List, Progress, UserProfile, Review
from .serializers import ListContentSerializer, ProgressSerializer, ListSerializer
from .serializers import MyTokenObtainPairSerializer, RegisterSerializer, UserProfileSerializer
from .serializers import ReviewSerializer
from .tmdb import TMDB
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.permissions import AllowAny, IsAuthenticated

tmdb_handler = TMDB('68e356ae11aabb4bf082a0a61801672e', 1, 0)


class MyTokenObtainPairView(TokenObtainPairView):
    '''View for user authentication and getting authentication tokens. 
    '''

    serializer_class = MyTokenObtainPairSerializer


class RegisterView(APIView):
    '''View for registering an user.
    '''

    permission_classes = (AllowAny,)
    queryset = User.objects.all()
    serializer_class = RegisterSerializer

    def get(self, request):
        users = User.objects.all()
        serializer = RegisterSerializer(users, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
        return Response({'response': serializer.data}, status=status.HTTP_201_CREATED)


class UserProfileView(APIView):
    '''View for updating and recovering user info.
    '''

    permission_classes = [IsAuthenticated]
    serializer_class = UserProfileSerializer

    def get(self, request, username):
        user = User.objects.get(username=username)
        user_profile = UserProfile.objects.get(user=user)
        user_profile.update_statistics()
        serializer = UserProfileSerializer(
            user_profile, context={"request": request})
        return Response([serializer.data])

    def post(self, request, username):
        user = User.objects.get(username=username)
        user_profile = UserProfile.objects.get(user=user)
        data = request.data
        user_profile.name = data['name']
        user_profile.profile_pic = data['profile_pic']
        user_profile.birth_date = data['birth_date']
        user_profile.gender = data['gender']
        user_profile.location = data['location']
        user_profile.bio = data['bio']
        user_profile.save()
        return Response(['success'])


class ListView(APIView):
    '''View for lists.
    '''

    permission_classes = [IsAuthenticated]
    serializer_class = ListSerializer

    def get(self, request, username):
        user = User.objects.get(username=username)
        lists = List.objects.filter(user_fk=user)
        serializer = ListSerializer(
            lists, context={"request": request}, many=True)

        return Response(serializer.data)

    def post(self, request, username):
        data = request.data
        user = User.objects.get(username=username)
        user_list = List(
            name=data['name'], description=data['description'], image=data['image'], user_fk=user)
        user_list.save()

        return Response(['success'])


class ListIDView(APIView):
    '''View for list by id.
    '''

    permission_classes = [IsAuthenticated]
    serializer_class = ListSerializer

    def get(self, request, list_id):
        lists = List.objects.get(id=list_id)
        serializer = ListSerializer(
            lists, context={"request": request})

        return Response(serializer.data)


class ListContentView(APIView):
    '''View for the content of a list.
    '''

    permission_classes = [IsAuthenticated]
    serializer_class = ListContentSerializer

    def get(self, request, username, list_id):
        user = User.objects.get(username=username)
        user_list = List.objects.get(user_fk=user, id=list_id)
        list_contents = ListContent.objects.filter(list_fk=user_list)
        serializer = ListContentSerializer(
            list_contents, context={"request": request}, many=True)

        data = serializer.data

        response = []
        for content in data:
            if content['content_type'] == 'tv_show':
                show_data = tmdb_handler.get_details_tv(content['content_id'])

                filtered_content_data = {'poster': show_data['poster'], 'name': show_data['details']
                                         ['name'], 'overview': show_data['details']['overview'], 'content_type': 'tv_show', 'content_id': content['content_id']}

            elif content['content_type'] == 'movie':
                movie_data = tmdb_handler.get_details_movie(
                    content['content_id'])

                filtered_content_data = {'poster': movie_data['poster'], 'name': movie_data['details']
                                         ['title'], 'overview': movie_data['details']['overview'], 'content_type': 'movie', 'content_id': content['content_id']}

            response.append(filtered_content_data)

        return Response(response)

    def post(self, request, username, list_id):
        user = User.objects.get(username=username)
        user_list = List.objects.get(user_fk=user, id=list_id)
        data = request.data
        list_content = ListContent(
            content_id=data['content_id'], content_type=data['content_type'], list_fk=user_list)

        list_content.save()
        return Response(['success'])


class ReviewView(APIView):
    '''View for user rating.
    '''

    permission_classes = [IsAuthenticated]
    serializer_class = ReviewSerializer

    def get(self, request, movie_tv_id):
        review = Review.objects.filter(movie_tv_id=movie_tv_id)
        serializer = ReviewSerializer(
            review, context={"request": request}, many=True)
        return Response([serializer.data])

    def post(self, request, movie_tv_id):
        serializer = ReviewSerializer(data=request.data)

        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)


class ProgressView(APIView):
    '''View for user progress.
    '''

    permission_classes = [IsAuthenticated]
    serializer_class = ProgressSerializer

    def get(self, request, username):
        user = User.objects.get(username=username)
        progresses = [{'content_id': progress.content_id, 'count': progress.count, 'id': progress.id}
                      for progress in Progress.objects.filter(user_fk=user)]

        response = []
        for progress in progresses:
            show_data = tmdb_handler.get_details_tv(progress['content_id'])

            filtered_show_data = {'poster': show_data['poster'], 'name': show_data['details']
                                  ['name'], 'max_count': show_data['details']['number_of_episodes'], 'overview': show_data['details']['overview']}

            response.append(progress | filtered_show_data)

        return Response(response)

    def post(self, request, username):
        serializer = ProgressSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)


class AddProgressView(APIView):
    '''View for adding user progress.
    '''

    permission_classes = [IsAuthenticated]
    serializer_class = ProgressSerializer

    def post(self, request, username, progress_id, content_id):
        user = User.objects.get(username=username)
        progress = Progress.objects.get(id=progress_id)
        if progress:
            progress.count += 1
            progress.save()

        else:
            progress = Progress(user_fk=user, content_id=content_id, count=1)
            progress.save()

        return Response(['success'])


class UpcomingMoviesView(APIView):
    '''View for getting upcoming movies.
    '''

    def get(self, request):
        data = tmdb_handler.upcoming_movies()

        response = []

        for movie in data['results'][:6]:
            filtered = {
                'name': movie['title'], 'poster': 'https://image.tmdb.org/t/p/w342' + movie['poster_path'], 'id': movie['id']}

            response.append(filtered)

        return Response(response)


class LatestTVShowsView(APIView):
    '''View for airing today TV shows.
    '''

    def get(self, request):
        data = tmdb_handler.latest_tv_shows()

        response = []

        for show in data['results'][:6]:
            filtered = {
                'name': show['name'], 'poster': 'https://image.tmdb.org/t/p/w342' + show['poster_path'], 'id': show['id']}

            response.append(filtered)

        return Response(response)


class UserRecentlyWatchedView(APIView):
    '''View for recently watched shows by an user.
    '''

    def get(self, request, username):
        user = User.objects.get(username=username)
        progresses = Progress.objects.filter(
            user_fk=user).order_by('last_watched')

        response = []
        for progress in progresses:
            show_data = tmdb_handler.get_details_tv(progress.content_id)

            filtered_show_data = {'poster': show_data['poster'], 'name': show_data['details']
                                  ['name'], 'content_id': progress.content_id}

            response.append(filtered_show_data)

        return Response(response)


class DetailMovieView(APIView):
    '''View for a movie details.
    '''

    def get(self, request, id):

        response_movie = tmdb_handler.get_details_movie(id)

        return Response([response_movie])


class DetailTvView(APIView):
    '''View for a TV show details.
    '''

    def get(self, request, id):

        response_movie = tmdb_handler.get_details_tv(id)

        return Response([response_movie])


class SeasonsView(APIView):
    '''View for TV show seasons.
    '''

    def get(self, request, id):

        response_detail_seasons = tmdb_handler.get_list_seasons(id)

        return Response([response_detail_seasons])


class DetailSeasons(APIView):
    '''View for details of a season.
    '''

    def get(self, request, id, season_number):

        detail_season = tmdb_handler.get_details_season(id, season_number)

        return Response([detail_season])


class EpisodeDetailView(APIView):
    '''View for details of an episode.
    '''

    def get(self, request, id, season_number, episode_number):

        episode_detail = tmdb_handler.get_details_episode(
            id, season_number, episode_number)

        return Response([episode_detail])


class SearchView(APIView):
    '''View for searching content.
    '''

    def get(self, request, keyword):

        search = tmdb_handler.search(str(keyword))

        return Response([search])
