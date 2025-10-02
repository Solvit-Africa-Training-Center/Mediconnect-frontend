import React, { useEffect, useState } from 'react'
import { Download } from 'lucide-react'
import SearchFilter from '@/components/pharmacy/SearchFilter'
import DispensedTable from '@/components/pharmacy/DispensedTable'
import type { DispensedRecord } from '../../../Types/index'
import { apiService } from '../../../Back-end/services/api'

const DispensedRecords: React.FC = () => {
  const [records, setRecords] = useState<DispensedRecord[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const data = await apiService.getDispensedRecords()
        setRecords(data)
      } catch (error) {
        console.error('Error fetching dispensed records:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchRecords()
  }, [])

  const handleExportRecords = () => {
    alert('Exporting records...')
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  const btnPrimary =
    'bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition flex items-center gap-2'

  return (
    <div className="space-y-6">
      {/* Header with Export Button */}
      <div className="flex items-center justify-between">
        <div className="bg-white shadow rounded-lg p-4 flex-1 mr-4">
          <div className="flex items-center gap-2">
            <div className="p-1 bg-blue-50 rounded">
              <div className="w-4 h-4 bg-blue-600 rounded"></div>
            </div>
            <h2 className="text-lg font-semibold text-gray-900">
              Dispensed Prescription Records
            </h2>
          </div>
        </div>
        <button onClick={handleExportRecords} className={btnPrimary}>
          <Download size={16} />
          Export Records
        </button>
      </div>

      {/* Search and Filter */}
      <SearchFilter />

      {/* Records Count */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium text-gray-900">
          Dispensed Records ({records.length})
        </h3>
      </div>

      {/* Records Table */}
      <DispensedTable records={records} />
    </div>
  )
}

export default DispensedRecords
