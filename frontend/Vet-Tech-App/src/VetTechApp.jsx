import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { AppRouter } from "./router/AppRouter"
import { store } from "./store/slices/store"

import ScheduleManagement from "./components/ScheduleManagement"




export const VetTechApp = () => {


  return (
    <Provider store={store}>
      <BrowserRouter>
      <h1>vet</h1>
      <ScheduleManagement/>
        {/* <AppRouter /> */}
      </BrowserRouter>
    </Provider>
  )
}


