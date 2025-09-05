

import { X } from "lucide-react"

interface MedicineCardProps {
  medicine: {
    id: string
    name: string
    dosage: string
    frequency: string
    duration: string
    instructions: string
  }
  onRemove: (id: string) => void
}

const MedicineCard = ({ medicine, onRemove }: MedicineCardProps) => {
  return (
    <div className="bg-pupple-50 bg-opacity-30 p-4 rounded-lg border border-[#D3D9DE]">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-[#0C7AE9] font-medium">#{medicine.id}</span>
          <span className="font-medium text-[#29333D]">{medicine.name}</span>
        </div>
        <button onClick={() => onRemove(medicine.id)} className="text-red-500 hover:text-red-700 transition-colors">
          <X size={16} />
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-3">
        <div>
          <span className="text-sm font-medium text-[#29333D]">Dosage: </span>
          <span className="text-sm text-[#29333D] opacity-80">{medicine.dosage}</span>
        </div>
        <div>
          <span className="text-sm font-medium text-[#29333D]">Frequency: </span>
          <span className="text-sm text-[#29333D] opacity-80">{medicine.frequency}</span>
        </div>
        <div>
          <span className="text-sm font-medium text-[#29333D]">Duration: </span>
          <span className="text-sm text-[#29333D] opacity-80">{medicine.duration}</span>
        </div>
      </div>

      <div>
        <span className="text-sm font-medium text-[#0C7AE9]">Instructions: </span>
        <span className="text-sm text-[#0C7AE9] italic">{medicine.instructions}</span>
      </div>
    </div>
  )
}

export default MedicineCard
