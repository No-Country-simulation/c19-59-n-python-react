from pydantic import BaseModel
from typing import Optional

class User(BaseModel):
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
    password: str
    pet: Optional[str] = None
    pet_name: Optional[str] = None

class UserOut(BaseModel):
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
