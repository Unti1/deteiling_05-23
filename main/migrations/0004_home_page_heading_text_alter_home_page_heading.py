# Generated by Django 4.2.2 on 2023-06-13 05:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0003_home_page_main_menu_bar'),
    ]

    operations = [
        migrations.AddField(
            model_name='home_page',
            name='heading_text',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='home_page',
            name='heading',
            field=models.CharField(max_length=50),
        ),
    ]
