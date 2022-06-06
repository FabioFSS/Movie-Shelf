from django.db import models
  
class React(models.Model):
    name = models.CharField(max_length=30)
    detail = models.CharField(max_length=500)

class Cache(models.Model):
    date_time = models.TimeField()

class Movies(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    img_front = models.ImageField()
    img_back = models.ImageField()
    trailer = models.TextField()
    overview = models.FloatField(max_length=3)
    lauch_date = models.DateField()
    cache_fk = models.ForeignKey(Cache, on_delete=models.CASCADE)

class Casts(models.Model):
    name = models.CharField(max_length=100)
    picture = models.ImageField()

class tvShows(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    img_front = models.ImageField()
    img_back = models.ImageField()
    trailer = models.TextField()
    overview = models.FloatField()
    lauch_date = models.DateField()
    cache_fk = models.ForeignKey(Cache, on_delete=models.CASCADE)

class Season(models.Model):
    number = models.IntegerField()
    description = models.TextField()
    img_folder = models.ImageField()
    tv_shows_fk = models.ForeignKey(tvShows, on_delete=models.CASCADE)

class Episode(models.Model):
    description = models.TextField()
    title = models.CharField(max_length=100)
    number = models.IntegerField()
    img_folder = models.ImageField()
    season_fk = models.ForeignKey(Season, on_delete=models.CASCADE)