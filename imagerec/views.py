# views.py
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import render
from keras.applications.vgg19 import preprocess_input
from keras.models import load_model
from tensorflow.keras.utils import img_to_array
from PIL import Image
import numpy as np
import json
import os

model_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'best_model.h5')
model = load_model(model_path)
#model = load_model('best_model.h5')
ref_dict_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'ref_dict.json')
with open(ref_dict_path, 'r') as file:
    reference = json.load(file)

def index(request):
    return render(request, 'imagerec/image_page.html')

@csrf_exempt
def predict(request):
    if request.method == 'POST':
        file = request.FILES['imageUpload']
        img = Image.open(file).resize((256,256))
        i = img_to_array(img)
        im = preprocess_input(i)
        img = np.expand_dims(im, axis = 0)
        label = np.argmax(model.predict(img))
        return HttpResponse(str(reference[str(label)].split("_")[0]))