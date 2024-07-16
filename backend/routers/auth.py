import os
import jwt
from dotenv import load_dotenv
from fastapi import APIRouter, HTTPException, Depends, status
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from pydantic import BaseModel
from passlib.context import CryptContext
from datetime import datetime, timedelta, timezone

SECRET_KEY = os.getenv('SECRET_KEY')
ALGORITHM = os.getenv('ALGORITHM')
ACCESS_TOKEN_EXPIRE_MINUTES = os.getenv('ACCESS_TOKEN_EXPIRE_MINUTES')

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

router = APIRouter(prefix="/auth", 
                   tags=["JWT Auth"],
                   responses={404: {"messaje" : "No encontrado"}})

oauth2 = OAuth2PasswordBearer(tokenUrl="login")

# Modelo de usuario
class User(BaseModel):
    id: str 
    username: str
    name: str
    last_name: str 
    image: str 
    email: str
    active: bool 
    address: str 
    country_residence: str
    docs: str
    role: str
    pet: str

# Modelo de usuario
class UserDB(BaseModel):
    id: str
    username: str
    name: str
    last_name: str
    image: str
    email: str
    active: bool 
    address: str
    country_residence: str
    docs: str
    role: str
    password: str
    pet: str

users_db: UserDB = {
  "johndoe": {
    "username": "johndoe",
    "name": "John",
    "last_name": "Doe",
    "email": "johndoe@example.com",
    "active": True,
    "password": "$2a$12$3s76GKJHdQuNXuBT9JbBFuQJLgMlIzwBSJX5CZe3SSNesywhLRbY2"
  }
}

""" HELPERS FUCNTIONS """

def search_user_db(username: str): 
    try:
        if username in users_db:
            return UserDB(**users_db[username])
        
        raise HTTPException(status_code = status.HTTP_400_BAD_REQUEST, detail = "El usuario no existe")
    except Exception as e:
        raise HTTPException(status_code = status.HTTP_400_BAD_REQUEST, detail = "El usuario no existe")

def search_user(username: str): 
    try:
        if username in users_db:
            return User(**users_db[username])
        
        raise HTTPException(status_code = status.HTTP_400_BAD_REQUEST, detail = "El usuario no existe")
    except Exception as e:
        raise HTTPException(status_code = status.HTTP_400_BAD_REQUEST, detail = "El usuario no existe")

async def search_auth_user(token: str = Depends(oauth2)):
    try:

        username = jwt.decode(
            jwt=token,
            key=SECRET_KEY,
            algorithms=ALGORITHM).get("sub")

        if username is None:
                raise HTTPException(
                    status_code = status.HTTP_401_UNAUTHORIZED, 
                    detail = "Credenciales invalidas", 
                    headers={"WWW-Authenticate": "Bearer"})

        return search_user(username)
    
    except jwt.PyJWTError as jwt_error: 
        raise HTTPException(
                    status_code = status.HTTP_401_UNAUTHORIZED, 
                    detail = f"Credenciales invalidas: {jwt_error}", 
                    headers={"WWW-Authenticate": "Bearer"})

# Criterio de dependencia
async def current_user(user: str = Depends(search_auth_user)):
    try:
        if not user.active:
            raise HTTPException(
                status_code = status.HTTP_400_BAD_REQUEST, 
                detail = "Usuario inactivo")
        
        return user
    
    except HTTPException as exc:
        raise exc
    except Exception as e:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=str(e))
    

""" ROUTES """

@router.post("/login")
async def login(form: OAuth2PasswordRequestForm = Depends()):
    try:
        user_db = users_db.get(form.username)

        if not user_db:
            raise HTTPException(
                status_code = status.HTTP_400_BAD_REQUEST, 
                detail = "El usuario no existe")
        
        user = search_user_db(form.username)

        if not pwd_context.verify(form.password, user.password):
            raise HTTPException(status_code = 400, detail = "El password es incorrecto")
        
        access_token_timeout = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
        
        expire = datetime.now(timezone.utc) + access_token_timeout

        access_token = {
            "sub": user.username,
            "exp": expire
        }

        return {
            "access_token" : jwt.encode(
                payload=access_token, 
                algorithm=ALGORITHM,
                key=SECRET_KEY),
            "token_type" : "bearer"
        }
    
    except HTTPException as exc:
        raise exc
    except Exception as e:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=str(e))

@router.get("/users/me")
async def me(user: User = Depends(current_user)):
    try:
        return user
    except Exception as e:
        raise HTTPException(status_code = 204, detail = f"El usuario no existe, {e}")