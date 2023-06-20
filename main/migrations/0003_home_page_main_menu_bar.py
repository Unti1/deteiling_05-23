# Generated by Django 4.2.2 on 2023-06-12 20:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0002_alter_contats_phone_number'),
    ]

    operations = [
        migrations.CreateModel(
            name='Home_PAGE',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('heading', models.CharField(max_length=500)),
                ('video_url', models.URLField(max_length=300)),
            ],
        ),
        migrations.CreateModel(
            name='main_menu_bar',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('tab_1', models.CharField(max_length=20)),
                ('tab_2', models.CharField(max_length=20)),
                ('tab_3', models.CharField(max_length=20)),
                ('tab_4', models.CharField(max_length=20)),
                ('tab_5', models.CharField(max_length=20)),
            ],
        ),
    ]