import { useState } from "react"
import { Search, User, FileText } from "lucide-react"
import {
  useSearchPatientsQuery,
  useGetPatientsQuery,
  useGetPatientHistoryQuery,
} from "../Back-end/patient/patientApi"
import AddPatient from "./AddPatient"
import type { Patient, MedicalVisit } from "../Types"

const PatientSearch = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedPatient, setSelectedPatient] = useState<string | null>(null)

  // Fetch patients (search or all)
  const { data: searchResults, isLoading: isSearching, } = useSearchPatientsQuery(
    { query: searchQuery },
    { skip: searchQuery.length < 2 }
  )

  const { data: allPatients, isLoading: isLoadingAll } = useGetPatientsQuery()

  const { data: patientRecords, isLoading: isLoadingRecords } =
    useGetPatientHistoryQuery(selectedPatient || "", {
      skip: !selectedPatient,
    })
  
  // Merge search results or fallback to all patients
  const patients: Patient[] = searchQuery
    ? searchResults ?? []
    : allPatients?.patients ?? []

  return (
    <div>
      <AddPatient />
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 bg-blue-400">
          Pa
        </h2>

        {/* Search Input */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search by name, email, or phone..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Loading States */}
        {isSearching && <p className="text-gray-500">Searching...</p>}
        {isLoadingAll && !searchQuery && (
          <p className="text-gray-500">Loading patients...</p>
        )}

        {/* Patient List */}
        {patients.length > 0 ? (
          <div className="mb-6">
            <h3 className="font-medium text-gray-700 mb-3">
              {searchQuery ? "Search Results" : "All Patients"}
            </h3>
            <div className="space-y-2">
              {patients.map((patient) => (
                <div
                  key={patient.id}
                  onClick={() => setSelectedPatient(patient.id)}
                  className={`flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50 cursor-pointer ${
                    selectedPatient === patient.id ? "bg-blue-50 border-blue-400" : ""
                  }`}
                >
                  <User className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="font-medium">{patient.fullName}</p>
                    <p className="text-sm text-gray-500">{patient.email}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          !isSearching &&
          !isLoadingAll &&
          searchQuery.length > 0 && (
            <p className="text-gray-500">No patients found.</p>
          )
        )}

        {/* Patient Records */}
        {selectedPatient && (
          <div>
            <h3 className="font-medium text-gray-700 mb-3">Medical Records</h3>
            {isLoadingRecords ? (
              <p className="text-gray-500">Loading records...</p>
            ) : patientRecords?.length > 0 ? (
              <div className="space-y-2">
                {patientRecords.map((visit: MedicalVisit) => (
                  <div
                    key={visit.patientId}
                    className="flex items-center gap-3 p-3 border rounded-lg"
                  >
                    <FileText className="w-5 h-5 text-blue-500" />
                    <div>
                      <p className="font-medium">{visit.diagnosis}</p>
                      <p className="text-sm text-gray-500">{visit.visitDate}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">
                No medical records found for this patient.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default PatientSearch
