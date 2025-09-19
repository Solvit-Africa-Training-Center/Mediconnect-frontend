import { Save, Send } from "lucide-react"
import { usePrescription } from "../../contexts/PrescriptionContext"
import { useCreatePrescriptionMutation } from "../../Back-end/patient/patientApi"
import { useGenerateQrCodeMutation } from "../../Back-end/qr-codes/qrCodeApi"
import { useAuth } from "../../contexts/AuthContext"
import { useState } from "react"

const PrescriptionActions = () => {
  const { prescription, isValid, clearPrescription } = usePrescription()
  const { user } = useAuth()
  const [createPrescription, { isLoading }] = useCreatePrescriptionMutation()
  const [generateQrCode] = useGenerateQrCodeMutation()
  const [success, setSuccess] = useState(false)

  const handleSubmit = async () => {
    if (!isValid || !prescription.selectedPatient || !user) return

    try {
      const prescriptionData = {
        patientId: prescription.selectedPatient.id,
        diagnosis: prescription.diagnosis,
        medications: prescription.medications,
        instructions: prescription.instructions
      }

      const result = await createPrescription(prescriptionData).unwrap()
      
      // Generate QR code for the prescription
      await generateQrCode(result.id)
      
      setSuccess(true)
      clearPrescription()
      
      setTimeout(() => setSuccess(false), 3000)
    } catch (error) {
      console.error('Failed to create prescription:', error)
    }
  }

  if (success) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
        <p className="text-green-600 font-medium">Prescription created successfully!</p>
      </div>
    )
  }

  return (
    <div className="flex gap-4 justify-end">
      <button 
        onClick={clearPrescription}
        className="flex items-center gap-2 px-6 py-3 border border-[#D3D9DE] text-[#29333D] rounded-lg hover:bg-[#D3D9DE] hover:bg-opacity-30 transition-colors"
        disabled={isLoading}
      >
        <Save size={18} />
        Clear Form
      </button>
      <button 
        onClick={handleSubmit}
        disabled={!isValid || isLoading}
        className="flex items-center gap-2 px-6 py-3 bg-[#0C7AE9] hover:bg-[#116FD4] text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? (
          <>
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            Creating...
          </>
        ) : (
          <>
            <Send size={18} />
            Create Prescription ({prescription.medications.length} medicines)
          </>
        )}
      </button>
    </div>
  )
}

export default PrescriptionActions
