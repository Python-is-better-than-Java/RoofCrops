from django.db import models

class Faq(models.Model):
    no = models.IntegerField(primary_key=True)
    question = models.TextField()
    answer = models.TextField()