from django.shortcuts import render

# Create your views here.

from django.shortcuts import render
import json
from django.contrib.auth.models import User #####
from django.http import JsonResponse , HttpResponse ####
from django.views.decorators.csrf import csrf_exempt

import wikipedia

from template.ner import Inference

inference = Inference("/home/shaking/master/backend/checkpoint/checkpoint.pt")

def index(request):
    return HttpResponse("Hello, world. You're at the wiki index.")

# https://pypi.org/project/wikipedia/#description
@csrf_exempt
def get_template_ner(request):
    if request.method == "POST":
        print('request.body: ', request.body.decode('utf-8'))
        doc = json.loads(request.body.decode('utf-8'))['doc']    
        data = {
            'doc': inference.predict(doc),
            'raw': 'Successful',
        }
        print('json-data to be sent: ', data)
        return JsonResponse(data)
    else:
        return HttpResponse('Invalid request')