import { Route, Routes } from "react-router-dom";
import { VeterinaryHomePage } from "../pages/VeterinaryHomePage";
import { BottomNavbar } from "../../components/BottomNavbar";
import ScheduleManagementVet from "../pages/ScheduleManagementVet";


export const VeterinaryRoutes = () => {
  return (
    <div className="max-w-sm mx-auto relative flex flex-col items-center justify-center">
      <div>
        <Routes>
            <Route path="home" element={ <VeterinaryHomePage /> }/>
            <Route path="schedules" element={ <ScheduleManagementVet /> }/>
        </Routes>
      </div> 
      <div className="fixed bottom-0">
        <BottomNavbar />
      </div>
    </div>

  )
}
