from django.shortcuts import render
from .models import Faq  # Make sure to import your Faq model

def faq(request):
    faqs = Faq.objects.all()  # Fetch all FAQ data from the database
    return render(request, 'faq/faq.html', {'faqs': faqs})  # Pass the data to the template