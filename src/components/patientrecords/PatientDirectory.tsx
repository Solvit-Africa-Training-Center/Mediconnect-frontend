
import type React from "react"
import { useState } from "react"
import { Search, Phone, Calendar, Eye } from "lucide-react"

interface Patient {
  id: string
  name: string
  patientId: string
  gender: string
  phone: string
  lastVisit: string
  prescriptions: number
}

const mockPatients: Patient[] = [
  {
    id: "1",
    name: "John Doe",
    patientId: "PAT-001",
    gender: "Male",
    phone: "+1 (555) 123-4567",
    lastVisit: "1/15/2024",
    prescriptions: 12,
  },
  {
    id: "2",
    name: "Sarah Wilson",
    patientId: "PAT-002",
    gender: "Female",
    phone: "+1 (555) 234-5678",
    lastVisit: "1/10/2024",
    prescriptions: 5,
  },
  {
    id: "3",
    name: "Michael Brown",
    patientId: "PAT-003",
    gender: "Male",
    phone: "+1 (555) 345-6789",
    lastVisit: "1/08/2024",
    prescriptions: 18,
  },
]

interface PatientDirectoryProps {
  onPatientSelect: (patient: Patient) => void
}

const PatientDirectory: React.FC<PatientDirectoryProps> = ({ onPatientSelect }) => {
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredPatients, setFilteredPatients] = useState(mockPatients)

  const handleSearch = (term: string) => {
    setSearchTerm(term)
    const filtered = mockPatients.filter(
      (patient) =>
        patient.name.toLowerCase().includes(term.toLowerCase()) ||
        patient.patientId.toLowerCase().includes(term.toLowerCase()),
    )
    setFilteredPatients(filtered)
  }

  return (
    <div style={{ backgroundColor: "#FFFFFF" }} className="rounded-xl p-6 shadow-sm">
      <div className="mb-6">
        <h3 style={{ color: "#29333D" }} className="text-lg font-semibold mb-2">
          Patient Directory
        </h3>
        <p style={{ color: "#29333D" }} className="text-sm opacity-70 mb-4">
          Search and select patients to view their records
        </p>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4" style={{ color: "#29333D" }} />
          <input
            type="text"
            placeholder="Search by name or patient ID..."
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            style={{ backgroundColor: "#faf5ff", color: "#29333D" }}
          />
        </div>
      </div>

      <div className="overflow-hidden">
        <table className="w-full">
          <thead>
            <tr style={{ backgroundColor: "#D3D9DE" }}>
              <th style={{ color: "#29333D" }} className="text-left py-3 px-4 font-medium text-sm">
                Patient
              </th>
              <th style={{ color: "#29333D" }} className="text-left py-3 px-4 font-medium text-sm">
                Contact
              </th>
              <th style={{ color: "#29333D" }} className="text-left py-3 px-4 font-medium text-sm">
                Last Visit
              </th>
              <th style={{ color: "#29333D" }} className="text-left py-3 px-4 font-medium text-sm">
                Prescriptions
              </th>
              <th style={{ color: "#29333D" }} className="text-left py-3 px-4 font-medium text-sm">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredPatients.map((patient, index) => (
              <tr
                key={patient.id}
                className={`border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors`}
                onClick={() => onPatientSelect(patient)}
              >
                <td className="py-4 px-4">
                  <div>
                    <div style={{ color: "#29333D" }} className="font-medium">
                      {patient.name}
                    </div>
                    <div style={{ color: "#29333D" }} className="text-sm opacity-70">
                      {patient.patientId} • {patient.gender}
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" style={{ color: "#29333D" }} />
                    <span style={{ color: "#29333D" }} className="text-sm">
                      {patient.phone}
                    </span>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" style={{ color: "#29333D" }} />
                    <span style={{ color: "#29333D" }} className="text-sm">
                      {patient.lastVisit}
                    </span>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <span style={{ color: "#29333D" }} className="text-sm font-medium">
                    {patient.prescriptions}
                  </span>
                </td>
                <td className="py-4 px-4">
                  <button
                    className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                    onClick={(e) => {
                      e.stopPropagation()
                      onPatientSelect(patient)
                    }}
                  >
                    <Eye className="w-4 h-4" style={{ color: "#29333D" }} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default PatientDirectory
