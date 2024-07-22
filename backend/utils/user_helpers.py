from db.schemas.user import user_schema, users_schema
from db.models.user import User, UserOut
from db.client import db_client

def search_usr(key: str, value):
    try:
        user = user_schema(db_client.users.find_one({key: value}))
        return UserOut(**user)
    except Exception as e:
        return {"error": f"Usuario no encontrado: {e}"}
    
def search_user_db_by_email(email: str):
    try:
        user = user_schema(db_client.users.find_one({"email": email}))
        return User(**user)
    except Exception as e:
        return {"error": f"Usuario no encontrado: {e}"}
