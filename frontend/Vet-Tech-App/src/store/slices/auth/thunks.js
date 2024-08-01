//* thunks: acciones asincronas que disparan otra acción (función que devuelve otra función)

import axios from "axios";
import { chekingStatus, login, logout } from "./authSlice"
import { createAsyncThunk } from "@reduxjs/toolkit";



const BASE_URL = 'http://127.0.0.1:8000';


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
                console.log('comienza a hacer login');
                //convertir a JSON a application/x-www-form-urlencoded
                const formData = new URLSearchParams();
                formData.append('username', email);
                formData.append('password', password);

                const { data } = await axios.post(`${BASE_URL}/auth/login`, formData, {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                });

                let userData = null
                let accessToken = await data.access_token

                if(accessToken) {
                    userData = await axios.get(`${BASE_URL}/auth/users/me`, {
                        headers: {
                            'Authorization': `Bearer ${accessToken}`,
                        }
                      });
                }

                console.log(data);
                console.log(userData.data);

                const userPayload = {
                    token: accessToken,
                    id: userData.data.id,
                    email: userData.data.email,
                    role: userData.data.role,
                };

                dispatch( login ( userPayload) )


                 // data tiene que contener el uid, email, password, etc
                console.log('termina de hacer login');

            } catch (error) {
                const errorMessage = error.response?.data?.detail || 'Ocurrio un error. Por favor intente nuevamente'
                return dispatch(logout({ errorMessage }))
            }

    }
}


export const startRegisterCustomer = ( { name, email, password, pet, iso3, pet_name } ) => {
    return async ( dispatch ) => {

        dispatch( chekingStatus() );


        try {
            console.log('Comienza a hacer el post');
            const { data } = await axios.post(`${BASE_URL}/user/new`, {
                name, 
                email, 
                password,  
                pet, 
                pet_name, 
                country_residence:iso3, 
                role: 'customer'
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );


            console.log(data);
            dispatch( login ( data ) )
            console.log('Termina de hacer el post'); // data tiene que contener el uid, email, password, etc
            
        } catch (error) {
            console.error(error)
            return dispatch(logout({ errorMessage: error.response.data.message}))
        }


    }
}

<<<<<<< HEAD
export const startRegisterVeterinary = ( { name, email, password, address, iso3} ) => {
=======
export const startRegisterVeterinary = ( { name, email, password, address, iso3 } ) => {
>>>>>>> 1a05816168cbb48a87b31ec5962d29637fec90c5
    return async ( dispatch ) => {

        dispatch( chekingStatus() );
        
        try {
            console.log('Comienza a hacer el post');
            const { data } = await axios.post(`${BASE_URL}/user/new`, {
                name, 
                email, 
                password, 
                country_residence:iso3, 
                address, 
                role: 'veterinarian'
            },{
                headers: { 
                    'Content-Type': 'application/json'
                }
            });
            console.log(data);
            dispatch( login ( data ) )
            console.log('Termina de hacer el post'); // data tiene que contener el uid, email, password, etc
            
        } catch (error) {
            console.error(error)
            return dispatch(logout({ errorMessage: error.response.data.message}))
        }

    }
}


export const fetchUserData = createAsyncThunk('auth/fetchUserData', async (token) => {
    const { data } = await axios.get('http://127.0.0.1:8000/auth/users/me', {
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
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