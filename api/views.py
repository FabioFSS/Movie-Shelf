from django.shortcuts import render
from rest_framework.views import APIView
from . models import *
from rest_framework.response import Response
from .serializer import *
from .tmdb import TMDB


class ReactView(APIView):
    serializer_class = ReactSerializer
  
    def get(self, request):
        detail = [ {"name": detail.name,"detail": detail.detail} 
        for detail in React.objects.all()]
        return Response(detail)
  
    def post(self, request):
  
        serializer = ReactSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return  Response(serializer.data)

class CacheView(APIView):
    serializer_class = CacheSerializer

    def get(self, request):
        detail = [ {"date_time": detail.date_time} 
        for detail in Cache.objects.all()]
        return Response(detail)

    def post(self, request):
        
        # print(TMDB('68e356ae11aabb4bf082a0a61801672e', 1, 0).search_movie('spider'))

        serializer = CacheSerializer(data=request.data)

        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return  Response(serializer.data)

class MoviesView(APIView):
    serializer_class = MoviesSerializer

    def get(self, request):
        detail = [ {"title": detail.title, "description": detail.description, 
        "img_front": detail.img_front, "img_back": detail.img_back, 
        "trailer": detail.trailer, "overview": detail.overview, "lauch_date": detail.lauch_date, 
        "cache_fk": detail.cache_fk} 
        for detail in Movies.objects.all()]
        return Response(detail)

    def post(self, request):
          
        serializer = MoviesSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return  Response(serializer.data)

class CastsView(APIView):
    serializer_class = CastsSerializer

    def get(self, request):
        detail = [ {"name": detail.name, "picture": detail.picture} 
        for detail in Casts.objects.all()]
        return Response(detail)

    def post(self, request):
          
        serializer = CastsSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return  Response(serializer.data)

class tvShowsView(APIView):
    serializer_class = tvShowsSerializer

    def get(self, request):
        detail = [ {"name": detail.name, "title": detail.title, "description": detail.description, 
        "img_front": detail.img_front, "img_back": detail.img_back, "trailer": detail.trailer, 
        "overview": detail.overview, "lauch_date": detail.lauch_date, "cache_fk": detail.cache_fk} 
        for detail in tvShows.objects.all()]
        return Response(detail)

    def post(self, request):
    
          
        serializer = tvShowsSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return  Response(serializer.data)

class SeasonView(APIView):
    serializer_class = SeasonSerializer

    def get(self, request):
        detail = [ {"number": detail.number, "description": detail.description, 
        "img_folder": detail.img_folder, "tv_shows_fk": detail.tv_shows_fk} 
        for detail in Season.objects.all()]
        return Response(detail)

    def post(self, request):
          
        serializer = SeasonSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return  Response(serializer.data)


class EpisodeView(APIView):
    serializer_class = EpisodeSerializer

    def get(self, request):
        detail = [ {"description": detail.description, "title": detail.title, 
        "number": detail.number, "img_folder": detail.img_folder, "season_fk": detail.season_fk} 
        for detail in Episode.objects.all()]
        return Response(detail)

    def post(self, request):
          
        serializer = EpisodeSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return  Response(serializer.data)
