import AuthProvider from "./contexts/AuthContext"
import { SidebarProvider } from "./contexts/SidebarContext"
import AppRoutes from "./Routes/Approutes"

function App() {
  return (
    <SidebarProvider>
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>

    </SidebarProvider>
  )
}

export default App