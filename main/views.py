from django.shortcuts import render
from .models import Contats,main_menu_bar,Home_page

# Create your views here.
def home(request):
    contacts = Contats.objects.values()[0]
    home_text = Home_page.objects.values()[0]
    mm_bar = main_menu_bar.objects.values()[0]
    return render(request,'home/index.html',{'contacts': contacts, 'home_text': home_text,'main_menu':mm_bar})