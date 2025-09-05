import { FileText, User, Calendar, Download, Eye } from "lucide-react"

interface Prescription {
  id: string
  patient: {
    name: string
    patientId: string
  }
  date: string
  diagnosis: string
  medicineCount: number
}

const prescriptions: Prescription[] = [
  {
    id: "PRX-001",
    patient: { name: "John Doe", patientId: "PAT-001" },
    date: "1/15/2024",
    diagnosis: "Hypertension management",
    medicineCount: 2,
  },
  {
    id: "PRX-002",
    patient: { name: "Sarah Wilson", patientId: "PAT-002" },
    date: "1/14/2024",
    diagnosis: "Asthma exacerbation",
    medicineCount: 3,
  },
  {
    id: "PRX-003",
    patient: { name: "Michael Brown", patientId: "PAT-003" },
    date: "1/12/2024",
    diagnosis: "Diabetes management",
    medicineCount: 1,
  },
  {
    id: "PRX-004",
    patient: { name: "Emma Davis", patientId: "PAT-004" },
    date: "1/10/2024",
    diagnosis: "Upper respiratory infection",
    medicineCount: 2,
  },
  {
    id: "PRX-005",
    patient: { name: "James Miller", patientId: "PAT-005" },
    date: "1/08/2024",
    diagnosis: "Pain management",
    medicineCount: 1,
  },
]

const PrescriptionTable = () => {
  return (
    <div style={{ backgroundColor: "#FFFFFF" }} className="rounded-xl shadow-sm">
      <div className="p-6 border-b" style={{ borderColor: "#D3D9DE" }}>
        <h3 className="text-lg font-semibold" style={{ color: "#131A20" }}>
          All Prescriptions
        </h3>
        <p className="text-sm" style={{ color: "#29333D" }}>
          Showing 5 of 10 prescriptions
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead style={{ backgroundColor: "#D3D9DE", opacity: 0.3 }}>
            <tr>
              <th
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                style={{ color: "#29333D" }}
              >
                Prescription ID
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                style={{ color: "#29333D" }}
              >
                Patient
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                style={{ color: "#29333D" }}
              >
                Date
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                style={{ color: "#29333D" }}
              >
                Diagnosis
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                style={{ color: "#29333D" }}
              >
                Medicines
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                style={{ color: "#29333D" }}
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y" style={{ backgroundColor: "#FFFFFF", borderColor: "#D3D9DE" }}>
            {prescriptions.map((prescription) => (
              <tr key={prescription.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <FileText className="w-4 h-4 mr-2" style={{ color: "#0C7AE9" }} />
                    <span className="text-sm font-medium" style={{ color: "#0C7AE9" }}>
                      {prescription.id}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-2" style={{ color: "#29333D" }} />
                    <div>
                      <div className="text-sm font-medium" style={{ color: "#131A20" }}>
                        {prescription.patient.name}
                      </div>
                      <div className="text-sm" style={{ color: "#29333D" }}>
                        {prescription.patient.patientId}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" style={{ color: "#29333D" }} />
                    <span className="text-sm" style={{ color: "#131A20" }}>
                      {prescription.date}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm" style={{ color: "#131A20" }}>
                    {prescription.diagnosis}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm" style={{ color: "#131A20" }}>
                    {prescription.medicineCount} medicines
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center space-x-2">
                    <button className="p-1 rounded hover:bg-gray-100" style={{ color: "#0C7AE9" }}>
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="p-1 rounded hover:bg-gray-100" style={{ color: "#29333D" }}>
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="px-6 py-4 border-t flex items-center justify-center" style={{ borderColor: "#D3D9DE" }}>
        <div className="flex items-center space-x-2">
          <button className="px-3 py-1 rounded text-sm" style={{ color: "#29333D" }}>
            ‹
          </button>
          <button
            className="px-3 py-1 rounded text-sm font-medium"
            style={{ backgroundColor: "#0C7AE9", color: "#FFFFFF" }}
          >
            1
          </button>
          <button className="px-3 py-1 rounded text-sm" style={{ color: "#29333D" }}>
            ›
          </button>
        </div>
      </div>
    </div>
  )
}

export default PrescriptionTable
