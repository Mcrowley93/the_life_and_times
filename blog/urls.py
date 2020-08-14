from django.urls import path
from blog.views import post_list, all_posts

urlpatterns = [
    path('', post_list, name='post_list'),
    path('all_posts/', all_posts, name='all_posts')
]
