import AuthProvider from "./contexts/AuthContext"
import AppRoutes from "./Routes/Approutes"

function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  )
}

export default App