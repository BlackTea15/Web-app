from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from django.shortcuts import render

def index(request):
    return render(request, 'main/index.html')


csrf_exempt
def add_note(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        title = data.get('title', '')
        text = data.get('text', '')

        if title and text:
            # Логика сохранения заметки, например:
            # Note.objects.create(title=title, text=text)
            return JsonResponse({'title': title, 'text': text})
        return JsonResponse({'error': 'Invalid data'}, status=400)
    return JsonResponse({'error': 'Invalid request'}, status=405)
