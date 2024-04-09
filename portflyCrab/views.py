from django.shortcuts import render
from django.http import JsonResponse
from .models import Dimension


def index(request):

    return render(request, 'portflycrab/portindex.html')


def about(request):
    return render(request, 'portflycrab/about.html')



def transformpdf(request):
    return render(request, 'portflycrab/algpdf.html')





def get_dimensions(request):
    data = Dimension.objects.all().values('year', 'width', 'height', 'count')
    return JsonResponse(list(data), safe=False)