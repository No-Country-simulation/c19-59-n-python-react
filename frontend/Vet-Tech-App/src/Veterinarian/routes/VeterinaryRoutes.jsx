import { Route, Routes } from "react-router-dom";
import { VeterinaryHomePage } from "../pages/VeterinaryHomePage";
import { BottomNavbar } from "../../components/BottomNavbar";
import ScheduleManagementVet from "../pages/ScheduleManagementVet";
import { ConfigVeterinaryPage } from "../pages/ConfigVeterinaryPage";
import { ProfileVeterinaryPage } from "../pages/ProfileVeterinaryPage";
import { BuildingPage } from "../../components/BuildingPage";


export const VeterinaryRoutes = () => {
  return (
    <div className="max-w-sm mx-auto h-screen relative flex flex-col justify-center bg-vetTech">
        <div>
          <Routes>
              <Route path="home" element={ <VeterinaryHomePage /> }/>
              <Route path="schedules" element={ <ScheduleManagementVet /> }/>
              <Route path="config" element={ <ConfigVeterinaryPage /> }/>
              <Route path="profile" element={ <ProfileVeterinaryPage /> }/>
              <Route path="Emergency" element={ <BuildingPage /> }/>
          </Routes>
        </div> 
        <div className="fixed bottom-0">
          <BottomNavbar />
        </div>
    </div>

  )
}
