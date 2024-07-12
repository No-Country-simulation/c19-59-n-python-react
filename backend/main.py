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
    return "Que miras? 👀"

