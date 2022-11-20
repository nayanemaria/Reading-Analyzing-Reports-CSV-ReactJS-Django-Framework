from django.urls import path
from .views import(
    listar_arquivos,
)

app_name = "Arquivos"

urlpatterns = [
    path("listar_arquivos/", listar_arquivos, name="listar_arquivos"),
]