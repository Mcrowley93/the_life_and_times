from django.urls import path
from blog.views import post_list, all_posts, post_detail, new_post, post_edit

urlpatterns = [
    path('', post_list, name='post_list'),
    path('all_posts/', all_posts, name='all_posts'),
    path('post/<int:pk>/', post_detail, name='post_detail'),
    path('post/new/', new_post, name='new_post'),
    path('post/<int:pk>/edit/', post_edit, name='post_edit'),
]
