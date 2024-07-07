import os
from dotenv import load_dotenv
from pymongo import MongoClient, server_api

uri = os.getenv('URL_DB')

# Create a new client and connect to the server
db_client = MongoClient(uri, server_api=server_api.ServerApi('1')).FastAPI

# Send a ping to confirm a successful connection
try:
    db_client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)