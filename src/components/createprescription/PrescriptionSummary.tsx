import { FileText, User, Pill } from "lucide-react"
import { usePrescription } from "../../contexts/PrescriptionContext"

const PrescriptionSummary = () => {
  const { prescription, isValid } = usePrescription()

  if (!prescription.selectedPatient && !prescription.diagnosis && prescription.medications.length === 0) {
    return null
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-[#0C7AE9]">
      <div className="flex items-center gap-2 mb-4">
        <FileText className="w-5 h-5 text-[#0C7AE9]" />
        <h3 className="text-lg font-semibold text-[#29333D]">Prescription Summary</h3>
        {isValid && (
          <span className="ml-auto bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
            Ready to Submit
          </span>
        )}
      </div>

      <div className="space-y-4">
        {prescription.selectedPatient && (
          <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
            <User className="w-4 h-4 text-blue-600" />
            <div>
              <p className="font-medium text-[#29333D]">{prescription.selectedPatient.fullName}</p>
              <p className="text-sm text-gray-600">ID: {prescription.selectedPatient.referenceNumber}</p>
            </div>
          </div>
        )}

        {prescription.diagnosis && (
          <div>
            <p className="text-sm font-medium text-[#29333D] mb-1">Diagnosis:</p>
            <p className="text-sm text-gray-600 bg-gray-50 p-2 rounded">{prescription.diagnosis}</p>
          </div>
        )}

        {prescription.medications.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Pill className="w-4 h-4 text-[#29333D]" />
              <p className="text-sm font-medium text-[#29333D]">
                Medications ({prescription.medications.length})
              </p>
            </div>
            <div className="space-y-2">
              {prescription.medications.map((med) => (
                <div key={med.id} className="text-sm bg-gray-50 p-2 rounded">
                  <span className="font-medium">{med.name}</span> - {med.dosage}, {med.frequency}
                </div>
              ))}
            </div>
          </div>
        )}

        {prescription.instructions && (
          <div>
            <p className="text-sm font-medium text-[#29333D] mb-1">Instructions:</p>
            <p className="text-sm text-gray-600 bg-gray-50 p-2 rounded">{prescription.instructions}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default PrescriptionSummary