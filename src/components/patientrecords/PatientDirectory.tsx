import type React from "react"
import { useState, useEffect } from "react"
import { Search, Phone, Calendar, Eye } from "lucide-react"
import { useGetPatientsQuery, useSearchPatientsQuery } from "../../Back-end/patient/patientApi"

// Debounce hook
function useDebounce(value: string, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value)
  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay)
    return () => clearTimeout(handler)
  }, [value, delay])
  return debouncedValue
}

interface Patient {
  id: string
  name: string
  patientId: string
  gender: string
  phone: string
  lastVisit: string
  prescriptions: number
}

// Mock data fallback
const mockPatients: Patient[] = [
  { id: "1", name: "John Doe", patientId: "PAT-001", gender: "Male", phone: "+1 (555) 123-4567", lastVisit: "1/15/2024", prescriptions: 12 },
  { id: "2", name: "Sarah Wilson", patientId: "PAT-002", gender: "Female", phone: "+1 (555) 234-5678", lastVisit: "1/10/2024", prescriptions: 5 },
  { id: "3", name: "Michael Brown", patientId: "PAT-003", gender: "Male", phone: "+1 (555) 345-6789", lastVisit: "1/08/2024", prescriptions: 18 }
]

interface PatientDirectoryProps {
  onPatientSelect: (patient: Patient) => void
}

const PatientDirectory: React.FC<PatientDirectoryProps> = ({ onPatientSelect }) => {
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredPatients, setFilteredPatients] = useState<Patient[]>([])

  const debouncedSearchTerm = useDebounce(searchTerm, 2000)
  const shouldSearch = debouncedSearchTerm.length >= 3

  const { data: allPatients, isLoading: isLoadingAll } = useGetPatientsQuery(undefined, { skip: shouldSearch })
  const { data: searchResults, isLoading: isSearching, error: searchError } = useSearchPatientsQuery(
    { query: debouncedSearchTerm }, // ✅ Use 'query' for backend
    { skip: !shouldSearch }
  )

  useEffect(() => {
    if (!shouldSearch) {
      setFilteredPatients(allPatients || mockPatients)
    } else {
      if (searchResults && searchResults.length > 0) {
        setFilteredPatients(
          searchResults.map((p: any) => ({
            id: p.id,
            name: p.fullName,
            patientId: p.referenceNumber,
            gender: p.gender,
            phone: p.phone,
            lastVisit: p.createdAt.split("T")[0],
            prescriptions: 0, // fallback if API doesn't return prescriptions
          }))
        )
      } else if (searchError || !isSearching) {
        const filtered = mockPatients.filter(
          (patient) =>
            patient.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
            patient.patientId.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
        )
        setFilteredPatients(filtered)
      }
    }
  }, [allPatients, searchResults, debouncedSearchTerm, shouldSearch, isSearching, searchError])

  return (
    <div className="rounded-xl p-6 shadow-sm" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2" style={{ color: "#29333D" }}>Patient Directory</h3>
        <p className="text-sm opacity-70 mb-4" style={{ color: "#29333D" }}>
          Search and select patients to view their records
        </p>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4" style={{ color: "#29333D" }} />
          <input
            type="text"
            placeholder="Search by name or patient ID..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            style={{ backgroundColor: "#faf5ff", color: "#29333D" }}
          />
        </div>
      </div>

      {(isLoadingAll || isSearching) && (
        <div className="text-center py-4">
          <p className="text-sm" style={{ color: "#29333D" }}>
            {isSearching ? `Searching for "${searchTerm}"...` : "Loading patients..."}
          </p>
        </div>
      )}

      {searchError && (
        <div className="text-center py-4">
          <p className="text-sm" style={{ color: "#DC2626" }}>Search error: {JSON.stringify(searchError)}</p>
        </div>
      )}

      {filteredPatients.length === 0 && !isLoadingAll && !isSearching && (
        <div className="text-center py-8">
          <p className="text-sm opacity-70" style={{ color: "#29333D" }}>
            {searchTerm ? "No patients found matching your search." : "No patients found."}
          </p>
        </div>
      )}

      {filteredPatients.length > 0 && (
        <div className="overflow-hidden">
          <table className="w-full">
            <thead>
              <tr style={{ backgroundColor: "#D3D9DE" }}>
                <th className="text-left py-3 px-4 font-medium text-sm" style={{ color: "#29333D" }}>Patient</th>
                <th className="text-left py-3 px-4 font-medium text-sm" style={{ color: "#29333D" }}>Contact</th>
                <th className="text-left py-3 px-4 font-medium text-sm" style={{ color: "#29333D" }}>Last Visit</th>
                <th className="text-left py-3 px-4 font-medium text-sm" style={{ color: "#29333D" }}>Prescriptions</th>
                <th className="text-left py-3 px-4 font-medium text-sm" style={{ color: "#29333D" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredPatients.map((patient) => (
                <tr
                  key={patient.id}
                  className="border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors"
                  onClick={() => onPatientSelect(patient)}
                >
                  <td className="py-4 px-4">
                    <div>
                      <div className="font-medium" style={{ color: "#29333D" }}>{patient.name}</div>
                      <div className="text-sm opacity-70" style={{ color: "#29333D" }}>{patient.patientId} • {patient.gender}</div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4" style={{ color: "#29333D" }} />
                      <span className="text-sm" style={{ color: "#29333D" }}>{patient.phone}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" style={{ color: "#29333D" }} />
                      <span className="text-sm" style={{ color: "#29333D" }}>{patient.lastVisit}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-sm font-medium" style={{ color: "#29333D" }}>{patient.prescriptions}</span>
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
      )}
    </div>
  )
}

export default PatientDirectory
