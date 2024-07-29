import axios from "axios";

const API_URL = 'http://localhost:5173'

export const getUserData = async (token) => {
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
}