import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import axios from "axios";
import { login, logout } from "../store/slices/auth/authSlice";




export const useCheckAuth = () => {

    const { status, token, role } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    
    useEffect( () => {
        
        async function fetchData() {

            if (token) {
                try {
                    const {data: userData } = await axios.get('http://127.0.0.1:8000/auth/users/me', {
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