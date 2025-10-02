import type React from "react"
import { User, FileText, Pill } from "lucide-react"
import { useGetPatientByIdQuery, useGetPatientHistoryQuery, useGetPatientPrescriptionsQuery } from "../../Back-end/patient/patientApi"
import type { Patient } from "../../Types/patient/patient.types"

interface PatientDetailsProps {
  patient: Patient | null
}

const PatientDetails: React.FC<PatientDetailsProps> = ({ patient }) => {
  if (!patient) {
    return (
      <div
        style={{ backgroundColor: "#FFFFFF" }}
        className="rounded-xl p-8 shadow-sm h-full flex flex-col items-center justify-center"
      >
        <div className="text-center">
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
            style={{ backgroundColor: "#D3D9DE" }}
          >
            <User className="w-8 h-8" style={{ color: "#29333D" }} />
          </div>
          <p style={{ color: "#29333D" }} className="text-lg font-medium mb-2">
            Select a patient to view their details
          </p>
          <p style={{ color: "#29333D" }} className="text-sm opacity-70">
            Choose a patient from the directory to see their medical information
          </p>
        </div>
      </div>
    )
  }

  return (
    <div style={{ backgroundColor: "#FFFFFF" }} className="rounded-xl p-6 shadow-sm">
      <div className="mb-6">
        <h3 style={{ color: "#29333D" }} className="text-lg font-semibold mb-2">
          Patient Details
        </h3>
        <p style={{ color: "#29333D" }} className="text-sm opacity-70">
          Detailed information for {patient.fullName}
        </p>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label style={{ color: "#29333D" }} className="text-sm font-medium opacity-70">
              Patient Name
            </label>
            <p style={{ color: "#29333D" }} className="text-base font-medium">
              {patient.fullName}
            </p>
          </div>
          <div>
            <label style={{ color: "#29333D" }} className="text-sm font-medium opacity-70">
              Patient ID
            </label>
            <p style={{ color: "#29333D" }} className="text-base font-medium">
              {patient.referenceNumber}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label style={{ color: "#29333D" }} className="text-sm font-medium opacity-70">
              Gender
            </label>
            <p style={{ color: "#29333D" }} className="text-base">
              {patient.gender}
            </p>
          </div>
          <div>
            <label style={{ color: "#29333D" }} className="text-sm font-medium opacity-70">
              Phone
            </label>
            <p style={{ color: "#29333D" }} className="text-base">
              {patient.phone}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label style={{ color: "#29333D" }} className="text-sm font-medium opacity-70">
              Last Visit
            </label>
            <p style={{ color: "#29333D" }} className="text-base">
              {new Date(patient.createdAt).toLocaleDateString()}
            </p>
          </div>
          <div>
            <label style={{ color: "#29333D" }} className="text-sm font-medium opacity-70">
              Total Prescriptions
            </label>
            <p style={{ color: "#29333D" }} className="text-base font-medium">
              ...
            </p>
          </div>
        </div>

        {/* Medical Records Summary */}
        <div className="pt-4 border-t border-gray-100 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 rounded-lg" style={{ backgroundColor: "#EEF2FF" }}>
              <div className="flex items-center gap-2 mb-2">
                <FileText className="w-4 h-4" style={{ color: "#0C7AE9" }} />
                <span style={{ color: "#29333D" }} className="text-sm font-medium">
                  Medical History
                </span>
              </div>
              <p style={{ color: "#29333D" }} className="text-lg font-semibold">
                ...
              </p>
              <p style={{ color: "#29333D" }} className="text-xs opacity-70">
                Total Records
              </p>
            </div>
            
            <div className="p-3 rounded-lg" style={{ backgroundColor: "#F0FDF4" }}>
              <div className="flex items-center gap-2 mb-2">
                <Pill className="w-4 h-4" style={{ color: "#16A34A" }} />
                <span style={{ color: "#29333D" }} className="text-sm font-medium">
                  Prescriptions
                </span>
              </div>
              <p style={{ color: "#29333D" }} className="text-lg font-semibold">
                ...
              </p>
              <p style={{ color: "#29333D" }} className="text-xs opacity-70">
                Total Prescriptions
              </p>
            </div>
          </div>

          <button
            style={{ backgroundColor: "#0C7AE9" }}
            className="w-full py-2 px-4 text-white rounded-lg hover:opacity-90 transition-opacity font-medium"
          >
            View Full Medical History
          </button>
        </div>
      </div>
    </div>
  )
}

export default PatientDetails
