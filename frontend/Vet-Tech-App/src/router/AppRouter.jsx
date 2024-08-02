import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { ProtectedCustomerRoute } from "../customer/Routes/ProtectedCustomerRoute";
import { CustomerRoutes } from "../customer/Routes/CustomerRoutes";
import { ProtectedVeterinaryRoute } from "../Veterinarian/routes/ProtectedVeterinaryRoute";
import { VeterinaryRoutes } from "../Veterinarian/routes/VeterinaryRoutes";



export const AppRouter = () => {
  
  

  return (

      <Routes>

        
        <Route path="/auth/*" element={<AuthRoutes />} />
        <Route 
          path='/customer/*'
          element={
            <ProtectedCustomerRoute>
              <CustomerRoutes />
            </ProtectedCustomerRoute>
          }
        />

        <Route 
          path='/veterinary/*'
          element={
            <ProtectedVeterinaryRoute>
              <VeterinaryRoutes />
            </ProtectedVeterinaryRoute>
          }
        />
             
        <Route path='/*' element={ <Navigate to='/auth/login'/>} />




      </Routes>
  )
}
