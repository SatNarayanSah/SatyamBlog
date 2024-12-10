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
    path('post/bookmark-post/', api_views.BookmarkPostAPIView.as_view()),

    path('author/dashboard/stats/<user_id>/', api_views.DashboardStats.as_view()),
    path('author/dashboard/post-list/<user_id>/', api_views.DashboardPostLists.as_view()),
    path('author/dashboard/comment-list/', api_views.DashboardCommentLists.as_view()),
    path('author/dashboard/noti-list/<user_id>/', api_views.DashboardNotificationLists.as_view()),
    path('author/dashboard/noti-mark-seen/', api_views.DashboardMarkNotiSeenAPIView.as_view()),
    path('author/dashboard/reply-comment/', api_views.DashboardReplayCommentAPIView.as_view()),
    path('author/dashbord/post-created/', api_views.DashboardPostCreateAPIView.as_view()),
    path('author/dashboard/post-detail/<user_id>/<post_id>/', api_views.DashboardPostEditAPIView.as_view()),
]
