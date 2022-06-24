from django.db import models


class JSONCache(models.Model):
    add_time = models.DateTimeField(auto_now_add=True)
    movie = models.JSONField()
    tv_shows = models.JSONField()

    class Meta:
        verbose_name = 'JSONCache'
        verbose_name_plural = 'JSONCaches'


class User(models.Model):
    username = models.CharField(max_length=100)
    password = models.CharField(max_length=50)
    profile_pic = models.ImageField()
    birth_date = models.DateField()
    gender = models.CharField(max_length=10)
    location = models.CharField(max_length=10)
    email = models.EmailField()
    language = models.CharField(max_length=10)
    bio = models.TextField()
    content_completed = models.IntegerField()
    average_rating = models.FloatField()

    class Meta:
        verbose_name = 'User'
        verbose_name_plural = 'Users'


class List(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    image = models.ImageField()
    user_fk = models.ForeignKey(User, on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'List'
        verbose_name_plural = 'Lists'


class Rating(models.Model):
    value = models.FloatField()
    description = models.TextField()
    user_fk = models.ForeignKey(User, on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'Rating'
        verbose_name_plural = 'Ratings'


class Progress(models.Model):
    count = models.IntegerField()
    user_fk = models.ForeignKey(User, on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'Progress'
        verbose_name_plural = "Progresses"
