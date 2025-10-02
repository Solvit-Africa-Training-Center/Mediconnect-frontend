import type React from "react"
import { User, Calendar, Mail, Phone, Shield } from "lucide-react"
import { useGetPatientByUserIdQuery } from "../../Back-end/patient/patientApi"
import { useSelector } from "react-redux"
import { RootState } from "../../app/store"

const ProfileOverview: React.FC = () => {
  const user = useSelector((state: RootState) => state.auth.user)
  const userId = user?.id
  const { data: patient, isLoading, error } = useGetPatientByUserIdQuery(userId, {
    skip: !userId, // Skip query if no user ID
  })

  if (isLoading) {
    return (
      <div className="bg-white rounded-lg p-6 shadow-sm animate-pulse">
        <div className="h-6 bg-gray-200 rounded mb-4"></div>
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
          <div className="flex-1">
            <div className="h-5 bg-gray-200 rounded mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-12 bg-gray-200 rounded"></div>
          ))}
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <div className="text-red-600 text-center">Failed to load patient profile</div>
      </div>
    )
  }

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
  }

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex items-center gap-4 mb-6">
        <User className="w-5 h-5 text-[#0C7AE9]" />
        <h2 className="text-lg font-semibold text-[#29333D]">Profile Overview</h2>
      </div>

      <div className="flex items-center gap-4 mb-6">
        <div className="w-16 h-16 bg-[#0C7AE9] rounded-full flex items-center justify-center text-white font-semibold text-xl">
          {patient ? getInitials(patient.fullName) : 'P'}
        </div>
        <div>
          <h3 className="font-semibold text-[#29333D] text-lg">{patient?.fullName || 'Loading...'}</h3>
          <span className="text-xs bg-[#D3D9DE] px-2 py-1 rounded text-[#29333D]">
            REF: {patient?.referenceNumber || 'N/A'}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-[#29333D]" />
          <div>
            <p className="text-sm text-[#29333D] opacity-70">Date of Birth</p>
            <p className="text-sm font-medium text-[#29333D]">{patient?.dateOfBirth || 'N/A'}</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Mail className="w-4 h-4 text-[#29333D]" />
          <div>
            <p className="text-sm text-[#29333D] opacity-70">Email</p>
            <p className="text-sm font-medium text-[#29333D]">{patient?.email || 'N/A'}</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4 text-[#29333D]" />
          <div>
            <p className="text-sm text-[#29333D] opacity-70">Blood Type</p>
            <p className="text-sm font-medium text-[#29333D]">{patient?.bloodType || 'Not specified'}</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Phone className="w-4 h-4 text-[#29333D]" />
          <div>
            <p className="text-sm text-[#29333D] opacity-70">Phone</p>
            <p className="text-sm font-medium text-[#29333D]">{patient?.phone || 'N/A'}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileOverview
