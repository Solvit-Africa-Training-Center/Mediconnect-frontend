import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { 
  LayoutDashboard, 
  QrCode, 
  FileText, 
  Settings as SettingsIcon
} from 'lucide-react'

const Sidebar: React.FC = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, path: '/PharmacyDashboard' },
    { id: 'scan', label: 'Scan QR Code', icon: QrCode, path: '/scan' },
    { id: 'dispensed', label: 'Dispensed Record', icon: FileText, path: '/dispensed' },
    { id: 'settings', label: 'Settings', icon: SettingsIcon, path: '/settings' },
  ]

  const userInfo = {
    name: 'Dr. Marie Uwimana',
    role: 'Licensed Pharmacist',
    avatar: 'MU'
  }

  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">M</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">MedOrd</h1>
            <p className="text-sm text-gray-500">Pharmacy Portal</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 pt-4 ">
        <ul className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon
            const isActive = location.pathname === item.path || 
              (location.pathname === '/' && item.path === '/dashboard')

            return (
              <li key={item.id}>
                <button
                  onClick={() => navigate(item.path)}
                  className={`flex items-center gap-3 w-full px-3 py-2 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-700 hover:bg-blue-100 hover:text-blue-800'
                  }`}
                >
                  <Icon size={20} />
                  <span className="text-[17px] text-gray-600 font-medium cursor-pointer hover:text-blue-800 py-2">{item.label}</span>
                </button>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* User Info */}
      <div className="pt-[170px] pl-4 pb-[40px] border-t border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
            <span className="text-white font-medium text-sm">{userInfo.avatar}</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">{userInfo.name}</p>
            <p className="text-xs text-gray-500 truncate">{userInfo.role}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
