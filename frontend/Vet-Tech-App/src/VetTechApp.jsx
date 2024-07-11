import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { AppRouter } from "./router/AppRouter"
import { store } from "./store/slices/store"






export const VetTechApp = () => {


  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Provider>
  )
}


