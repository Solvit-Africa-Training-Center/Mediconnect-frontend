import MedicineCard from "./MedicineCard"
import AddMedicineForm from "./AddMedicineForm"
import { usePrescription } from "../../contexts/PrescriptionContext"

const PrescriptionMedicines = () => {
  const { prescription, addMedication, removeMedication } = usePrescription()

  return (
    <div className="bg-white rounded-xl shadow-sm">
      <h3 className="text-lg font-semibold text-[#29333D] mb-2">Prescription Medicines</h3>
      <p className="text-[#29333D] opacity-70 mb-6">
        Add multiple medicines to the prescription with dosage and instructions
      </p>

      <div className="mb-6">
        <h4 className="font-medium text-[#29333D] mb-4">Added Medicines ({prescription.medications.length})</h4>
        <div className="space-y-3">
          {prescription.medications.length > 0 ? (
            prescription.medications.map((medication) => (
              <MedicineCard key={medication.id} medicine={medication} onRemove={removeMedication} />
            ))
          ) : (
            <div className="text-center py-8 text-gray-500">
              <p>No medications added yet</p>
            </div>
          )}
        </div>
      </div>

      <AddMedicineForm onAddMedicine={addMedication} medicineCount={prescription.medications.length} />
    </div>
  )
}

export default PrescriptionMedicines