from dataclasses import fields
from django.views.generic import TemplateView
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import JSONCache, UserProfile, List, Rating, Progress
from .serializer import DjangoUserSerializer, JSONCacheSerializer, UserLoginSerializer, UserProfileSerializer, ListSerializer, RatingSerializer, ProgressSerializer
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from api.tmdb import TMDB


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


class UserLoginView(APIView):
    serializer_class = UserLoginSerializer
    def get(self, request):
        if request.user.is_authenticated:
            return Response(['authenticated'])
        else:
            return Response(['not authenticated'])

    def post(self, request):
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)

        return Response(['success'] if user else ['fail'])


class UserLogoutView(APIView):
    def post(self, request):
        logout(request)
        return Response(['success'])


class UserRegisterView(APIView):
    serializer_class = DjangoUserSerializer

    def get(self, request):
        users = User.objects.all()
        serializer = DjangoUserSerializer(users, context={"request": request}, many=True)
        return Response([serializer.data])

    def post(self, request):
        serializer = DjangoUserSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            data = serializer.data
            User.objects.create_user(username=data['username'], password=data['password'], email=data['email'])
            return Response(serializer.data)


class UserProfileView(APIView):
    serializer_class = UserProfileSerializer

    def get(self, request, user_id):
        user_profile = UserProfile.objects.get(id=user_id)
        serializer = UserProfileSerializer(user_profile, context={"request": request})
        return Response([serializer.data])

    def post(self, request, user_id):
        user_profile = UserProfile.objects.get(id=user_id)
        data = request.data
        user_profile.profile_pic = data['profile_pic']
        user_profile.birth_date = data['birth_date']
        user_profile.gender = data['gender']
        user_profile.location = data['location']
        user_profile.language = data['language']
        user_profile.bio = data['bio']
        user_profile.content_completed = data['content_completed']
        user_profile.average_rating = data['average_rating']
        user_profile.review_number = data['review_number']
        user_profile.save()
        return Response(['success'])



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
