import type React from "react"
import { QrCode } from "lucide-react"

const MyPrescriptions: React.FC = () => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex items-center gap-4 mb-6">
        <QrCode className="w-5 h-5 text-[#0C7AE9]" />
        <h2 className="text-lg font-semibold text-[#29333D]">My Prescriptions</h2>
      </div>

      <div className="text-center">
        <div className="flex items-center gap-2 mb-4">
          <QrCode className="w-4 h-4 text-[#29333D]" />
          <h3 className="font-medium text-[#29333D]">Prescription QR Code</h3>
        </div>
        <p className="text-sm text-[#29333D] opacity-70">QR code will appear here when doctor sends a prescription.</p>
      </div>
    </div>
  )
}

export default MyPrescriptions
