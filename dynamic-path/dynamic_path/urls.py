from django.urls import path

from . import views
"""
    PATH CONVERTERS
    int: numbers
    str: strings
    path: whole urls /
    slug: hyphen-and_underscores
    UUID: universally unique identifier
    """
urlpatterns = [
    path('', views.index, name='index'),
    path('<int:year>/<int:month>/', views.intcalendar),
    path('<int:year>/<str:month>/', views.strcalendar, name="str-cal"),
    
]
