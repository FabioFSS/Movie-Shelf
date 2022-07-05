from django.urls import path
from .views import ListView, RatingView, ProgressView, JSONCacheView, UserProfileView, DetailSeasons, Search
from .views import DetailMovieView, DetailTvView, RegisterView, RatingsMovieTvView, MyTokenObtainPairView
from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

urlpatterns = [
    path('list/', ListView.as_view(), name="lists"),
    path('rating/', RatingView.as_view(), name="ratings"),
    path('progress/<str:username>', ProgressView.as_view(), name="progresses"),
    path('jsoncache/', JSONCacheView.as_view(), name="jsoncache"),
    path('detailsmovie/<int:id>', DetailMovieView.as_view(), name="detailsmovie"),
    path('detailstv/<int:id>', DetailTvView.as_view(), name="detailstv"),
    path('search/<str:keyword>', Search.as_view(), name="search"),
    path('detailsseasons/<int:id>', DetailSeasons.as_view(), name="detailsseasons"),
    path('ratings', RatingsMovieTvView.as_view(), name="ratings"),

    # token authentication patterns
    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('register/', RegisterView.as_view(), name='auth_register'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('user_profile/<str:username>',
         UserProfileView.as_view(), name='user_profile')
]
