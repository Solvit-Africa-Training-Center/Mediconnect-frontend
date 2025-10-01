import { usePrescription } from "../../contexts/PrescriptionContext"
import { useCreatePrescriptionMutation } from "../../Back-end/patient/patientApi"
import { useSelector } from "react-redux"
import { RootState } from "../../app/store"
import { useGetDoctorProfileQuery } from "../../Back-end/doctor/doctorApi"

const PrescriptionActions = () => {
  const { prescription, clearPrescription, isValid } = usePrescription()
  const [createPrescription, { isLoading }] = useCreatePrescriptionMutation()
  const authUser = useSelector((state: RootState) => state.auth.user)

  // Fetch the full doctor profile to ensure we have all necessary data like hospital name
  const { data: doctorProfile, isLoading: isProfileLoading } = useGetDoctorProfileQuery(undefined, { skip: !authUser });
  const user = doctorProfile ? { ...authUser, ...doctorProfile } : authUser;

  const handleSubmit = async () => {
    if (!isValid) {
      console.error("Cannot submit, form is invalid. Please check diagnosis and medications.")
      return
    }
    if (!prescription.selectedPatient) {
      console.error("Cannot submit, no patient selected.")
      return
    }
    if (!user || isProfileLoading) {
      console.error("Cannot submit, doctor profile is not loaded yet.")
      return
    }

    const payload = {
      // Use the actual doctorId from the logged-in user state
      doctorId: user?.id || "",
      visitId: "123e4567-e89b-12d3-a456-426614174002", // TODO: Replace with actual visit ID from app state/context
      hospitalName: user?.hospital || "",

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

    // Log the request details for debugging
    console.log("--- Creating Prescription ---")
    console.log("Request URL:", `/api/v1/patients/${prescription.selectedPatient.id}/prescriptions`)
    console.log("Request Method:", "POST")
    console.log("Request Payload:", JSON.stringify(payload, null, 2))

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
        disabled={!isValid || !prescription.selectedPatient || !user || isLoading || isProfileLoading}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        {isLoading || isProfileLoading ? "Submitting..." : "Submit Prescription"}
      </button>
    </div>
  )
}

export default PrescriptionActions