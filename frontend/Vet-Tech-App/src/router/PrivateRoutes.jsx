import { useSelector } from "react-redux"
import { Route } from "react-router-dom"
import { CustomerPage } from "../customer/pages/CustomerPage"
import { VeterinaryPage } from "../Veterinarian/pages/VeterinaryPage"


export const PrivateRoutes = () => {

        //Aqui va la logica para navegar a la ruta deseada segun el rol de registro del usuario.
        const { status, role, id } = useSelector(state => state.auth)

        

  return (
    <>
        
            {/* //Ruta para clientes */}
            {
            (status === 'authenticated' && role === 'customer') 
            && <Route path={`/customer/:${id}`} element={<CustomerPage />}/>
          } 


            {/* //Ruta para veterinarios */}
          {
            (status === 'authenticated' && role === 'veterinary')
            && <Route path={`/veterinary/:${id}`} element={<VeterinaryPage />}/> 
          } 

    </>
  )
}
