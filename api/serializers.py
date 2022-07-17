from django.contrib.auth.models import User
from django.contrib.auth.password_validation import validate_password
from .models import List, ListContent, Progress, UserProfile, Review
from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token['username'] = user.username
        token['email'] = user.email
        token['id'] = user.id

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


class UserProfileSerializer(serializers.ModelSerializer):
    profile_pic = serializers.ImageField(max_length=None, use_url=True)

    class Meta:
        model = UserProfile
        fields = ['user', 'name', 'profile_pic', 'birth_date', 'gender',
                  'location', 'bio', 'content_completed',
                  'average_rating', 'review_number']

    def get_photo_url(self, obj):
        request = self.context.get('request')
        photo_url = obj.fingerprint.url
        return request.build_absolute_uri(photo_url)


class ListSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(max_length=None, use_url=True)

    class Meta:
        model = List
        fields = ['id', 'name', 'description', 'image', 'user_fk']

    def get_photo_url(self, obj):
        request = self.context.get('request')
        photo_url = obj.fingerprint.url
        return request.build_absolute_uri(photo_url)


class ListContentSerializer(serializers.ModelSerializer):
    class Meta:
        model = ListContent
        fields = ['date_added', 'content_id', 'content_type', 'list_fk']


class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ['note', 'comment', 'movie_tv_id', 'user_fk']


class ProgressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Progress
        fields = ['content_id', 'count', 'user_fk']
