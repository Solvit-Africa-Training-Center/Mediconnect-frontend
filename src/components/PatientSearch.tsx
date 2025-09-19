import { useState } from 'react'
import { Search, User, FileText } from 'lucide-react'
import { useSearchPatientsQuery, useGetPatientRecordsQuery, useGetAllPatientsQuery } from '../Back-end/Api/apiEntry'
import AddPatient from './AddPatient'

const PatientSearch = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedPatient, setSelectedPatient] = useState<string | null>(null)
  
  const { data: searchResults, isLoading: isSearching } = useSearchPatientsQuery(
    { query: searchQuery },
    { skip: searchQuery.length < 2 }
  )
  
  const { data: allPatients, isLoading: isLoadingAll } = useGetAllPatientsQuery()
  
  const { data: patientRecords, isLoading: isLoadingRecords } = useGetPatientRecordsQuery(
    selectedPatient!,
    { skip: !selectedPatient }
  )

  return (
    <div>
      <AddPatient />
      <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Patient Search</h2>
      
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

      {/* Search Results or All Patients */}
      {isSearching && <p className="text-gray-500">Searching...</p>}
      {isLoadingAll && <p className="text-gray-500">Loading patients...</p>}
      
      {(searchResults?.patients || allPatients?.patients) && (
        <div className="mb-6">
          <h3 className="font-medium text-gray-700 mb-3">
            {searchQuery ? 'Search Results' : 'All Patients'}
          </h3>
          <div className="space-y-2">
            {(searchQuery ? searchResults?.patients : allPatients?.patients)?.map((patient: any) => (
              <div
                key={patient.id}
                onClick={() => setSelectedPatient(patient.id)}
                className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50 cursor-pointer"
              >
                <User className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="font-medium">{patient.name}</p>
                  <p className="text-sm text-gray-500">{patient.email}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Patient Records */}
      {selectedPatient && (
        <div>
          <h3 className="font-medium text-gray-700 mb-3">Medical Records</h3>
          {isLoadingRecords ? (
            <p className="text-gray-500">Loading records...</p>
          ) : (
            <div className="space-y-2">
              {patientRecords?.records?.map((record: any) => (
                <div key={record.id} className="flex items-center gap-3 p-3 border rounded-lg">
                  <FileText className="w-5 h-5 text-blue-500" />
                  <div>
                    <p className="font-medium">{record.diagnosis}</p>
                    <p className="text-sm text-gray-500">{record.date}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
      </div>
    </div>
  )
}

export default PatientSearch