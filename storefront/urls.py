from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='storefront-home'),
    path('products/', views.products, name='storefront-products'),
    path('about-us/', views.about, name='storefront-about')
]
