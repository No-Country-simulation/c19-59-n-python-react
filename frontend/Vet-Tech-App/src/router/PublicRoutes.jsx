import { Navigate, Route } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"


export const PublicRoutes = () => {


  return (
    <>
         {/* //Ruta de autenticacion */}
        <Route path="/auth/*" element={<AuthRoutes />} />

        <Route path="/*" element={ <Navigate to="/auth/login" />}/>
    
    </>
              
  )
}
