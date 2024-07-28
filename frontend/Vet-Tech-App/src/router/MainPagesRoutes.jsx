import PropTypes from 'prop-types';
import { Route, Routes } from "react-router-dom"
import { CustomerPage } from "../customer/pages/CustomerPage"
import { VeterinaryPage } from "../Veterinarian/pages/VeterinaryPage"



export const MainPagesRoutes = ({role}) => {


  return (
    <Routes>

        { 
            (role === 'customer')
            ? <Route path={`customer`} element={ <CustomerPage /> }/>
            : <Route path={`veterinary`} element={<VeterinaryPage /> }/>
        }
 

    </Routes>
  )
}

MainPagesRoutes.propTypes = {
  role: PropTypes.string.isRequired
}
