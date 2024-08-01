from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import users, auth, availability,call
from fastapi.staticfiles import StaticFiles
""" 
HSTS (HTTP Strict Transport Security): Los servidores pueden implementar HSTS, lo que obliga a los navegadores a usar solo conexiones HTTPS y nunca HTTP. Esto previene ataques como el downgrade, donde un atacante intenta degradar la conexión de HTTPS a HTTP.
"""
from starlette.middleware.httpsredirect import HTTPSRedirectMiddleware
from starlette.middleware.trustedhost import TrustedHostMiddleware


app = FastAPI()

app.add_middleware(
    CORSMiddleware,  
    allow_origins=["*"],  # Permitir todas las orígenes
    allow_credentials=True,
    allow_methods=["*"],  # Permitir todos los métodos (GET, POST, etc.)
    allow_headers=["*"],  # Permitir todos los encabezados
)

# # Solo permitir solicitudes de dominios de confianza
# app.add_middleware(TrustedHostMiddleware, allowed_hosts=['yourdomain.com', 'www.yourdomain.com'])

# # Redireccionar automáticamente de HTTP a HTTPS
# app.add_middleware(HTTPSRedirectMiddleware)

# @app.middleware("http")
# async def add_security_headers(request, call_next):
#     response = await call_next(request)
#     response.headers['Strict-Transport-Security'] = 'max-age=31536000; includeSubDomains'# CSP para prevenir ataques de Cross-Site Scripting (XSS) y otros inyecciones de contenido.
#     response.headers['X-Content-Type-Options'] = 'nosniff' # Este encabezado evita que el navegador interprete el contenido en un tipo diferente al especificado por el servidor.
#     response.headers['X-Frame-Options'] = 'DENY' # Este encabezado evita que tu sitio sea embebido en un iframe en otros sitios.
#     response.headers['X-XSS-Protection'] = '1; mode=block' #Este encabezado habilita el filtro XSS en navegadores.
#     return response



# app.mount("/static", StaticFiles(directory="static"), name="static")
# Routers
app.include_router(auth.router)
app.include_router(users.router)

# app.mount("/static", StaticFiles(directory="static"), name="static")
app.include_router(availability.router)
app.include_router(call.router)

@app.get("/", tags=["Root"])
async def root():
    return "Que miras? 👀"

