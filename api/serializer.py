from rest_framework import serializers
from .models import JSONCache, User, List, Rating, Progress


class JSONCacheSerializer(serializers.ModelSerializer):
    class Meta:
        model = JSONCache
        fields = ['movie', 'tv_shows']


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
