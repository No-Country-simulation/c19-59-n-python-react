from pydantic import BaseModel

class User(BaseModel):
    id: str | None
    username: str
    name: str
    last_name: str | None
    image: str | None
    email: str
    active: bool 
    address: str | None
    country_residence: str
    docs: None
    role: None
    password: str
    pet: None
