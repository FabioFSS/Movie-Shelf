from django.urls import path
from .views import ListView, RatingView, ProgressView, JSONCacheView, IndexView, UserLoginView, UserLogoutView, UserProfileView
from .views import DetailMovieView, DetailTvView, RegisterView, RatingsMovieTvView, MyTokenObtainPairView
from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

urlpatterns = [
    path('', IndexView.as_view(), name='index'),
    path('user_profile/', UserProfileView.as_view(), name="user_profile"),
    path('login/', UserLoginView.as_view(), name="login"),
    path('logout/', UserLogoutView.as_view(), name="logout"),
    path('list/', ListView.as_view(), name="lists"),
    path('rating/', RatingView.as_view(), name="ratings"),
    path('progress/', ProgressView.as_view(), name="progresses"),
    path('jsoncache/', JSONCacheView.as_view(), name="jsoncache"),
    path('detailsmovie/<int:id>', DetailMovieView.as_view(), name="detailsmovie"),
    path('detailstv/<int:id>', DetailTvView.as_view(), name="detailstv"),
    path('ratings', RatingsMovieTvView.as_view(), name="ratings"),
    

    # token authentication
    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('register/', RegisterView.as_view(), name='auth_register'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
