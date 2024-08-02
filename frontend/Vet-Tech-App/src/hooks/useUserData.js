import axios from "axios";
import { useEffect, useState } from "react";

const API_URL = 'http://127.0.0.1:8000'

export const useUserData = (token) => {

    const [userData, setUserData] = useState(null)

    useEffect(() => {
        const fetchUserData = async () => {

            try {
                const response = await axios.get(`${API_URL}/auth/users/me`, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                });
                setUserData(response.data)

            } catch (error) {
                console.error('Error fetching user data:', error);
                throw error;
            }
        }

        if(token) {
            fetchUserData()
        }

    }, [token])
    


    return { userData }
}


