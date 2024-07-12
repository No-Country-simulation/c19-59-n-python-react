import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage, PasswordReset, RegisterPage } from "../auth"





export const AppRouter = () => {

    //Aqui va la logica para navegar a la ruta deseada segun el rol de registro del usuario.



  return (
    <Routes>

        <Route path="/auth/login" element={<LoginPage />} />

        
        <Route path="/auth/register" element={<RegisterPage />} />
        <Route path="/auth/reset" element={<PasswordReset />} />

        {/* deberia crear un roleRouter para definir a que pagina entrar??? */}
        {/* Si (status === 'authenticated' & role === 'Customer') return <CustomerPage /> */}
        {/* Si (status === 'authenticated' & role === 'Vaterinary') return <VeterinaryPage /> */}

        <Route path="/*" element={ <Navigate to="/auth/login" />}/>


    </Routes>
  )
}
