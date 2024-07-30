import { Navigate, Route, Routes } from "react-router-dom"
import { RegisterCustomerPage } from "../pages/RegisterCustomerPage"
import { RegisterVeterinaryPage } from "../pages/RegisterVeterinaryPage"
import { LoginPage } from "../pages/LoginPage"
import { PasswordReset } from "../pages/PasswordReset"



export const AuthRoutes = () => {
  return (

        <Routes>
            <Route path="login" element={<LoginPage />} />

            <Route path="register/customer" element={<RegisterCustomerPage />} />
            <Route path="register/veterinary" element={<RegisterVeterinaryPage />} />
            <Route path="reset" element={<PasswordReset />} />

            <Route path="/*" element={ <Navigate to="/auth/login" />}/>
        </Routes>


  )
}
