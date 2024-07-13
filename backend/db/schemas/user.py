def user_schema(user) -> dict:
    return {
        "id": str(user["_id"]),
        "username": str(user["username"]),
        "email": str(user["email"]),
        "active": bool(user["active"]),
        "name": bool(user["name"]),
        "last_name": bool(user["last_name"]),
        "image": bool(user["image"]),
        "address": bool(user["address"]),
        "country_residence": bool(user["country_residence"]),
        "docs": bool(user["docs"]),
        "role": bool(user["role"]),
        "password": bool(user["password"]),
        "pet": bool(user["pet"])
    }

def users_schema(users) -> list:
    return [user_schema(user) for user in users]
