from fastapi import FastAPI
from routers import users, auth
from fastapi.staticfiles import StaticFiles

app = FastAPI()

# Routers
app.include_router(auth.router)
app.include_router(users.router)

app.mount("/static", StaticFiles(directory="static"), name="static")

@app.get("/", tags=["Root"])
async def root():
    return "fas tapi"

# Para levantar el server, recarga cada vez que se guardan cambios: uvicorn app.main:app --reload
# Para levantar el server sin reload automatico: uvicorn app.main:app

# Documentacion con swagger http://127.0.0.1:8000/docs
# Documentacion con redoc http://127.0.0.1:8000/redoc