from datetime import datetime
from fastapi import APIRouter, HTTPException, status, Query
from db.models.availability import AvailabilityVeterinarian, AvailabilityConfig
from db.client import db_client
from db.schemas.availability import availability_schema, availabilities_schema
from bson import ObjectId
from typing import List, Optional

# Import Services
from services.availability_service import get_availabilities_veterinarian

router = APIRouter(
    prefix="/availability",
    tags=["Availability"],
    responses={status.HTTP_404_NOT_FOUND: {"message": "Not found"}},
)


@router.post(
    "/", response_model=AvailabilityVeterinarian, status_code=status.HTTP_201_CREATED
)
async def create_availability(availability: AvailabilityVeterinarian):
    availability_dict = availability.dict()
    result = db_client.availabilities.insert_one(availability_dict)
    new_availability = db_client.availabilities.find_one({"_id": result.inserted_id})
    return AvailabilityVeterinarian(**availability_schema(new_availability))


@router.get("/", response_model=List[AvailabilityVeterinarian])
async def get_all_availabilities():
    availabilities = db_client.availabilities.find()
    return [
        AvailabilityVeterinarian(**availability_schema(availability))
        for availability in availabilities
    ]


@router.get("/{id_veterinarian}", response_model=AvailabilityVeterinarian)
async def get_availability(id_veterinarian: int):
    availability = db_client.availabilities.find_one(
        {"id_veterinarian": id_veterinarian}
    )
    if availability is None:
        raise HTTPException(status_code=404, detail="Availability not found")
    return AvailabilityVeterinarian(**availability_schema(availability))


@router.put("/{id_veterinarian}", response_model=AvailabilityVeterinarian)
async def update_availability(
    id_veterinarian: int, availability: AvailabilityVeterinarian
):
    update_result = db_client.availabilities.update_one(
        {"id_veterinarian": id_veterinarian}, {"$set": availability.dict()}
    )
    if update_result.matched_count == 0:
        raise HTTPException(status_code=404, detail="Availability not found")
    updated_availability = db_client.availabilities.find_one(
        {"id_veterinarian": id_veterinarian}
    )
    return AvailabilityVeterinarian(**availability_schema(updated_availability))


@router.delete("/{id_veterinarian}", status_code=status.HTTP_200_OK)
async def delete_availability(id_veterinarian: int):
    delete_result = db_client.availabilities.delete_one(
        {"id_veterinarian": id_veterinarian}
    )
    if delete_result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Availability not found")
    return {"message": "Availability deleted successfully"}


@router.delete("/{id_veterinarian}/config/{config_id}", status_code=status.HTTP_200_OK)
async def delete_availability_config(id_veterinarian: int, config_id: int):
    availability = db_client.availabilities.find_one(
        {"id_veterinarian": id_veterinarian}
    )
    if availability is None:
        raise HTTPException(status_code=404, detail="Availability not found")

    new_config = [
        config for config in availability["availability"] if config["id"] != config_id
    ]

    update_result = db_client.availabilities.update_one(
        {"id_veterinarian": id_veterinarian}, {"$set": {"availability": new_config}}
    )
    if update_result.matched_count == 0:
        raise HTTPException(status_code=404, detail="Availability config not found")

    updated_availability = db_client.availabilities.find_one(
        {"id_veterinarian": id_veterinarian}
    )
    return AvailabilityVeterinarian(**availability_schema(updated_availability))


@router.get("/dates/")
async def get_availability_dates(
    id_veterinarian: int = Query(..., description="ID del veterinario"),
    date: Optional[str] = Query(None, description="Fecha en formato YYYY-MM-DD"),
    simplified: bool = Query(False, description="Simplificar la respuesta"),
):
    # Obtener disponibilidad del veterinario específico
    availability = db_client.availabilities.find_one(
        {"id_veterinarian": id_veterinarian}
    )
    if not availability:
        raise HTTPException(status_code=404, detail="Availability not found")

    # Obtener las disponibilidades procesadas
    availabilities = get_availabilities_veterinarian(
        availability, simplified=simplified
    )

    # Filtrar por fecha si se proporciona
    if date:
        try:
            date_obj = datetime.strptime(date, "%Y-%m-%d").strftime("%Y-%m-%d")
        except ValueError:
            raise HTTPException(
                status_code=400, detail="Invalid date format. Use YYYY-MM-DD."
            )

        if date_obj in availabilities["datesCollection"]:
            filtered_dates = {date_obj: availabilities["datesCollection"][date_obj]}
            availabilities["datesCollection"] = filtered_dates
            availabilities["all"] = [date_obj]
        else:
            availabilities["datesCollection"] = {}
            availabilities["all"] = []

    return availabilities
