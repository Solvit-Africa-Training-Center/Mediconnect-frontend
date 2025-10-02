import { QrCode } from "lucide-react"
import { Button } from "@/components/ui/button"

export function QrScanner() {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-8">
      <div className="flex items-center gap-2 mb-6">
        <QrCode className="w-5 h-5 text-blue-600" />
        <h2 className="text-xl font-semibold text-gray-900">Scan Prescription QR Code</h2>
      </div>

      {/* QR Scanner Frame */}
      <div className="flex flex-col items-center">
        <div className="relative w-full max-w-md aspect-square border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center bg-gray-50">
          {/* Corner markers */}
          <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-gray-400"></div>
          <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-gray-400"></div>
          <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-gray-400"></div>
          <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-gray-400"></div>

          {/* Center text */}
          <p className="text-gray-400 text-sm">Position QR code within the frame</p>
        </div>

        {/* Start Scanning Button */}
        <Button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 rounded-lg">Start Scanning</Button>
      </div>
    </div>
  )
}
