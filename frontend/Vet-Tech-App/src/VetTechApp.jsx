import { Provider } from "react-redux"
import { store } from "./store/slices/store"






export const VetTechApp = () => {


  return (
    <Provider store={store}>
      <div className="flex h-[400px] items-center justify-center">
        <h1 className="text-emerald-400 text-[200px]">Vet-techApp</h1>
      </div>
    </Provider>
  )
}


