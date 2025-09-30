import React from 'react'
import { useLocation } from 'react-router-dom'
import { Bell } from 'lucide-react'

const PharmacyHeader: React.FC = () => {
  const location = useLocation()
  
  const getPageTitle = () => {
    switch (location.pathname) {
      case '/':
      case '/dashboard':
        return 'Dashboard'
      case '/scan':
        return 'Scan Prescription'
      case '/dispensed':
        return 'Dispensed Prescription'
      case '/settings':
        return 'Settings'
      default:
        return 'Dashboard'
    }
  }

  const getPageDate = () => {
    return new Date().toLocaleDateString('en-US', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  }

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{getPageTitle()}</h1>
          <p className="text-sm text-gray-500">{getPageDate()}</p>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="relative p-2 text-gray-400 hover:text-gray-600 transition-colors">
            <Bell size={20} />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default PharmacyHeader
