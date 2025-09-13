import { LoginContextProvider } from "./hooks/LoginContext"
import { BrowserRouter } from "react-router-dom"
import AppRoutes from "./Routes/Approutes"
import { store } from "./store/store"
import { Provider } from "react-redux"

function App() {
  

  return (

    <Provider store = {store}>
        <BrowserRouter>
          <LoginContextProvider>
            <AppRoutes/>
          </LoginContextProvider>
        </BrowserRouter>
    </Provider>
   )
}

export default App
