from keras.applications.vgg19 import preprocess_input
from keras.models import load_model
from tensorflow.keras.utils import img_to_array
from flask import Flask, request, jsonify, render_template
import base64
import io
from PIL import Image
import numpy as np
import json

app = Flask(__name__)

model = load_model('best_model.h5')
with open("ref_dict.json", 'r') as file:
    reference = json.load(file)

@app.route('/')
def index():
    return render_template('image_page.html')

@app.route('/predict', methods=['POST'])
def handle_request():
    file = request.files['imageUpload']
    img = Image.open(file.stream).resize((256,256))
    i = img_to_array(img)
    im = preprocess_input(i)
    img = np.expand_dims(im, axis = 0)
    label = np.argmax(model.predict(img))
    return str(reference[str(label)].split("_")[0])

if __name__ == '__main__':
    app.run(debug = True)