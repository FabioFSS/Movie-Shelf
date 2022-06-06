from rest_framework import serializers
from .models import *
  
class ReactSerializer(serializers.ModelSerializer):
    class Meta:
        model = React
        fields = ['name', 'detail']

class CacheSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cache
        fields = ['date_time']

class MoviesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movies
        fields = ['title', 'description', 'img_front', 
        'img_back', 'trailer', 'overview', 'lauch_date', 'cache_fk']


class CastsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Casts
        fields = ['name', 'picture']

class tvShowsSerializer(serializers.ModelSerializer):
    class Meta:
        model = tvShows
        fields = ['title', 'description', 'img_front', 'img_back', 
        'trailer', 'overview', 'lauch_date', 'cache_fk']

class SeasonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Season
        fields = ['number', 'description', 'img_folder', 'tv_shows_fk']

class EpisodeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Episode
        fields = ['description', 'title', 'number', 'img_folder', 'season_fk']
