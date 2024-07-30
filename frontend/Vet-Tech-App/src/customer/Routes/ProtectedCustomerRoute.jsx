import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";


export const ProtectedCustomerRoute = ({ children }) => {

    const { status, role } = useSelector( state => state.auth )

    if ((status === 'authenticated') && (role === 'customer')) return children 
    
    if ((status === 'non-authenticated') && (role === null)) return <Navigate to="/auth/login" />;
}
