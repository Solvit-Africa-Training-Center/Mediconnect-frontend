import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { 
  LayoutDashboard, 
  QrCode, 
  FileText, 
  Settings as SettingsIcon,
  User
} from 'lucide-react'

const Sidebar: React.FC = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
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
          <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">M</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">MedOrd</h1>
            <p className="text-sm text-gray-500">Pharmacy Portal</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon
            const isActive = location.pathname === item.path || 
                           (location.pathname === '/' && item.path === '/dashboard')
            
            return (
              <li key={item.id}>
                <button
                  onClick={() => navigate(item.path)}
                  className={`sidebar-item w-full text-left ${isActive ? 'active' : ''}`}
                >
                  <Icon size={20} />
                  <span>{item.label}</span>
                </button>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* User Info */}
      <div className="p-4 border-t border-gray-200">
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
