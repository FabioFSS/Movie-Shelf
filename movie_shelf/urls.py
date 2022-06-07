from django.contrib import admin
from django.urls import path
from api.views import *
  
urlpatterns = [
    path('admin/', admin.site.urls),
    path('connectiontest/', ReactView.as_view(), name="something"),
    path('cache/', CacheView.as_view(), name="cache"),
    path('movies/', MoviesView.as_view(), name="movies"),
    path('casts/', CastsView.as_view(), name="casts"),
    path('tvshows/', tvShowsView.as_view(), name="tvshows"),
    path('season/', SeasonView.as_view(), name="season"),
    path('episode/', EpisodeView.as_view(), name="episode"),
    path('user/', UserView.as_view(), name="user"),
    path('list/', ListView.as_view(), name="list"),
    path('rating/', RatingView.as_view(), name="rating"),
    path('progress/', ProgressView.as_view(), name="progress"),
]

