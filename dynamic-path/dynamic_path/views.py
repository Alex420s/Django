from django.shortcuts import render
from django.http import HttpResponseNotFound
from django.urls import reverse

import calendar 
from calendar import HTMLCalendar
from datetime import datetime
# Create your views here.

monthly_challenges = {
    'january': 'Walk for at least 20 minutes every day!',
    'february':'Eat no meat for the entire month!',
    'march':'Learn Django for at least 20 minutes every day!',
    'april':'Kiss my baby',
    'may':None,
    'june':'Go to the movies',
    'july':'Learnig a little each day adds up.',
    'august':'Set time aside to learn',
    'september':'get reminders using yor learning scheduler',
    'october':'challenges',
    'november':'work hard',
    'december':'kiss my baby',
}

def index(request):
    months = list(monthly_challenges.keys())
    
    context = {
        'months': months,
    }

    return render(request, 'calendar/home.html', context=context)


def strcalendar(request, year, month):
    name = 'Alex'
    int_month = list(calendar.month_name).index(month)
    
    challenge_keys = list(monthly_challenges.keys())
    challenge_text = challenge_keys[int_month - 1]
    challenge_text = monthly_challenges[challenge_text]
    
        # Create a calendar 
    cal = HTMLCalendar().formatmonth(year, int_month)

    cal = cal.replace('<td ', '<td  width="130" height="130"')
        
    context = {
            'name': name,
            'month': month,
            'year': year,
            'cal':cal,
            
            'challenge_text': challenge_text

        }
    return render( request, 'calendar/index.html', context=context)
    
def intcalendar(request, year, month):
    name = 'Alex'
    # Create a calendar 
    if month > len(monthly_challenges): 
        return HttpResponseNotFound("This month is not suported, Try month name or digit 01-12")

    cal = HTMLCalendar().formatmonth(year, month)

    challenge_keys = list(monthly_challenges.keys())
    challenge_text = challenge_keys[month - 1]
    challenge_text = monthly_challenges[challenge_text]

    context = {
        'name': name,
        'month': month,
        'year': year,
        'cal':cal,
        'challenge_text': challenge_text

    }

    return render( request, 'calendar/index.html', context=context)
