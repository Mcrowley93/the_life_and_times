from django.urls import path
from blog.views import post_list, all_posts, post_detail

urlpatterns = [
    path('', post_list, name='post_list'),
    path('all_posts/', all_posts, name='all_posts'),
    path('post/<int:pk>/', post_detail, name='post_detail'),
]
