import { CheckCircle, User, Key, FileText, Copy, Mail } from 'lucide-react'
import { useState } from 'react'

interface PatientData {
  username: string
  password: string
  referenceNumber: string
  fullName: string
}

interface PatientSuccessModalProps {
  isOpen: boolean
  onClose: () => void
  patientData: PatientData
}

const PatientSuccessModal = ({ isOpen, onClose, patientData }: PatientSuccessModalProps) => {
  const [copiedField, setCopiedField] = useState<string | null>(null)

  const copyToClipboard = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedField(field)
      setTimeout(() => setCopiedField(null), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 max-w-md w-full">
        {/* Success Header */}
        <div className="text-center mb-6">
          <div className="flex justify-center">
            <div className="bg-green-100 p-3 rounded-full">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mt-4">Successfully Added</h1>
          <p className="text-gray-600 mt-2">Patient account has been created successfully</p>
        </div>

        {/* Patient Information */}
        <div className="space-y-4">
          {/* Username Field */}
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <User className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-sm font-medium text-gray-700">Patient Username</span>
              </div>
              <button 
                onClick={() => copyToClipboard(patientData.username, 'username')}
                className="text-blue-600 hover:text-blue-800 text-xs flex items-center"
              >
                <Copy className="h-3 w-3 mr-1" /> 
                {copiedField === 'username' ? 'Copied!' : 'Copy'}
              </button>
            </div>
            <div className="flex items-center">
              <Mail className="h-4 w-4 text-gray-500 mr-2" />
              <span className="text-gray-900 break-all">{patientData.username}</span>
            </div>
          </div>

          {/* Password Field */}
          <div className="bg-amber-50 p-4 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <Key className="h-5 w-5 text-amber-600 mr-2" />
                <span className="text-sm font-medium text-gray-700">Default Password</span>
              </div>
              <button 
                onClick={() => copyToClipboard(patientData.password, 'password')}
                className="text-amber-600 hover:text-amber-800 text-xs flex items-center"
              >
                <Copy className="h-3 w-3 mr-1" /> 
                {copiedField === 'password' ? 'Copied!' : 'Copy'}
              </button>
            </div>
            <span className="text-gray-900 font-mono">{patientData.password}</span>
          </div>

          {/* Reference Number Field */}
          <div className="bg-purple-50 p-4 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <FileText className="h-5 w-5 text-purple-600 mr-2" />
                <span className="text-sm font-medium text-gray-700">Reference Number</span>
              </div>
              <button 
                onClick={() => copyToClipboard(patientData.referenceNumber, 'reference')}
                className="text-purple-600 hover:text-purple-800 text-xs flex items-center"
              >
                <Copy className="h-3 w-3 mr-1" /> 
                {copiedField === 'reference' ? 'Copied!' : 'Copy'}
              </button>
            </div>
            <span className="text-gray-900 font-medium">{patientData.referenceNumber}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 space-y-3">
          <button 
            onClick={onClose}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-4 rounded-lg transition duration-200 flex items-center justify-center"
          >
            <FileText className="h-5 w-5 mr-2" />
            Create Prescription
          </button>
          <button 
            onClick={onClose}
            className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-lg transition duration-200"
          >
            Close
          </button>
        </div>

        {/* Help Text */}
        <p className="text-center text-sm text-gray-500 mt-6">
          An email has been sent to the patient with these details.
        </p>
      </div>
    </div>
  )
}

export default PatientSuccessModal