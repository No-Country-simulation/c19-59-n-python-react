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

        try {
            // funcion de donde llamo al Database / peticion http al mongoDB
            const { data } = await instance.post(`/auth/login`, {email, password});
            
            dispatch( login (data) ) // data tiene que contener el uid, email, password, etc
            
             
        } catch (error) {
            console.log(error)
            // logout error message
            // dispatch( logout({ errorMessage: error}) )
        }


    }
}