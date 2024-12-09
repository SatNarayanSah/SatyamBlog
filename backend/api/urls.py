from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView
from api import views as api_views
from .views import *


urlpatterns = [
    path('user/token/', api_views.MyTokenObtainPairView.as_view()),
    path('user/token/refresh/',TokenRefreshView.as_view()),
    path('user/register/', api_views.RegisterView.as_view()),
    path('user/profile/<int:user_id>/', ProfileView.as_view(), name='profile'),

    path('post/category/list/', api_views.CategoryListAPIView.as_view()),
    path('post/category/posts/<category_slug>/', api_views.CategoryListAPIView.as_view()),
    path('post/lists/',api_views.PostListAPIView.as_view()),
    path('post/details/<slug>/', api_views.PostDetailsAPIView.as_view()),
    path('post/like-post/', api_views.LikePostAPIView.as_view()),
    path('post/comemnt-post/', api_views.PostCommentAPIView.as_view()),
]
