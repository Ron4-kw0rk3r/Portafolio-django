from django.shortcuts import render

def index(request):
    return render(request, 'portflycrab/index.html')


def about(request):
    return render(request, 'portflycrab/about.html')



