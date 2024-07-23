import { Navigate, Route, Routes } from "react-router-dom"
import { useSelector } from "react-redux"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { CustomerPage } from "../customer/pages/CustomerPage"
import { VeterinaryPage } from "../Veterinarian/pages/VeterinaryPage"







export const AppRouter = () => {

    //Aqui va la logica para navegar a la ruta deseada segun el rol de registro del usuario.
    const { status, role } = useSelector(state => state.auth)



  return (
    <div className="bg-baseColor">
      <Routes>

           
          {/* <Route path="/auth/*" element={<AuthRoutes />} /> */}

          {
            (status === 'authenticated' && role === 'customer') 
            ? <Route path="/customer/:id" element={<CustomerPage />}/>
            : <Route path="/auth/*" element={<AuthRoutes />} />
          } 

          {
            (status === 'authenticated' && role === 'veterinary') 
            ? <Route path="/veterinary/:id" element={<VeterinaryPage />}/>
            : <Route path="/auth/*" element={<AuthRoutes />} />
          } 


          <Route path="/*" element={ <Navigate to="/auth/login" />}/>


      </Routes>
    </div>
  )
}
