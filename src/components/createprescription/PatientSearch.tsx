import { Search } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import { useSearchPatientsQuery } from "../../Back-end/patient/patientApi"
import { usePrescription } from "../../contexts/PrescriptionContext"
import type { Patient } from "../../Types/patient/patient.types"

const PatientSearch = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [debouncedQuery, setDebouncedQuery] = useState("")
  const { prescription, setSelectedPatient } = usePrescription()
  const [showResults, setShowResults] = useState(false)
  const searchContainerRef = useRef<HTMLDivElement>(null)
  
  // Debounce search query
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery)
    }, 300)
    return () => clearTimeout(timer)
  }, [searchQuery])
  
  const { data: searchResults, isLoading, error } = useSearchPatientsQuery(
    { query: debouncedQuery },
    { skip: debouncedQuery.length < 2 }
  )
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setShowResults(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handlePatientSelect = (patient: Patient) => {
    setSelectedPatient(patient)
    setSearchQuery(patient.fullName)
    setShowResults(false)
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h3 className="text-lg font-semibold text-[#29333D] mb-2">Patient Information</h3>
      <p className="text-[#29333D] opacity-70 mb-4">Search for patient by name or ID</p>

      <div className="relative" ref={searchContainerRef}>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Enter Patient Name or ID"
            value={searchQuery}
            onFocus={() => setShowResults(true)}
            onChange={(e) => { setSearchQuery(e.target.value); setShowResults(true); }}
            className="flex-1 px-4 py-2 border border-[#D3D9DE] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0C7AE9] focus:border-transparent"
          />
          <button className="bg-[#0C7AE9] hover:bg-[#116FD4] text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
            <Search size={18} />
          </button>
        </div>

        {/* Search Results Dropdown */}
        {showResults && searchQuery.length >= 2 && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#D3D9DE] rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
            {isLoading ? (
              <div className="p-4 text-center text-gray-500">Searching...</div>
            ) : error ? (
              <div className="p-4 text-center text-red-500">Error searching patients</div>
            ) : searchResults?.length ? (
              searchResults.map((patient: Patient) => (
                <div
                  key={patient.id}
                  onClick={() => handlePatientSelect(patient)}
                  className="p-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0"
                >
                  <div className="font-medium text-[#29333D]">{patient.fullName}</div>
                  <div className="text-sm text-gray-500">ID: {patient.referenceNumber}</div>
                  <div className="text-sm text-gray-500">{patient.email}</div>
                </div>
              ))
            ) : (
              <div className="p-4 text-center text-gray-500">No patients found</div>
            )}
          </div>
        )}
      </div>

      {/* Selected Patient Info */}
      {prescription.selectedPatient && (
        <div className="mt-4 p-4 bg-blue-50 rounded-lg">
          <h4 className="font-medium text-[#29333D] mb-2">Selected Patient:</h4>
          <div className="text-sm space-y-1">
            <p><span className="font-medium">Name:</span> {prescription.selectedPatient.fullName}</p>
            <p><span className="font-medium">ID:</span> {prescription.selectedPatient.referenceNumber}</p>
            <p><span className="font-medium">Email:</span> {prescription.selectedPatient.email}</p>
            <p><span className="font-medium">Phone:</span> {prescription.selectedPatient.phone}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default PatientSearch
