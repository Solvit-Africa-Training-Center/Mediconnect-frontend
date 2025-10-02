import { QrCode, Settings, FileText, LayoutDashboard } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Link } from "react-router-dom"

export function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
            <QrCode className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-gray-900">MedOrd</h1>
            <p className="text-sm text-gray-500">Pharmacy Portal</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          <li>
            <Link to="/PharmacyDashboard" className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
              <LayoutDashboard className="w-5 h-5" />
              <span className="text-sm font-medium">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              to="/scan-qr-code"
              className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg"
            >
              <QrCode className="w-5 h-5" />
              <span className="text-sm font-medium">Scan QR Code</span>
            </Link>
          </li>
          <li>
            <Link
              to="/dispensed-record"
              className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg"
            >
              <FileText className="w-5 h-5" />
              <span className="text-sm font-medium">Dispensed Record</span>
            </Link>
          </li>
          <li>
            <Link
              to="/pharmacy-settings"
              className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg"
            >
              <Settings className="w-5 h-5" />
              <span className="text-sm font-medium">Settings</span>
            </Link>
          </li>
        </ul>
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center gap-3">
          <Avatar className="w-10 h-10 bg-emerald-100">
            <AvatarFallback className="bg-emerald-100 text-emerald-700 font-medium">DR</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium text-gray-900">Dr. Marie Uwimana</p>
            <p className="text-xs text-gray-500">Licensed Pharmacist</p>
          </div>
        </div>
      </div>
    </aside>
  )
}
