import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import axios from "axios";
import { login, logout } from "../store/slices/auth/authSlice";
const BASE_URL = 'https://c19-59-n-python-react.onrender.com'


export const useCheckAuth = () => {

    const { status, token, role } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    
    useEffect( () => {
        
        async function fetchData() {

            if (token) {
                try {
                    const {data: userData } = await axios.get(`${BASE_URL}/auth/users/me`, {
                        headers: {
                            'Authorization': `Bearer ${token}`,
                        }
                    });
                    console.log('esto es fetch data', userData);
                    const { id, email, role, token } = userData;

                    dispatch(login ({id, role, email}))

                } catch {
                    dispatch(logout({ errorMessage: "Expiro, por favor logueate de nuevo" }));
                }

         } else {
            dispatch(logout({ errorMessage: null }))
         }

        }

        fetchData();
    

    }, [dispatch, token])
    

    return {status, role}
}