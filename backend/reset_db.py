""" 
CREE ESTE SCRIPT PARA LIMPIAR LOS DATOS DE LA DB DE FORMA FACIL
SOLO HAY QUE EJECUTAR EL SIGUIENTE COMANDO: python reset_db.py

"""

from pymongo import MongoClient
from dotenv import load_dotenv
import os

# Cargar las variables de entorno
load_dotenv()

# Conectar a la base de datos
uri = os.getenv('URL_DB')
client = MongoClient(uri)
db = client['FastAPI']

# Nombres de las colecciones
collections = ['users']  # Añade más nombres de colecciones si es necesario

# Eliminar colecciones existentes
for collection_name in collections:
    db.drop_collection(collection_name)
    print(f"Colección '{collection_name}' eliminada")

# Crear nuevas colecciones basadas en los modelos actuales
# Nota: MongoDB crea colecciones automáticamente cuando insertas un documento.
# Aquí se pueden insertar documentos de ejemplo si se desea inicializar las colecciones

# Ejemplo de inserción de documentos en la colección 'users'
#users_collection = db['users']
# users_collection.insert_many([
#     {
#         "username": "example_user1",
#         "name": "John",
#         "last_name": "Doe",
#         "image": "NULL",
#         "email": "john.doe@example.com",
#         "active": "NULL",
#         "address": "123 Main St",
#         "country_residence": "USA",
#         "docs": "NULL",
#         "role": "NULL",
#         "password": "hashed_password",
#         "pet": "NULL",
#         "pet_name": "NULL",
#         "phone_number": "123-456-7890"
#     },
#     {
#         "username": "example_user2",
#         "name": "Jane",
#         "last_name": "Doe",
#         "image": "NULL",
#         "email": "jane.doe@example.com",
#         "active": "NULL",
#         "address": "456 Elm St",
#         "country_residence": "ARG",
#         "docs": "NULL",
#         "role": "NULL",
#         "password": "hashed_password",
#         "pet": "NULL",
#         "pet_name": "NULL",
#         "phone_number": "987-654-3210"
#     }
# ])

# print("Nuevas colecciones creadas y documentos de ejemplo insertados")
