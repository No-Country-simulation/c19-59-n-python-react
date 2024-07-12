import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./store";





export const store = configureStore({
    reducer:{
        auth: authSlice.reducer
    },
})