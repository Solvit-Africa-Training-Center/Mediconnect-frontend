import { LoginContextProvider } from "./hooks/LoginContext"
import { BrowserRouter } from "react-router-dom"
import AppRoutes from "./Routes/Approutes"

function App() {
  

  return (
    
        <BrowserRouter>
          <LoginContextProvider>
            <AppRoutes/>
          </LoginContextProvider>
        </BrowserRouter>
   )
}

export default App
