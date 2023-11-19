from django.shortcuts import render

def landing(request):
    return render(request, 'landing/front_page.html')