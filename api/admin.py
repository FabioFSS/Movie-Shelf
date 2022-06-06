from django.contrib import admin
from api.models import Aluno
# Register your models here.


class Alunos(admin.ModelAdmin):
    list_display = ('id', 'nome', 'rg')
    list_display_links = ('id', 'nome')
    search_fields = ('nome',)

admin.site.register(Aluno, Alunos)