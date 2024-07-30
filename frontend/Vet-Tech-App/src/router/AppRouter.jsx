import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage, PasswordReset, RegisterCustomerPage, RegisterVeterinaryPage, } from "../auth"
import ScheduleManagementVet from "../auth/pages/ScheduleManagementVet"
import { UserSchedules } from "../auth/pages/UserSchedules"






export const AppRouter = () => {

    //Aqui va la logica para navegar a la ruta deseada segun el rol de registro del usuario.



  return (
    <div className="bg-baseColor">
      <Routes>
          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/auth/schedules" element={<ScheduleManagementVet/>}  />
          <Route path="/auth/userSchedule" element={<UserSchedules/>} />
          
          <Route path="/auth/register/customer" element={<RegisterCustomerPage />} />
          <Route path="/auth/register/veterinary" element={<RegisterVeterinaryPage />} />

          <Route path="/auth/reset" element={<PasswordReset />} />

          {/* deberia crear un roleRouter para definir a que pagina entrar??? */}
          {/* Si (status === 'authenticated' & role === 'Customer') return <CustomerPage /> */}
          {/* Si (status === 'authenticated' & role === 'Vaterinary') return <VeterinaryPage /> */}

          <Route path="/*" element={ <Navigate to="/auth/login" />}/>


      </Routes>
    </div>
  )
}
