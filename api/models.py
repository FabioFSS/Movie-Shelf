from distutils.command.upload import upload
from django.db import models


class JSONCache(models.Model):
    add_time = models.DateTimeField('Creation time', auto_now_add=True)
    movie = models.JSONField('Movies')
    tv_shows = models.JSONField('TV shows')

    class Meta:
        verbose_name = 'JSONCache'
        verbose_name_plural = 'JSONCaches'


class User(models.Model):
    username = models.CharField('Username', max_length=100)
    password = models.CharField('Password', max_length=50)
    profile_pic = models.ImageField('Profile picture', upload_to='profile_pics/')
    birth_date = models.DateField('Date of birth')
    gender = models.CharField('Gender', max_length=10)
    location = models.CharField('Location', max_length=10)
    email = models.EmailField('Email')
    language = models.CharField('Language', max_length=10)
    bio = models.TextField('Biography')
    content_completed = models.IntegerField('Content completed')
    average_rating = models.FloatField('Average rating')
    review_number = models.IntegerField('Number of reviews')

    class Meta:
        verbose_name = 'User'
        verbose_name_plural = 'Users'


class List(models.Model):
    name = models.CharField('List name', max_length=100)
    description = models.TextField('Description')
    image = models.ImageField('List image', upload_to='list_images')
    user_fk = models.ForeignKey(User, on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'List'
        verbose_name_plural = 'Lists'


class Rating(models.Model):
    value = models.FloatField('Rating value')
    description = models.TextField('Description')
    user_fk = models.ForeignKey(User, on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'Rating'
        verbose_name_plural = 'Ratings'


class Progress(models.Model):
    count = models.IntegerField('Progress count')
    user_fk = models.ForeignKey(User, on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'Progress'
        verbose_name_plural = "Progresses"