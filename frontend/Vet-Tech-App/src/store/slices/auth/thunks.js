//* thunks: acciones asincronas que disparan otra acción (función que devuelve otra función)

import axios from "axios";
import { chekingStatus, login, logout } from "./authSlice"





export const chekingAuth = () => {
    return async (dispatch) => {

        //manejo de estado de auth = 'checking'
        dispatch(chekingStatus());
    }
}


export const startGoogleSingIn = () => {
    return async (dispatch) => {

        //manejo de estado de auth = 'checking'
        dispatch(chekingStatus());

        // await funcion de singwithgoogle
        // logout error message

        dispatch(login()) // hay q pasarle algo al login
    }
}


export const startLoginWithEmailAndPassword = ({ email, password }) => {
    return async (dispatch) => {

        //manejo de estado de auth = 'checking'
        dispatch(chekingStatus());

        try {
            // Convertir JSON a application/x-www-form-urlencoded
            const formData = new URLSearchParams();
            formData.append('username', email);
            formData.append('password', password);

            const { data } = await axios.post('http://127.0.0.1:8000/auth/login', formData, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });

            console.log(data)
            dispatch(login(data)) // data tiene que contener el uid, email, password, etc


        } catch (error) {
            // Extraer el mensaje de error
            const errorMessage = error.response?.data?.detail || 'Ocurrio un error. Por favor intenta nuevamente.';

            // logout error message
            dispatch(logout({ errorMessage }));
        }


    }
}

// axios.get('http://127.0.0.1:8000/auth/users/me', {
//     headers: {
//         'Authorization': `Bearer ${token}`,
//         'Content-Type': 'application/json'
//     }
// })