from rest_framework.response import Response
from rest_framework import status
from rest_framework.pagination import PageNumberPagination
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from django.core.files.storage import FileSystemStorage
import csv, json, os, environ

@api_view(['POST'])
@permission_classes([AllowAny])
def listar_arquivos(request):
    try:
        ROOT_DIR = (environ.Path(__file__) - 3)
        print(ROOT_DIR)
        APPS_DIR = ROOT_DIR.path("desafio")
        my_result = []
        
        arquivo = request.FILES['file']
        fs = FileSystemStorage()
        filename = fs.save(arquivo.name, arquivo )
        uploaded_file_url = fs.url("desafio/"+filename)
        diretorio = os.path.dirname(os.path.dirname(filename))
        print("arquivo",uploaded_file_url)
        diretorio_arquivo = '{}{}'.format(APPS_DIR,uploaded_file_url)
        print("diretorio_arquivo",diretorio_arquivo)
        with open("/Users/pipocadigital/Documents/" + uploaded_file_url) as csv_file_handler:
            print("ENTREI AQUI NESSE CARAI")
            csv_reader = csv.reader(csv_file_handler)
            print("CSV READER", csv_reader)
            csv_reader.__next__()
            for row in csv_reader:
                csv_teste = {
                    "hostname": row[0],
                    "ip_adress": row[1],
                    "vulnerability_title": row[2],
                    "vulnerability_severity": row[3],
                    "vulnerability_cvss": row[4],
                    "vulnerability_publication_date": row[5],
                }
                my_result.append(csv_teste)
            print(len(my_result))
            print(my_result)
            
        context = {
             'pagination': {
                "count": len(my_result),
                "pages": 1,
            },
            "list": my_result
        } 
        return Response(context, status=status.HTTP_200_OK)
    except Exception as ERROR:
        context = {
            "error": ERROR,
            "message": "Erro na listagem de companhias"}
        return Response(context, status=status.HTTP_400_BAD_REQUEST)