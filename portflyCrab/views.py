from django.shortcuts import render
from django.http import JsonResponse



def index(request):

    return render(request, 'portflycrab/portindex.html')


def about(request):
    return render(request, 'portflycrab/about.html')



def transformpdf(request):
    return render(request, 'portflycrab/algpdf.html')
