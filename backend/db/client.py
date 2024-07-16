import os
from dotenv import load_dotenv
from pymongo import MongoClient, server_api

# Cargar las variables de entorno desde el archivo .env
load_dotenv()

# Obtener la variable de entorno
uri = os.getenv('URL_DB')

# Verificar que la variable se ha cargado correctamente
#print(f"URI: {uri}")

# Create a new client and connect to the server
db_client = MongoClient(uri, server_api=server_api.ServerApi('1')).FastAPI

# Send a ping to confirm a successful connection
try:
    db_client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)