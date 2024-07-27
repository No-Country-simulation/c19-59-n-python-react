def availability_schema(availability) -> dict:
    return {
        "id_veterinarian": availability.get("id_veterinarian"),
        "availability": availability.get("availability", [])
    }

def availabilities_schema(availabilities) -> list:
    return [availability_schema(avail) for avail in availabilities]
