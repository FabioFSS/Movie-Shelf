# Generated by Django 4.0.5 on 2022-06-07 00:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_auto_20220606_1324'),
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(max_length=100)),
                ('password', models.CharField(max_length=50)),
                ('profile_pic', models.ImageField(upload_to='')),
                ('birth_date', models.DateField()),
                ('gender', models.CharField(max_length=10)),
                ('location', models.CharField(max_length=10)),
                ('email', models.EmailField(max_length=254)),
                ('language', models.CharField(max_length=10)),
                ('bio', models.TextField()),
                ('content_completed', models.IntegerField()),
                ('average_rating', models.FloatField()),
            ],
        ),
    ]
