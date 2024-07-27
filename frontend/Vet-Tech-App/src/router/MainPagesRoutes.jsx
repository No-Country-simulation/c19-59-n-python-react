import { Route, Routes } from "react-router-dom"
import { CustomerPage } from "../customer/pages/CustomerPage"
import { VeterinaryPage } from "../Veterinarian/pages/VeterinaryPage"
import { useSelector } from "react-redux"


export const MainPagesRoutes = () => {

    const {role} = useSelector(state => state.auth)

  return (
    <Routes>

        { 
            (role === 'customer')
            ? <Route path={`/customer`} element={ <CustomerPage /> }/>
            : <Route path={`/veterinary`} element={<VeterinaryPage /> }/>
        }
 

    </Routes>
  )
}
