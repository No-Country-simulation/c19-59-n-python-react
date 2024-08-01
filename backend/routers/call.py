from __future__ import print_function
import os.path

from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from google.apps import meet_v2
from fastapi import APIRouter, HTTPException, status
from pydantic import BaseModel

SCOPES = ['https://www.googleapis.com/auth/meetings.space.created']


class CallResponse(BaseModel):
    url:str
    status: str = "created"
    message: str = "link de llamada"

router = APIRouter(prefix='/call',tags=['Call'], responses={status.HTTP_404_NOT_FOUND: {"messaje" : "No encontrado"}})


@router.post("/new", response_model=CallResponse ,status_code=status.HTTP_201_CREATED)
async def newCall():
    creds = None
    if os.path.exists ('token.json'):
        creds = Credentials.from_authorized_user_file('token.json', SCOPES)

    if not creds or not creds.refresh_token:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            flow = InstalledAppFlow.from_client_secrets_file(
                'routers/credentials.json', SCOPES)
            creds = flow.run_local_server(port=0)

        with open('token.json','w') as token:
            token.write(creds.to_json())

    try:
        client = meet_v2.SpacesServiceClient(credentials=creds)
        request = meet_v2.CreateSpaceRequest()
        response = client.create_space(request=request)
        print(f'Space created: {response.meeting_uri}')
        return CallResponse(url=str(response.meeting_uri))
        

    except Exception as error:
        print(f'Un error ocurrio en: [ {error}]')
        return CallResponse(url="sin url",status="pending", message="Error al crear la llamada:")
        