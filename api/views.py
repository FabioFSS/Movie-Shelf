from django.views.generic import TemplateView
from django.contrib.auth.models import User
from .models import JSONCache, RatingMovieTv, List, Rating, Progress
from .serializers import JSONCacheSerializer, ListSerializer, RatingSerializer, ProgressSerializer, RatingsMovieTvSerializer
from .serializers import MyTokenObtainPairSerializer, RegisterSerializer
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.permissions import AllowAny, IsAuthenticated
from .tmdb import TMDB


class IndexView(TemplateView):
    template_name = 'index.html'


class JSONCacheView(APIView):
    serializer_class = JSONCacheSerializer

    def get(self, request):
        json_table_data = [{"movie": json_table_data.movie, "tv_shows": json_table_data.tv_shows}
                           for json_table_data in JSONCache.objects.all()]
        return Response(json_table_data)

    def post(self, request):
        response_movie = TMDB(
            '68e356ae11aabb4bf082a0a61801672e', 1, 0).top_rated()
        response_tv_shows = TMDB(
            '68e356ae11aabb4bf082a0a61801672e', 1, 0).top_rated_tv()
        data = JSONCache(movie=response_movie, tv_shows=response_tv_shows)

        serializer = JSONCacheSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            data.save()
            return Response(serializer.data)


# Views para autenticação de usuário
# Obtenção de token de autenticação
class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


# View de registro de usuário
class RegisterView(APIView):
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
        return Response(serializer.data)


# Endpoint de teste que só funciona se estiver autenticado
class testEndPoint(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        data = f"Congratulation {request.user}, your API just responded to GET request"
        return Response({'response': data}, status=status.HTTP_200_OK)

    def post(self, request):
        text = request.POST.get('text')
        data = f'Congratulation your API just responded to POST request with text: {text}'
        return Response({'response': data}, status=status.HTTP_200_OK)


# View para lists
class ListView(APIView):
    serializer_class = ListSerializer

    def get(self, request):
        lists = [{'name': user_list.name, 'description': user_list.description,
                  'image': user_list.image, 'user_fk': user_list.user_fk}
                 for user_list in List.objects.all()]
        return Response(lists)

    def post(self, request):
        serializer = ListSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)


# View para ratings de usuário
class RatingView(APIView):
    serializer_class = RatingSerializer

    def get(self, request):
        ratings = [{'value': rating.value, 'description': rating.description,
                    'user_fk': rating.user_fk}
                   for rating in Rating.objects.all()]

        return Response(ratings)

    def post(self, request):

        serializer = RatingSerializer(data=request.data)

        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)


# View para progressos de usuário
class ProgressView(APIView):
    serializer_class = ProgressSerializer

    def get(self, request):
        progresses = [{'count': progress.count, 'user_fk': progress.user_fk}
                      for progress in Progress.objects.all()]

        return Response(progresses)

    def post(self, request):
        serializer = ProgressSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)


class RatingsMovieTvView(APIView):
    serializer_class = RatingsMovieTvSerializer

    def get(self, request):
        progresses = [{'idMovieTv': ratingtvmovie.idMovieTv, 'comment': ratingtvmovie.comment, 'vote': ratingtvmovie.vote, 'user_fk': ratingtvmovie.user_fk}
                      for ratingtvmovie in RatingMovieTv.objects.all()]

        return Response(progresses)

    def post(self, request):
        serializer = RatingsMovieTvSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)


class DetailMovieView(APIView):

    def get(self, request, id):

        response_movie = TMDB(
            '68e356ae11aabb4bf082a0a61801672e', 1, 0).get_details_movie(id)

        return Response([response_movie])


class DetailTvView(APIView):

    def get(self, request, id):

        response_movie = TMDB(
            '68e356ae11aabb4bf082a0a61801672e', 1, 0).get_details_tv(id)

        return Response([response_movie])
