import { useContext } from "react"
import LoginContext from "../hooks/LoginContext"
import { Shield, LogIn } from "lucide-react"

const Header = () => {

  const {handleLoginClick} = useContext(LoginContext)

  return (
    <header className="bg-card text-card-foreground shadow-card border-b border-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-medical rounded-lg flex items-center justify-center">
                <Shield color="white" size={18} />
              </div>
              
              <div>
                <h1 className="text-xl font-bold text-primary">MedConnect</h1>
                <p className="text-xs text-muted-foreground -mt-1">RWANDA DIGITAL HEALTH</p>
              </div>
            </div>
          </div>

          <button 
            onClick={handleLoginClick}
            className="bg-gradient-medical text-primary-foreground hover:from-cyan-600 hover:to-cyan-700
              shadow-md transition-smooth flex items-center gap-2 px-4 py-2 rounded-lg"
            aria-label="Login to access your medical records"
          >
            <LogIn color="white" size={18} />
            <span>Login</span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header

