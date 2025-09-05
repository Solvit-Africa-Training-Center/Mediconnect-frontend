import { Save, Send } from "lucide-react"

interface PrescriptionActionsProps {
  medicineCount: number
}

const PrescriptionActions = ({ medicineCount }: PrescriptionActionsProps) => {
  return (
    <div className="flex gap-4 justify-end">
      <button className="flex items-center gap-2 px-6 py-3 border border-[#D3D9DE] text-[#29333D] rounded-lg hover:bg-[#D3D9DE] hover:bg-opacity-30 transition-colors">
        <Save size={18} />
        Save as Draft ({medicineCount} medicines)
      </button>
      <button className="flex items-center gap-2 px-6 py-3 bg-[#0C7AE9] hover:bg-[#116FD4] text-white rounded-lg transition-colors">
        <Send size={18} />
        Save & Send ({medicineCount} medicines)
      </button>
    </div>
  )
}

export default PrescriptionActions
