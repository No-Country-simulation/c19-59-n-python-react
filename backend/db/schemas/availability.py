def availability_schema(availability) -> dict:
    return {
        "id": availability["id"],
        "emergency_guard": availability["emergency_guard"],
        "consult": availability["consult"],
    }


def availabilities_schema(availabilities) -> list:
    return [availability_schema(avail) for avail in availabilities]
