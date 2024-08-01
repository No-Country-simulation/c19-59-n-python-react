import { Route, Routes } from "react-router-dom";
import { VeterinaryHomePage } from "../pages/VeterinaryHomePage";
import { BottomNavbar } from "../../components/BottomNavbar";
import { BuildingPage } from "../../components/BuildingPage";
import ScheduleManagementVet from "../pages/ScheduleManagementVet";


export const VeterinaryRoutes = () => {
  return (
    <div className="max-w-sm mx-auto h-screen relative flex flex-col justify-center bg-vetTech">
        <div>
          <Routes>
              <Route path="home" element={ <VeterinaryHomePage /> }/>
              <Route path="schedules" element={ <ScheduleManagementVet /> }/>
              <Route path="config" element={ <BuildingPage /> }/>
              <Route path="profile" element={ <BuildingPage /> }/>
          </Routes>
        </div> 
        <div className="fixed bottom-0">
          <BottomNavbar />
        </div>
    </div>

  )
}
