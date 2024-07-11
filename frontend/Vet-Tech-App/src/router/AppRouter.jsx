import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth"





export const AppRouter = () => {

    //Aqui va la logica para navegar a la ruta deseada segun el rol de registro del usuario.



  return (
    <Routes>

        <Route path="/auth/login" element={<LoginPage />} />

        <Route path="/uth/register" element />
        <Route path="/auth/reset" element />


        <Route path="/*" element={ <Navigate to="/auth/login" />}/>


    </Routes>
  )
}
