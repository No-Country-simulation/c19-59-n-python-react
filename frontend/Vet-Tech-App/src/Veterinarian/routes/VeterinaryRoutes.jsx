import { Route, Routes } from "react-router-dom";
import { VeterinaryHomePage } from "../pages/VeterinaryHomePage";
import { BottomNavbar } from "../../components/BottomNavbar";



export const VeterinaryRoutes = () => {
  return (
    <div className="max-w-sm mx-auto h-screen relative flex flex-col items-center justify-center">
      <div>
        <Routes>
            <Route path="home" element={ <VeterinaryHomePage /> }/>
        </Routes>
      </div> 
      <div className="fixed bottom-0">
        <BottomNavbar />
      </div>
    </div>

  )
}
