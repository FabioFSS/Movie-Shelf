from rest_framework import serializers
from django.contrib.auth import authenticate
from .models import JSONCache, List, Rating, Progress, UserProfile
from django.contrib.auth.models import User

from django.contrib.auth.password_validation import validate_password
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token['username'] = user.username
        token['email'] = user.email

        return token

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


class DjangoUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'password', 'email']


class UserLoginSerializer(serializers.Serializer):
    username = serializers.CharField(label='Username', write_only=True)
    password = serializers.CharField(
        label='Password',
        style={'input_type': 'password'},
        trim_whitespace=False,
        write_only=True
    )

    def validate(self, attrs):
        username = attrs.get('username')
        password = attrs.get('password')

        if username and password:
            user = authenticate(request=self.context.get(
                'request'), username=username, password=password)

            if not user:
                message = "Access denied: wrong credentials."
                raise serializers.ValidationError(
                    message, code='authorization')

        else:
            message = "Missing username or password."
            raise serializers.ValidationError(message, code='authorization')

        attrs['user'] = user
        return attrs


class UserProfileSerializer(serializers.ModelSerializer):
    profile_pic = serializers.ImageField(max_length=None, use_url=True)

    class Meta:
        model = UserProfile
        fields = ['user', 'profile_pic', 'birth_date', 'gender',
                  'location', 'language', 'bio', 'content_completed',
                  'average_rating', 'review_number']

    def get_photo_url(self, obj):
        request = self.context.get('request')
        photo_url = obj.fingerprint.url
        return request.build_absolute_uri(photo_url)


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
