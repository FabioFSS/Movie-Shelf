from django.urls import path, include
from .views import ListView, RatingView, ProgressView, JSONCacheView, IndexView, UserLoginView, UserLogoutView, UserProfileView, UserRegisterView

urlpatterns = [
    path('', IndexView.as_view(), name='index'),
    path('user_profile/<int:user_id>', UserProfileView.as_view(), name="user_profile"),
    path('login/', UserLoginView.as_view(), name="login"),
    path('logout/', UserLogoutView.as_view(), name="logout"),
    path('register/', UserRegisterView.as_view(), name="registration"),
    path('list/', ListView.as_view(), name="lists"),
    path('rating/', RatingView.as_view(), name="ratings"),
    path('progress/', ProgressView.as_view(), name="progresses"),
    path('jsoncache/', JSONCacheView.as_view(), name="jsoncache"),
]