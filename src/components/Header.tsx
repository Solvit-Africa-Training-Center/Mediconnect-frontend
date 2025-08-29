import {Shield} from "lucide-react"
import { LogIn } from "lucide-react"

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm"><Shield/></span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-cyan-500">MedConnect</h1>
                <p className="text-xs text-gray-500 -mt-1">RWANDA DIGITAL HEALTH</p>
              </div>
            </div>
          </div>
          <button  className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700
           text-white shadow-md transition-all duration-200 flex items-center gap-2 px-4 py-2 rounded-lg">
            <LogIn/>Login
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
