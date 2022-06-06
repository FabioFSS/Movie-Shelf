from django.db import models
from django.forms import CharField
  
class React(models.Model):
    name = models.CharField(max_length=30)
    detail = models.CharField(max_length=500)


class Aluno(models.Model):
    nome = models.CharField(max_length=30) 
    rg = models.CharField(max_length=9)

    def __str__(self):
        return self.nome   