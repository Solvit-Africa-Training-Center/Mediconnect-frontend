import type React from "react"
import { FileText } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { useGetPatientHistoryQuery } from "../../Back-end/patient/patientApi"
import { useSelector } from "react-redux"
import { RootState } from "../../app/store"
import type { MedicalRecord } from "../../Types/patient/patient.types"

const MedicalHistory: React.FC = () => {
  const navigate = useNavigate()
  const user = useSelector((state: RootState) => state.auth.user)
  const patientId = user?.id
  const { data: records, isLoading, error } = useGetPatientHistoryQuery(patientId, {
    skip: !patientId,
  })

  const handleRequestReport = () => {
    navigate('/patient/medical-records-request')
  }

  if (isLoading) {
    return (
      <div className="bg-white rounded-lg p-6 shadow-sm animate-pulse">
        <div className="h-6 bg-gray-200 rounded mb-4"></div>
        <div className="space-y-3">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-16 bg-gray-200 rounded"></div>
          ))}
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <div className="text-red-600 text-center">Failed to load medical history</div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex items-center gap-4 mb-6">
        <FileText className="w-5 h-5 text-[#0C7AE9]" />
        <h2 className="text-lg font-semibold text-[#29333D]">Medical History</h2>
      </div>

      <div className="mb-4">
        <h3 className="text-sm font-medium text-[#29333D] opacity-70 mb-3">RECENT RECORDS</h3>
        <div className="space-y-3">
          {records && records.length > 0 ? (
            records.map((record: MedicalRecord, index: number) => (
              <div key={index} className="flex items-start justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium text-[#29333D]">{record.type}</span>
                    <span className="text-xs text-[#29333D] opacity-50">{new Date(record.date).toLocaleDateString()}</span>
                  </div>
                  <p className="text-sm font-medium text-[#29333D]">{record.doctor}</p>
                  <p className="text-sm text-[#29333D] opacity-70">{record.description}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-sm text-gray-500 text-center py-4">No recent medical records found.</p>
          )}
        </div>
      </div>

      <button 
        onClick={handleRequestReport}
        className="w-full bg-[#0C7AE9] text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-[#116FD4] transition-colors"
      >
        <FileText className="w-4 h-4" />
        Request your Medical Report
      </button>
    </div>
  )
}

export default MedicalHistory
