import React from 'react'
import { SystemAlert } from '../types'
import { AlertTriangle, CheckCircle, Info } from 'lucide-react'

interface SystemAlertsProps {
  alerts: SystemAlert[];
}

const SystemAlerts: React.FC<SystemAlertsProps> = ({ alerts }) => {
  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'warning':
        return <AlertTriangle size={16} className="text-yellow-600" />
      case 'success':
        return <CheckCircle size={16} className="text-green-600" />
      case 'info':
        return <Info size={16} className="text-blue-600" />
      default:
        return <Info size={16} className="text-gray-600" />
    }
  }

  const getAlertBg = (type: string) => {
    switch (type) {
      case 'warning':
        return 'bg-yellow-50 border-yellow-200'
      case 'success':
        return 'bg-green-50 border-green-200'
      case 'info':
        return 'bg-blue-50 border-blue-200'
      default:
        return 'bg-gray-50 border-gray-200'
    }
  }

  return (
    <div className="card p-6">
      <div className="flex items-center gap-2 mb-6">
        <div className="p-1 bg-yellow-50 rounded">
          <AlertTriangle size={16} className="text-yellow-600" />
        </div>
        <h2 className="text-lg font-semibold text-gray-900">System Alerts</h2>
      </div>

      <div className="space-y-3">
        {alerts.map((alert) => (
          <div key={alert.id} className={`p-3 rounded-lg border ${getAlertBg(alert.type)}`}>
            <div className="flex items-start gap-3">
              {getAlertIcon(alert.type)}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900">{alert.title}</p>
                <p className="text-sm text-gray-600 mt-1">{alert.message}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SystemAlerts
