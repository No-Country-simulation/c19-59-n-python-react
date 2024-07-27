from fastapi import APIRouter, HTTPException, status
from db.models.availability import AvailabilityVeterinarian, AvailabilityConfig
from db.client import db_client
from db.schemas.availability import availability_schema, availabilities_schema
from bson import ObjectId
from typing import List

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
