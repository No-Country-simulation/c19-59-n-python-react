from pydantic import BaseModel

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
    password: str
    pet: str

class UserOut(BaseModel):
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
