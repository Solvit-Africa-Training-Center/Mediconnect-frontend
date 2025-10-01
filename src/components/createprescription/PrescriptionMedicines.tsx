import { useState } from "react"
import { Plus } from "lucide-react"
import MedicineCard from "./MedicineCard"
import AddMedicineForm from "./AddMedicineForm"
import { usePrescription } from "../../contexts/PrescriptionContext"

const PrescriptionMedicines = () => {
  const { prescription, addMedication, removeMedication } = usePrescription()
  const [isAdding, setIsAdding] = useState(false)

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h3 className="text-lg font-semibold text-[#29333D] mb-4">Prescription Medicines</h3>
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

      {isAdding ? (
        <AddMedicineForm
          onAddMedicine={(med) => {
            addMedication(med)
            setIsAdding(false)
          }}
          medicineCount={prescription.medications.length}
        />
      ) : (
        <button
          onClick={() => setIsAdding(true)}
          className="flex w-full items-center justify-center gap-2 rounded-lg border-2 border-dashed border-gray-300 py-4 text-gray-500 transition-colors hover:border-blue-500 hover:text-blue-600"
        >
          <Plus size={18} />
          <span>{prescription.medications.length > 0 ? "Add Another Medicine" : "Add First Medicine"}</span>
        </button>
      )}
    </div>
  )
}

export default PrescriptionMedicines;