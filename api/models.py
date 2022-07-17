from django.db import models
from django.db.models.signals import post_save
from django.contrib.auth.models import User
from django.dispatch import receiver
from .tmdb import TMDB

tmdb_handler = TMDB('68e356ae11aabb4bf082a0a61801672e', 1, 0)

# User profile definitions
class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    name = models.CharField('Name', max_length=20, null=True, blank=True)
    profile_pic = models.ImageField(
        'Profile picture', upload_to='profile_pics/')
    birth_date = models.DateField('Date of birth', null=True)
    gender = models.CharField('Gender', max_length=10, null=True, blank=True)
    location = models.CharField(
        'Location', max_length=10, null=True, blank=True)
    bio = models.TextField('Biography', null=True, blank=True)
    content_completed = models.IntegerField('Content completed', default=0)
    average_rating = models.FloatField('Average rating', default=0)
    review_number = models.IntegerField('Number of reviews', default=0)

    class Meta:
        verbose_name = 'User Profile'
        verbose_name_plural = 'User Profiles'

    def update_statistics(self):
        progresses = Progress.objects.filter(user_fk=self.user)
        completed = 0

        for progress in progresses:
            details = tmdb_handler.get_details_tv(progress.content_id)

            if details['details']['number_of_episodes'] <= progress.count:
                completed += 1

        ratings = Review.objects.filter(user_fk=self.user)
        number_of_reviews = len(ratings)

        rating_sum = 0
        rating_count = 0
        for rating in ratings:
            rating_sum = rating.note
            rating_count += 1

        if len(ratings) > 0:
            average_rating = rating_sum/len(ratings)
        else:
            average_rating = 0

        self.content_completed = completed
        self.review_number = number_of_reviews
        self.average_rating = average_rating


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


class Review(models.Model):
    note = models.FloatField('Review note')
    comment = models.TextField('Comment')
    movie_tv_id = models.IntegerField('Id')
    user_fk = models.ForeignKey(User, on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'Review'
        verbose_name_plural = 'Reviews'


class Progress(models.Model):
    content_id = models.IntegerField('Content id')
    count = models.IntegerField('Progress count')
    last_watched = models.DateTimeField(auto_now=True)
    user_fk = models.ForeignKey(User, on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'Progress'
        verbose_name_plural = "Progresses"
