import { Download } from "lucide-react"

const PrescriptionHeader = () => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-semibold" style={{ color: "#131A20" }}>
          Prescription History
        </h1>
        <p className="text-sm mt-1" style={{ color: "#29333D" }}>
          View and manage all prescriptions
        </p>
      </div>

      <div className="flex items-center space-x-3">
        <button
          className="flex items-center px-4 py-2 rounded-lg border text-sm font-medium hover:bg-gray-50 transition-colors"
          style={{
            borderColor: "#D3D9DE",
            color: "#29333D",
            backgroundColor: "#FFFFFF",
          }}
        >
          <Download className="w-4 h-4 mr-2" />
          Export PDF
        </button>

        <button
          className="flex items-center px-4 py-2 rounded-lg border text-sm font-medium hover:bg-gray-50 transition-colors"
          style={{
            borderColor: "#D3D9DE",
            color: "#29333D",
            backgroundColor: "#FFFFFF",
          }}
        >
          <Download className="w-4 h-4 mr-2" />
          Export CSV
        </button>
      </div>
    </div>
  )
}

export default PrescriptionHeader
