import { Route, Routes } from "react-router-dom"
import { CustomerHomePage } from "../pages/CustomerHomePage"
import { BottomNavbar } from "../../components/BottomNavbar"
import { BuildingPage } from "../../components/BuildingPage"



export const CustomerRoutes = () => {
  return (
    <div className="max-w-sm mx-auto h-screen relative flex flex-col items-center justify-center">
      <div>
        <Routes>
            <Route path="home" element={ <CustomerHomePage /> }/>
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
