import { useState } from "react"
import MedicineCard from "./MedicineCard"
import AddMedicineForm from "./AddMedicineForm"

const PrescriptionMedicines = () => {
  const [medicines, setMedicines] = useState([
    {
      id: "1",
      name: "Paracetamol",
      dosage: "500g",
      frequency: "four times daily",
      duration: "7 days",
      instructions: "Take this medicine after eating your food",
    },
  ])

  const addMedicine = (medicine: any) => {
    setMedicines([...medicines, medicine])
  }

  const removeMedicine = (id: string) => {
    setMedicines(medicines.filter((med) => med.id !== id))
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h3 className="text-lg font-semibold text-[#29333D] mb-2">Prescription Medicines</h3>
      <p className="text-[#29333D] opacity-70 mb-6">
        Add multiple medicines to the prescription with dosage and instructions
      </p>

      <div className="mb-6">
        <h4 className="font-medium text-[#29333D] mb-4">Added Medicines ({medicines.length})</h4>
        <div className="space-y-3">
          {medicines.map((medicine) => (
            <MedicineCard key={medicine.id} medicine={medicine} onRemove={removeMedicine} />
          ))}
        </div>
      </div>

      <AddMedicineForm onAddMedicine={addMedicine} medicineCount={medicines.length} />
    </div>
  )
}

export default PrescriptionMedicines
