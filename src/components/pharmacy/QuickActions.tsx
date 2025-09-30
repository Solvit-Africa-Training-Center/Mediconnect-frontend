import React from 'react'
import { useNavigate } from 'react-router-dom'
import { QrCode, FileText } from 'lucide-react'

const QuickActions: React.FC = () => {
  const navigate = useNavigate()

  return (
    <div className="card p-6">
      <div className="flex items-center gap-2 mb-6">
        <div className="p-1 bg-primary-50 rounded">
          <div className="w-4 h-4 bg-primary-600 rounded"></div>
        </div>
        <h2 className="text-lg font-semibold text-gray-900">Quick Actions</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <button
          onClick={() => navigate('/scan')}
          className="bg-primary-600 hover:bg-primary-700 text-white p-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-3"
        >
          <QrCode size={20} />
          <span className="font-medium">Scan New Prescription</span>
        </button>

        <button
          onClick={() => navigate('/dispensed')}
          className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-3"
        >
          <FileText size={20} />
          <span className="font-medium">Dispensed Records</span>
        </button>
      </div>
    </div>
  )
}

export default QuickActions
