import { usePrescription } from "../../contexts/PrescriptionContext"
import { useCreatePrescriptionMutation } from "../../Back-end/patient/patientApi"
import { useSelector } from "react-redux"
import { RootState } from "../../app/store"
import { useParams } from "react-router-dom"

const PrescriptionActions = () => {
  const { prescription, clearPrescription, isValid } = usePrescription()
  const [createPrescription, { isLoading }] = useCreatePrescriptionMutation()
  const authUser = useSelector((state: RootState) => state.auth.user)
  const { visitId } = useParams<{ visitId: string }>()
  const handleSubmit = async () => {
    if (!isValid) {
      console.error("Cannot submit, form is invalid. Please check diagnosis and medications.")
      return
    }
    if (!authUser) {
      console.error("Cannot submit, doctor profile is not loaded yet.")
      return
    }

    const payload = {
      // Use the actual doctorId from the logged-in user state
      doctorId: authUser?.id || "",
      visitId: visitId || "", // Use the visitId from the URL
      hospitalName: prescription.hospitalName,

      diagnosis: prescription.diagnosis,
      doctorNotes: prescription.instructions,
      items: prescription.medications.map(({ name, dosage, frequency, quantity, instructions }) => ({
        medicineName: name,
        dosage,
        frequency,
        quantity: Number(quantity),
        instructions: instructions || "",
      })),
    }

    // Log the payload to the console for debugging
    console.log("Prescription Payload:", JSON.stringify(payload, null, 2))

    if (!payload.doctorId || !payload.hospitalName) {
      console.error("Doctor ID or Hospital Name is missing. Cannot create prescription.")
      return
    }
    try {
      await createPrescription({ patientId: prescription.selectedPatient.id, data: payload }).unwrap()
      console.log("Prescription created successfully!")
      clearPrescription()
    } catch (err) {
      console.error("Failed to create prescription:", err)
    }
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm flex justify-end gap-4">
      <button
        onClick={clearPrescription}
        className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors"
      >
        Clear All
      </button>
      <button
        onClick={handleSubmit}
        disabled={!isValid || !authUser || isLoading }
        className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        {isLoading ? "Submitting..." : "Submit Prescription"}
      </button>
    </div>
  )
}

export default PrescriptionActions