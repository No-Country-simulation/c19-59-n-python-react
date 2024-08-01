import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { AppRouter } from "./router/AppRouter"
import { store } from "./store"
import { GoogleOAuthProvider } from "@react-oauth/google"
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';





export const VetTechApp = () => {


  return (
    <GoogleOAuthProvider clientId="161684719136-6337fhqald1nf24grnj0g346pa9q58kv.apps.googleusercontent.com">
      <Provider store={store}>
        <BrowserRouter>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <AppRouter />
          </LocalizationProvider>
        </BrowserRouter>
      </Provider>
    </GoogleOAuthProvider>
  )
}


