from django.db import models

# Create your models here.

class Contats(models.Model):
    whats_app_link = models.URLField(max_length=300, null=True)
    telegram_link = models.URLField(max_length=300, null=True)
    viber_link = models.URLField(max_length=300, null=True)
    instagram_link = models.URLField(max_length=300, null=True)
    vk_group_link = models.URLField(max_length=300, null=True)
    phone_number = models.IntegerField(null=True)

    def __str__(self):
        return f"Контактная информация"
    
class Home_page(models.Model):
    heading = models.CharField(max_length=50)
    heading_text = models.CharField(max_length=1000,null=True)
    video_url = models.URLField(max_length=300)
    
    description_1_title = models.CharField(max_length=200,null=True)
    description_1_text_left = models.CharField(max_length=1000,null=True)
    description_1_text_right = models.CharField(max_length=1000,null=True)

    description_2_title =  models.CharField(max_length=200,null=True)
    description_2_text = models.CharField(max_length=1000,null=True)
    
    description_3_title = models.CharField(max_length=200,null=True)
    description_3_text_1 = models.CharField(max_length=1000,null=True)
    description_3_text_2 = models.CharField(max_length=1000,null=True)
    description_3_text_3 = models.CharField(max_length=1000,null=True)

    

    
    def __str__(self):
            return f"Текст на главной страницы"

class main_menu_bar(models.Model):
    tab_1 = models.CharField(max_length=20)
    tab_2 = models.CharField(max_length=20)
    tab_3 = models.CharField(max_length=20)
    tab_4 = models.CharField(max_length=20)
    tab_5 = models.CharField(max_length=20)

    def __str__(self):
            return f"Название на панели меню"
