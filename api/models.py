from tabnanny import verbose
from django.db import models
from django.db.models.signals import post_save
from django.contrib.auth.models import User
from django.dispatch import receiver


# Cache definitions
class JSONCache(models.Model):
    add_time = models.DateTimeField('Creation time', auto_now_add=True)
    movie = models.JSONField('Movies')
    tv_shows = models.JSONField('TV shows')

    class Meta:
        verbose_name = 'JSONCache'
        verbose_name_plural = 'JSONCaches'


# User profile definitions
class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    profile_pic = models.ImageField(
        'Profile picture', upload_to='profile_pics/')
    birth_date = models.DateField('Date of birth', null=True)
    gender = models.CharField('Gender', max_length=10, blank=True)
    location = models.CharField('Location', max_length=10, blank=True)
    language = models.CharField('Language', max_length=10, blank=True)
    bio = models.TextField('Biography', blank=True)
    content_completed = models.IntegerField('Content completed', default=0)
    average_rating = models.FloatField('Average rating', default=0)
    review_number = models.IntegerField('Number of reviews', default=0)

    class Meta:
        verbose_name = 'User Profile'
        verbose_name_plural = 'User Profiles'


@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        UserProfile.objects.create(user=instance)


@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    instance.userprofile.save()


# User activities definitions
class List(models.Model):
    name = models.CharField('List name', max_length=100)
    description = models.TextField('Description')
    image = models.ImageField('List image', upload_to='list_images')
    user_fk = models.ForeignKey(User, on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'List'
        verbose_name_plural = 'Lists'

class ListContent(models.Model):
    date_added = models.DateTimeField('Date added', auto_now_add=True)
    content_id = models.IntegerField('Content id')
    content_type = models.CharField('Content type', max_length=10)
    list_fk = models.ForeignKey(List, on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'List content'
        verbose_name_plural = 'List contents'


class Rating(models.Model):
    value = models.FloatField('Rating value')
    description = models.TextField('Description')
    user_fk = models.ForeignKey(User, on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'Rating'
        verbose_name_plural = 'Ratings'


class Progress(models.Model):
    content_id = models.IntegerField('Content id')
    count = models.IntegerField('Progress count')
    user_fk = models.ForeignKey(User, on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'Progress'
        verbose_name_plural = "Progresses"


class RatingMovieTv(models.Model):
    idMovieTv = models.IntegerField()
    comment = models.TextField()
    vote = models.IntegerField()
    user_fk = models.ForeignKey(User, on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'RatingMovieTv'
        verbose_name_plural = "RatingsMoviesTvs"
