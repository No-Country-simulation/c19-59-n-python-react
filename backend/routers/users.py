from fastapi import APIRouter, HTTPException, status, Query
from pydantic import BaseModel
from db.models.user import User
from db.client import db_client
from db.schemas.user import user_schema, users_schema
from bson import ObjectId
from utils.user_helpers import search_usr
from utils.hash_pwd import hash_password
from typing import Optional, List

router = APIRouter(prefix="/user", 
                   tags=["User"],
                   responses={status.HTTP_404_NOT_FOUND: {"messaje" : "No encontrado"}})

class MessageResponse(BaseModel):
    message: str

class UserNoPass(BaseModel):
    id: Optional[str] = None 
    username: Optional[str] = None
    name: str
    last_name: Optional[str] = None 
    image: Optional[str] = None 
    email: str
    active: Optional[bool] = None 
    address: Optional[str] = None 
    country_residence: str
    docs: Optional[str] = None
    role: str
    pet: Optional[str] = None
    pet_name: Optional[str] = None

@router.get("/all", response_model=list[UserNoPass])
async def getAllUsers(
    role: Optional[str] = Query(None, description="Role del usuario"),
    country_residence: Optional[str] = Query(None, description="Residencia del usuario"),
    is_null: Optional[str] = Query(None, description="Campo nulo (opcional)")
):
    query = {}
    if role:
        query["role"] = {"$regex": f"^{role}$", "$options": "i"}
    if country_residence:
        if len(country_residence) > 3:
            raise HTTPException(status_code=400, detail="El parámetro country_residence debe tener un máximo de 3 caracteres")
        query["country_residence"] = {"$regex": f"^{country_residence}$", "$options": "i"}
    if is_null:
        query[is_null] = None
    users = users_schema(db_client.users.find(query))
    for user in users:
        del user["password"]
    return users

@router.get("/by-id/{id}")
async def getUserById(id: str):
    return search_usr("_id", ObjectId(id))
    
@router.get("/by-id")
async def getUserByQuery(id: str):
    return search_usr("_id", ObjectId(id))

@router.post("/new", response_model=User, status_code=status.HTTP_201_CREATED)
async def newUser(user: User):

    if type(search_usr("email", user.email)) is User:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail="El usuario ya existe"
        )

    user_dict = dict(user)
    user_dict["password"] = hash_password(user.password)  # Hasheando la contraseña
    del user_dict['id']

    user_id = db_client.users.insert_one(user_dict).inserted_id

    new_user = user_schema(db_client.users.find_one({"_id": user_id}))
    
    return User(**new_user)

@router.delete("/delete/{id}", status_code=status.HTTP_200_OK)
async def deleteUser(id: str):
    try:
        found = db_client.users.find_one_and_delete({"_id": ObjectId(id)})
        
        if not found:
            return {"error": "El usuario no existe."}
        
        return {"message": "Usuario eliminado exitosamente."}
            
    except Exception as error:
        return {"error": str(error)}

@router.put("/update", response_model=User)
async def editUser(user: User):
    try:
        # Asegúrate de usar el operador $set para actualizar los campos especificados
        updated_user = db_client.users.find_one_and_update(
            {"_id": ObjectId(user.id)},
            {
                "$set": {
                    "username": user.username,
                    "email": user.email,
                    "active": user.active
                }
            },
            return_document=True  # Para devolver el documento actualizado
        )

        # Verifica si se encontró y actualizó el usuario
        if not updated_user:
            raise HTTPException(status_code=404, detail="Usuario no encontrado")

        # Utiliza user_schema para convertir el documento actualizado a un dict
        return User(**user_schema(updated_user))
    except Exception as error:
        return {"error": error}
    
@router.delete("/all")
async def deleteUsers(
    role: Optional[str] = Query(None, description="Role del usuario"),
    country_residence: Optional[str] = Query(None, description="Residencia del usuario"),
    is_null: Optional[str] = Query(None, description="Campo nulo (opcional)")
):
    query = {}
    if role:
        query["role"] = {"$regex": f"^{role}$", "$options": "i"}
    if country_residence:
        query["country_residence"] = {"$regex": f"^{country_residence}$", "$options": "i"}
    if is_null:
        query[is_null] = None
    
    try:
        result = db_client.users.delete_many(query)
        if result.deleted_count == 0:
            raise HTTPException(status_code=404, detail="No se encontraron usuarios para eliminar con los criterios dados")
        return {"message": f"{result.deleted_count} usuarios eliminados exitosamente"}
    except Exception as error:
        return {"error": str(error)}