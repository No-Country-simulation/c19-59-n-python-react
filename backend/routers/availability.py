from fastapi import APIRouter, HTTPException, Depends, status
from db.models.availability import AvailabilityVeterinarian, AvailabilityConfig
from db.client import db_client
from db.schemas.availability import availability_schema, availabilities_schema
from bson import ObjectId
from typing import List

router = APIRouter(prefix="/availability",
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
    id_veterinarian: int, availability: List[AvailabilityConfig]
):
    update_result = db_client.availabilities.update_one(
        {"id_veterinarian": id_veterinarian},
        {"$set": {"availability": [avail.dict() for avail in availability]}},
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
