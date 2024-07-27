import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { useCheckAuth } from "../hooks/useCheckAuth"
import { MainPagesRoutes } from "./MainPagesRoutes"



export const AppRouter = () => {
  
  const status = useCheckAuth();



  return (

      <Routes>

        {
          (status === 'authenticated')
          ? <Route path='/*' element={<MainPagesRoutes />} />
          : <Route path="/auth/*" element={<AuthRoutes />} />
          
        }
     
         <Route path='/*' element={ <Navigate to='/auth/login'/>} />

      </Routes>
  )
}
