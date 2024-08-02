import { Route, Routes } from "react-router-dom"
import { CustomerHomePage } from "../pages/CustomerHomePage"
import { BottomNavbar } from "../../components/BottomNavbar"
import { UserSchedules } from "../pages/UserSchedules"
import { TriagePage } from "../../triage/Pages/TriagePage"
import { PreConsultation } from "../pages/PreConsultation"
import { ProfileCustomerPage } from "../pages/ProfileCustomerPage"
import { ConfigCustomerPage } from "../pages/ConfigCustomerPage"



export const CustomerRoutes = () => {
  return (
    <div className="max-w-sm mx-auto h-screen relative flex flex-col  justify-center bg-vetTech">
      <div>
        <Routes>
          <Route path="home" element={<CustomerHomePage />} />
          <Route path="config" element={<ConfigCustomerPage />} />
          <Route path="profile" element={<ProfileCustomerPage />} />
          <Route path="schedules" element={<UserSchedules />} />
          <Route path="Emergency" element={<TriagePage />} />
          <Route path="preconsultation" element={<PreConsultation />} />
        </Routes>
      </div>
      <div className="fixed bottom-0">
        <BottomNavbar />
      </div>
    </div>
  )
}
