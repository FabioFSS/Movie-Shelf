from django.urls import path

from .views import LatestTVShowsView, ListContentView, ListIDView, ListView, RatingView, ProgressView, JSONCacheView, UpcomingMoviesView, UserProfileView, UserRecentlyWatchedView
from .views import DetailMovieView, DetailTvView, RegisterView, RatingsMovieTvView, MyTokenObtainPairView
from .views import SeasonsView, SearchView, DetailSeasons, EpisodeDetailView, ReviewView

from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

urlpatterns = [
    path('list/<str:username>', ListView.as_view(), name="lists"),
    path('list_id/<int:list_id>', ListIDView.as_view(), name="listid"),
    path('list_content/<str:username>/<int:list_id>',
         ListContentView.as_view(), name="listcontentview"),
    path('rating/', RatingView.as_view(), name="ratings"),
    path('recentlywatched/<str:username>',
         UserRecentlyWatchedView.as_view(), name="userrecentlywatched"),
    path('progress/<str:username>', ProgressView.as_view(), name="progresses"),
    path('jsoncache/', JSONCacheView.as_view(), name="jsoncache"),
    path('latesttvshows/', LatestTVShowsView.as_view(), name="latesttvshows"),
    path('upcomingmovies/', UpcomingMoviesView.as_view(), name="upcomingmovies"),
    path('detailsmovie/<int:id>', DetailMovieView.as_view(), name="detailsmovie"),
    path('detailstv/<int:id>', DetailTvView.as_view(), name="detailstv"),
    path('search/<str:keyword>', SearchView.as_view(), name="search"),
    path('seasons/<int:id>', SeasonsView.as_view(), name="seasons"),
    path('detailseason/<int:id>/<int:season_number>',
         DetailSeasons.as_view(), name="detailseason"),
    path('detailepisode/<int:id>/<int:season_number>/<int:episode_number>',
         EpisodeDetailView.as_view(), name="detailepisode"),
    path('ratings', RatingsMovieTvView.as_view(), name="ratings"),
    path('reviews/<int:movie_tv_id>', ReviewView.as_view(), name="reviews"),

    # token authentication patterns
    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('register/', RegisterView.as_view(), name='auth_register'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('user_profile/<str:username>',
         UserProfileView.as_view(), name='user_profile')
]
