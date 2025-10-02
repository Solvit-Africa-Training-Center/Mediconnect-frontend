import React, { useState, type ReactNode } from "react";
import { useNavigate } from "react-router-dom";

type UserRole = 'patient' | 'doctor' | 'pharmacist' | null

interface User {
  id: string
  email: string
  fullName: string
  role: UserRole
}

interface Loginprops {
    isLoginOpen: boolean,
    handleLoginClick: () => void,
    handleClose: () => void,
    user: User | null,
    login: (userData: User) => void,
    logout: () => void,
}

const defaultValue: Loginprops = {
  isLoginOpen: false,
  handleLoginClick: () => { window.prompt("provider is missing") },
  handleClose: () => { window.prompt("provider is missing") },
  user: null,
  login: () => { window.prompt("provider is missing") },
  logout: () => { window.prompt("provider is missing") },
}

interface Childrenprops{
  children:ReactNode
}

const LoginContext = React.createContext<Loginprops>(defaultValue)

export const LoginContextProvider = ({ children }: Childrenprops) => {
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [user, setUser] = useState<User | null>(null)
  const navigate = useNavigate()
  
  const handleLoginClick = () => {
    setIsLoginOpen(true)
  }
  
  const handleClose = () => {
    setIsLoginOpen(false)
  }

  const login = (userData: User) => {
    setUser(userData)
    setIsLoginOpen(false)
    
    // Redirect based on user role
    switch (userData.role) {
      case 'doctor':
        navigate('/doctor-dashboard')
        break
      case 'patient':
        navigate('/patient')
        break
      case 'pharmacist':
        navigate('/pharmacist-dashboard')
        break
      default:
        navigate('/')
    }
  }

  const logout = () => {
    setUser(null)
    navigate('/')
  }

  return (
    <LoginContext.Provider value={{ 
      isLoginOpen, 
      handleLoginClick, 
      handleClose, 
      user, 
      login, 
      logout 
    }}>
      {children}
    </LoginContext.Provider>
  )
}

export default LoginContext;