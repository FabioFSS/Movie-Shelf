from msilib.schema import SelfReg
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


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'password', 'profile_pic', 'birth_date', 'gender',
                  'location', 'email', 'language', 'bio', 'content_completed', 'average_rating']

class ListSerializer(serializers.ModelSerializer):
    class Meta:
        model = List
        fields = ['name', 'description', 'image', 'user_fk']

class RatingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rating
        fields = ['value', 'description', 'user_fk']

class ProgressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Progress
        fields = ['count', 'user_fk']
