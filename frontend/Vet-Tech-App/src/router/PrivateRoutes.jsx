import { useSelector } from "react-redux"


export const PrivateRoutes = ({ children, rol }) => {

        //Aqui va la logica para navegar a la ruta deseada segun el rol de registro del usuario.
        const { status, role } = useSelector( state => state.auth )



  return (status === 'authenticated' && role === rol) && children

}
