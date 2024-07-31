import axios from "axios";

const API_URL = 'http://localhost:3000'

/* export const getUserData = async (token) => {
    try {
        const response = await axios.get(`${API_URL}/auth/users/me`, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw error;
    }
} */
export const getUserData = async () => {
    try {
        const response = await axios.get(`${API_URL}/users/1`);
        return response.data;
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw error;
    }
}


