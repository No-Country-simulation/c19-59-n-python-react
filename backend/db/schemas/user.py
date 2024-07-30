def user_schema(user) -> dict:
    return {
        "id": str(user["_id"]),
        "username": str(user["username"]),
        "email": str(user["email"]),
        "active": bool(user["active"]),
        "name": str(user["name"]),
        "last_name": str(user["last_name"]),
        "image": str(user["image"]),
        "address": str(user["address"]),
        "country_residence": str(user["country_residence"]),
        "docs": str(user["docs"]),
        "role": str(user["role"]),
        "password": str(user["password"]),
        "pet": str(user["pet"]),
        "pet_name": str(user["pet_name"])
    }

def users_schema(users) -> list:
    return [user_schema(user) for user in users]
