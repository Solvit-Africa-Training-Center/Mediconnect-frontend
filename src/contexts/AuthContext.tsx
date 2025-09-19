import { createContext, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store/store"
import { setUser, clearUser } from "../store/authSlice"

export const AuthContext = createContext(null)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const user = useSelector((state: RootState) => state.auth.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const login = (userData: any) => {
    dispatch(setUser(userData))
    localStorage.setItem("user", JSON.stringify(userData))
    if (userData.role === "doctor") {
      navigate("/doctor-dashboard")
    } else if (userData.role === "patient") {
      navigate("/patient-dashboard")
    } else if (userData.role === "pharmacist") {
      navigate("/pharmacy-dashboard")
    } else {
      alert("Access denied. Invalid role.")
      logout()
    }
  }

  const logout = () => {
    dispatch(clearUser())
    localStorage.removeItem("user")
    navigate("/login")
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider