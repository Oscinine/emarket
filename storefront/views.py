from django.shortcuts import render

def home(request):
    return render(request, 'storefront/home.html')


def products(request):
    return render(request, 'storefront/products.html')


def about(request):
    return render(request, 'storefront/about.html')

