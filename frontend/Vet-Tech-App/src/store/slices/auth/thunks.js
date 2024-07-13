//* thunks: acciones asincronas que disparan otra acción (función que devuelve otra función)

import axios from "axios";
import { chekingStatus, login, logout } from "./authSlice"





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
            const { data } = await axios.post('/auth', {email, password});
            
            dispatch( login (data) ) // data tiene que contener el uid, email, password, etc
             
        } catch (error) {
            
            // logout error message
            dispatch( logout({ errorMessage: error}) )
        }


    }
}