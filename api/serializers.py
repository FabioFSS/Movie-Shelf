from django.contrib.auth.models import User
from django.contrib.auth.password_validation import validate_password
from .models import JSONCache, List, Rating, Progress
from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer


# Serializador para obtenção de tokens de autenticação
class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token['username'] = user.username
        token['email'] = user.email

        return token


# Serializador para registro e validação do usuário
class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(
        write_only=True, required=True, validators=[validate_password])
    password2 = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = User
        fields = ('username', 'password', 'password2')

    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError(
                {"password": "Password fields didn't match."})

        return attrs

    def create(self, validated_data):
        user = User.objects.create(
            username=validated_data['username']
        )

        user.set_password(validated_data['password'])
        user.save()

        return user


class JSONCacheSerializer(serializers.ModelSerializer):
    class Meta:
        model = JSONCache
        fields = ['movie', 'tv_shows']


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


class RatingsMovieTvSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rating
        fields = ['idMovieTv', 'comment', 'vote', 'user_fk']
