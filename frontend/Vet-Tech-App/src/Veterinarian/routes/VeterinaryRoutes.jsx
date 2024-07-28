import { Route, Routes } from "react-router-dom";
import { VeterinaryHomePage } from "../pages/VeterinaryHomePage";



export const VeterinaryRoutes = () => {
  return (
    <Routes>
        <Route path='home' element={ <VeterinaryHomePage /> } />
    </Routes>
  )
}
