# Generated by Django 4.2.7 on 2023-11-22 13:12

from django.db import migrations, models


class Migration(migrations.Migration):
    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Faq",
            fields=[
                ("no", models.IntegerField(primary_key=True, serialize=False)),
                ("question", models.TextField()),
                ("answer", models.TextField()),
            ],
        ),
    ]