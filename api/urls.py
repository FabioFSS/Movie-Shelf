from django.urls import path
from .views import ListView, RatingView, ProgressView, JSONCacheView, IndexView

urlpatterns = [
    path('', IndexView.as_view(), name='index'),
    path('list/', ListView.as_view(), name="lists"),
    path('rating/', RatingView.as_view(), name="ratings"),
    path('progress/', ProgressView.as_view(), name="progresses"),
    path('jsoncache/', JSONCacheView.as_view(), name="jsoncache"),
]