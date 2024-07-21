//* thunks: acciones asincronas que disparan otra acción (función que devuelve otra función)

import axios from "axios";
import { chekingStatus, login, logout } from "./authSlice"


const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000',
    headers: { "Cache-Control": "no-cache",
                "Content-Type": "application/json",
            }
  });




export const chekingAuth = () => {
    return async( dispatch ) => {

        //manejo de estado de auth = 'checking'
        dispatch( chekingStatus() );
    }
}


export const startGoogleSingIn = () => {
    return async ( dispatch ) => {

        //manejo de estado de auth = 'checking'
        dispatch( chekingStatus() );

        // await funcion de singwithgoogle
        // logout error message

        dispatch( login () ) // hay q pasarle algo al login
    }
}


export const startLoginWithEmailAndPassword = ( { email, password } ) => {
    return async ( dispatch ) => {

        //manejo de estado de auth = 'checking'
        dispatch( chekingStatus() );

      
            // funcion de donde llamo al Database / peticion http al mongoDB
            const result = await instance.post(`/auth/login`, {email, password});
            if (!result.ok) return dispatch( logout( result.errorMessage ))


            dispatch( login ( result ) ) // data tiene que contener el uid, email, password, etc
            

    }
}


export const startRegisterCustomer = ( { name, email, password, password2, pets, country } ) => {
    return async ( dispatch ) => {

        dispatch( chekingStatus() );


            const result = await instance.post('/auth/register/customer', { name, email, password, password2, pets, country })
            if (!result.ok) return dispatch( logout( result.errorMessage ))


            dispatch( login (result))    

    }
}

export const startRegisterVeterinary = ( { name, email, password, password2, id_number, country, telephone_number, zip_code } ) => {
    return async ( dispatch ) => {

        dispatch( chekingStatus() );


            const result = await instance.post('/auth/register/veterinary', { name, email, password, password2, country, id_number, telephone_number, zip_code })
            if (!result.ok) return dispatch( logout( result.errorMessage ))


            dispatch( login (result))    

    }
}