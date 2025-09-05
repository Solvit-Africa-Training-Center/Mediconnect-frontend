"use client"
import { useLocation, Link } from "react-router-dom"
import { LayoutDashboard, CirclePlus, Stethoscope, Users, FileText, Bell, Settings, ChevronLeft, ChevronRight } from "lucide-react"
import { useSidebar } from "../../contexts/SidebarContext"

const iconMap = {
  LayoutDashboard,
  CirclePlus,
  Users,
  FileText,
  Bell,
  Settings,
}

const Sidebar = () => {
  const location = useLocation()
  const { isCollapsed, toggleSidebar } = useSidebar()

  const navigationItems = [
    { id: "dashboard", label: "Dashboard", path: "/doctor-dashboard", icon: "LayoutDashboard" },
    { id: "create-prescription", label: "Create Prescription", path: "/create-prescription", icon: "CirclePlus" },
    { id: "patient-records", label: "Patient Records", path: "/patient-records", icon: "Users" },
    { id: "prescription-history", label: "Prescription History", path: "/prescription-history", icon: "FileText" },
    { id: "notifications", label: "Notifications", path: "/notifications", icon: "Bell" },
    { id: "settings", label: "Settings", path: "/settings", icon: "Settings" },
  ]

  return (
    <div
      className={`fixed left-0 top-0 h-full bg-slate-800 shadow-sm z-20 transition-all duration-300 ${
        isCollapsed ? "w-16" : "w-64"
      }`}
    >
      <div className={`${isCollapsed ? "p-3" : "p-6"}`}>
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <Stethoscope className="w-5 h-5 text-white" />
          </div>
          {!isCollapsed && (
            <div>
              <h1 className="text-xl font-semibold text-white">MedOrd</h1>
              <p className="text-sm text-gray-400">Doctor Portal</p>
            </div>
          )}
        </div>

        <button
          onClick={toggleSidebar}
          className="absolute top-4 right-2 p-1 rounded-lg text-gray-400 hover:text-white hover:bg-slate-700 transition-colors"
        >
          {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </button>
      </div>

      <nav className={`${isCollapsed ? "px-2" : "px-4"} pb-4`}>
        {!isCollapsed && (
          <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-4">Medical Dashboard</p>
        )}

        <div className="space-y-2">
          {navigationItems.map((item) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap]
            const isActive = location.pathname === item.path

            return (
              <Link
                key={item.id}
                to={item.path}
                className={`flex items-center ${isCollapsed ? "justify-center px-2" : "space-x-3 px-3"} py-2 rounded-lg transition-colors ${
                  isActive ? "bg-blue-600 text-white" : "text-gray-300 hover:bg-slate-700"
                }`}
                title={isCollapsed ? item.label : undefined}
              >
                <Icon className="w-5 h-5" />
                {!isCollapsed && <span className={isActive ? "font-medium" : ""}>{item.label}</span>}
              </Link>
            )
          })}
        </div>
      </nav>
    </div>
  )
}

export default Sidebar
