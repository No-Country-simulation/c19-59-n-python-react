import { Route, Routes } from "react-router-dom"
import { PublicRoutes } from "./PublicRoutes"
import { PrivateRoutes } from "./PrivateRoutes"








export const AppRouter = () => {



  return (

      <Routes>

          <Route element={<PublicRoutes />}/>

          <Route element={<PrivateRoutes />}/>

      </Routes>
  )
}
