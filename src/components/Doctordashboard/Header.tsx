import { Bell } from "lucide-react"
import { useSidebar } from "../../contexts/SidebarContext"

const Header = () => {
  const { isCollapsed } = useSidebar()

  return (
    <header
      className={`fixed top-0 right-0 ${isCollapsed ? "left-16" : "left-64"} bg-white px-6 py-4 shadow-sm z-10 border-b border-gray-200 transition-all duration-300`}
    >
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Medical Dashboard</h1>
          <p className="text-gray-600">Manage prescriptions and patient records</p>
        </div>
        <div className="flex items-center space-x-4">
          <button className="relative p-2 text-gray-400 hover:text-gray-600">
            <Bell className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
              3
            </span>
          </button>
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
            <span className="text-white font-medium text-sm">DS</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
