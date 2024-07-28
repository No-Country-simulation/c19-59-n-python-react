import PropTypes from 'prop-types';
import { Route, Routes } from "react-router-dom"
import { CustomerRoutes } from '../customer/Routes/CustomerRoutes';
import { VeterinaryRoutes } from '../Veterinarian/routes/VeterinaryRoutes';



export const MainPagesRoutes = ({role}) => {


  return (
    <Routes>

        { 
            (role === 'customer')
            ? <Route path={`customer/*`} element={ <CustomerRoutes /> }/>
            : <Route path={`veterinary/*`} element={ <VeterinaryRoutes /> }/>
        }
 

    </Routes>
  )
}

MainPagesRoutes.propTypes = {
  role: PropTypes.string.isRequired
}
