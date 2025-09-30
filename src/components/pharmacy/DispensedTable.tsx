import React from 'react'
import type { DispensedRecord } from '@/Types/pharmacist/pharmacyTypes';
import { Eye, Download } from 'lucide-react'

interface DispensedTableProps {
  records: DispensedRecord[];
}

const DispensedTable: React.FC<DispensedTableProps> = ({ records }) => {
  const getStatusBadge = (status: string) => {
    const baseClasses = "px-2 py-1 rounded-full text-xs font-medium"
    switch (status) {
      case 'Completed':
        return `${baseClasses} bg-green-100 text-green-800`
      case 'Pending':
        return `${baseClasses} bg-yellow-100 text-yellow-800`
      case 'Processing':
        return `${baseClasses} bg-blue-100 text-blue-800`
      default:
        return `${baseClasses} bg-gray-100 text-gray-800`
    }
  }

  return (
    <div className="card overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Patient Information
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Insurance Coverage
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Digital Ordinance
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Dispensing Timeline
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {records.map((record) => (
              <tr key={record.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div>
                    <div className="text-sm font-medium text-gray-900">{record.patientName}</div>
                    <div className="text-sm text-gray-500">Patient ID: {record.patientId}</div>
                    <div className="text-sm text-gray-500">Reference RX: {record.referenceRx}</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{record.insuranceCoverage}</div>
                  <div className="text-sm text-gray-500">Patient Copay: {record.total}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{record.digitalOrdinance}</div>
                  <div className="text-sm text-gray-500">Prescribed by: {record.dispensingTimeline.prescribedBy}</div>
                  <div className="text-sm text-gray-500">3 medicines prescribed</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">Dispensed: {record.dispensingTimeline.date}</div>
                  <div className="text-sm text-gray-500">Time: {record.dispensingTimeline.time}</div>
                  <div className="text-sm text-gray-500">{record.dispensingTimeline.location}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={getStatusBadge(record.status)}>
                    {record.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex items-center gap-2">
                    <button className="text-gray-400 hover:text-gray-600">
                      <Eye size={16} />
                    </button>
                    <button className="text-gray-400 hover:text-gray-600">
                      <Download size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default DispensedTable
