import type React from "react"
import { FileText } from "lucide-react"

const MedicalHistory: React.FC = () => {
  const records = [
    {
      type: "Prescription",
      date: "2024-01-10",
      doctor: "Dr. MUKAMANA Alice",
      description: "Paracetamol for fever management",
    },
    {
      type: "Consultation",
      date: "2024-01-05",
      doctor: "Dr. KAGAME Jean Baptiste",
      description: "Routine diabetes check-up",
    },
    {
      type: "Lab Results",
      date: "2023-12-20",
      doctor: "Dr. UWIMANA Grace",
      description: "Blood sugar and HbA1c levels",
    },
  ]

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex items-center gap-4 mb-6">
        <FileText className="w-5 h-5 text-[#0C7AE9]" />
        <h2 className="text-lg font-semibold text-[#29333D]">Medical History</h2>
      </div>

      <div className="mb-4">
        <h3 className="text-sm font-medium text-[#29333D] opacity-70 mb-3">RECENT RECORDS</h3>
        <div className="space-y-3">
          {records.map((record, index) => (
            <div key={index} className="flex items-start justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium text-[#29333D]">{record.type}</span>
                  <span className="text-xs text-[#29333D] opacity-50">{record.date}</span>
                </div>
                <p className="text-sm font-medium text-[#29333D]">{record.doctor}</p>
                <p className="text-sm text-[#29333D] opacity-70">{record.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button className="w-full bg-[#0C7AE9] text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-[#116FD4] transition-colors">
        <FileText className="w-4 h-4" />
        Request your Medical Report
      </button>
    </div>
  )
}

export default MedicalHistory
