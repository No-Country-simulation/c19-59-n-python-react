import { Navigate, Route, Routes } from "react-router-dom"
import { PrivateRoutes } from "./PrivateRoutes"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { useSelector } from "react-redux"
import { CustomerPage } from "../customer/pages/CustomerPage"
import { VeterinaryPage } from "../Veterinarian/pages/VeterinaryPage"





export const AppRouter = () => {

  const { id } = useSelector(state => state.auth)    

  return (

      <Routes>
         
          {/* //Ruta de autenticacion */}

          <Route path="/auth/*" element={<AuthRoutes />} />

                  
            {/* //Ruta para clientes */}
            <Route 
              path={`/customer/:${id}`}
              element={
                <PrivateRoutes rol='customer'>
                  <CustomerPage />
                </PrivateRoutes>
              }
            />


            {/* //Ruta para veterinarios */}
            <Route 
              path={`/veterinary/:${id}`}
              element={
                <PrivateRoutes rol='veterinary'>
                  <VeterinaryPage />
                </PrivateRoutes>
              }
            />

          <Route path="/*" element={ <Navigate to="/auth/login" />}/>

      </Routes>
  )
}
