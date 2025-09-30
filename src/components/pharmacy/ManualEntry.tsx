import React, { useState } from 'react'
import { Edit3 } from 'lucide-react'

const ManualEntry: React.FC = () => {
  const [referenceId, setReferenceId] = useState('')

  const handleRetrieve = () => {
    if (referenceId.trim()) {
      alert(`Retrieving prescription for ID: ${referenceId}`)
    }
  }

  return (
    <div className="card p-6">
      <div className="flex items-center gap-2 mb-6">
        <div className="p-1 bg-green-50 rounded">
          <Edit3 size={16} className="text-green-600" />
        </div>
        <h2 className="text-lg font-semibold text-gray-900">Manual Entry</h2>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Prescription Reference ID
        </label>
        <input
          type="text"
          value={referenceId}
          onChange={(e) => setReferenceId(e.target.value)}
          placeholder="Enter prescription reference ID..."
          className="input-field mb-4"
        />
        <button
          onClick={handleRetrieve}
          className="btn-primary w-full sm:w-auto"
        >
          Retrieve Prescription
        </button>
      </div>
    </div>
  )
}

export default ManualEntry
