//* thunks: acciones asincronas que disparan otra acción (función que devuelve otra función)

import axios from "axios";
import { chekingStatus, login, logout } from "./authSlice"
import { createAsyncThunk } from "@reduxjs/toolkit";





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

                //convertir a JSON a application/x-www-form-urlencoded
                const formData = new URLSearchParams();
                formData.append('username', email);
                formData.append('password', password);

                const { data } = await axios.post(`http://127.0.0.1:8000/auth/login`, formData, {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                });
                console.log(data);
                dispatch( login ( data) ) // data tiene que contener el uid, email, password, etc
                
            } catch (error) {
                const errorMessage = error.response?.data?.detail || 'Ocurrio un error. Por favor intente nuevamente'
                return dispatch(logout({ errorMessage }))
            }

    }
}


export const startRegisterCustomer = ( { name, email, password, password2, pets, country } ) => {
    return async ( dispatch ) => {

        dispatch( chekingStatus() );


        try {
            const { data } = await axios.post(`http://127.0.0.1:8000/auth/user/new`, {
                name, 
                email, 
                password, 
                password2, 
                pets, 
                country, 
                role: 'customer'
            }, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }
        );
            console.log(data);
            dispatch( login ( data ) ) // data tiene que contener el uid, email, password, etc
            
        } catch (error) {
            console.error(error)
            return dispatch(logout({ errorMessage: error.response.data.message}))
        }


    }
}

export const startRegisterVeterinary = ( { name, email, password, password2, id_number, country_residence, telephone_number, zip_code } ) => {
    return async ( dispatch ) => {

        dispatch( chekingStatus() );
        
        try {
            const { data } = await axios.post(`http://127.0.0.1:8000/auth/user/new`, {
                name, 
                email, 
                password, 
                password2, 
                country_residence, 
                id_number, 
                telephone_number, 
                zip_code,
                role: 'veterinary'
            },{
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });
            console.log(data);
            dispatch( login ( data ) ) // data tiene que contener el uid, email, password, etc
            
        } catch (error) {
            console.error(error)
            return dispatch(logout({ errorMessage: error.response.data.message}))
        }


    }
}


export const fetchUserData = createAsyncThunk('http://127.0.0.1:8000/auth/users/me', async (token) => {
    const { data } = await axios.get('/api/user', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return data;
  });


// axios.get('http://127.0.0.1:8000/auth/users/me', {
//     headers: {
//         'Authorization': `Bearer ${token}`,
//         'Content-Type': 'application/json'
//     }
// })