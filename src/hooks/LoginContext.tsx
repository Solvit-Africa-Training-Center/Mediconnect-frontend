import React, { useState, type ReactNode } from "react";

interface Loginprops {
    isLoginOpen:boolean,
    handleLoginClick:()=>void,
    handleClose:()=>void,
}

const defaultValue: Loginprops = {
  isLoginOpen: false,
  handleLoginClick: () => { window.prompt("provider is missing") },
  handleClose: () => { window.prompt("provider is missing") },
}

interface Childrenprops{
  children:ReactNode
}

const LoginContext = React.createContext<Loginprops>(defaultValue)

export const LoginContextProvider = ({ children }: Childrenprops) => {
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  
  const handleLoginClick = () => {
    setIsLoginOpen(true)
    console.log('Redirecting to login page...')
  }
  
  const handleClose = () => {
    setIsLoginOpen(false)
  }

  return (
    <LoginContext.Provider value={{ isLoginOpen, handleLoginClick, handleClose }}>
      {children}
    </LoginContext.Provider>
  )
}

export default LoginContext;