import { Navigate, Route, Routes } from "react-router-dom"





export const AppRouter = () => {

    //Aqui va la logica para navegar a la ruta deseada segun el rol de registro del usuario.



  return (
    <Routes>

        <Route path="/auth/*" element />

        {/* <Route path="/register/*" element /> */}


        <Route path="/*" element={ <Navigate to="/auth/login" />}/>


    </Routes>
  )
}
