import type React from "react"
import { QrCode, Calendar, User, Pill } from "lucide-react"
import { useGetPatientPrescriptionsQuery } from "../../Back-end/patient/patientApi"
import type { Prescription } from "../../Types/prescription/prescription.types"
import { useSelector } from "react-redux"
import { RootState } from "../../app/store"

const MyPrescriptions: React.FC = () => {
  const user = useSelector((state: RootState) => state.auth.user)
  const patientId = user?.id
  const { data: prescriptions, isLoading, error } = useGetPatientPrescriptionsQuery(patientId, {
    skip: !patientId // Skip query if no patient ID
  })

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
        <div className="text-red-600 text-center">Failed to load prescriptions</div>
      </div>
    )
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800'
      case 'dispensed': return 'bg-green-100 text-green-800'
      case 'rejected': return 'bg-red-100 text-red-800'
      case 'expired': return 'bg-gray-100 text-gray-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex items-center gap-4 mb-6">
        <QrCode className="w-5 h-5 text-[#0C7AE9]" />
        <h2 className="text-lg font-semibold text-[#29333D]">My Prescriptions</h2>
      </div>

      {!prescriptions?.length ? (
        <div className="text-center py-8">
          <QrCode className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <p className="text-sm text-[#29333D] opacity-70">No prescriptions found</p>
        </div>
      ) : (
        <div className="space-y-4">
          {prescriptions.slice(0, 3).map((prescription: Prescription) => (
            <div key={prescription.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <User className="w-4 h-4 text-gray-500" />
                    <span className="text-sm font-medium text-[#29333D]">
                      Dr. {prescription.doctorName}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600">
                      {new Date(prescription.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(prescription.status)}`}>
                  {prescription.status.charAt(0).toUpperCase() + prescription.status.slice(1)}
                </span>
              </div>
              
              <div className="mb-3">
                <p className="text-sm font-medium text-[#29333D] mb-1">Diagnosis:</p>
                <p className="text-sm text-gray-600">{prescription.diagnosis}</p>
              </div>

              <div className="flex items-center gap-2">
                <Pill className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-600">
                  {prescription.medications?.length || 0} medication(s)
                </span>
                {prescription.qrCode && (
                  <QrCode className="w-4 h-4 text-[#0C7AE9] ml-auto" />
                )}
              </div>
            </div>
          ))}
          
          {prescriptions.length > 3 && (
            <div className="text-center pt-2">
              <button className="text-[#0C7AE9] text-sm hover:underline">
                View all {prescriptions.length} prescriptions
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default MyPrescriptions
