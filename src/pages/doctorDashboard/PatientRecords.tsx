import { useState } from "react"
import { SidebarProvider, useSidebar } from "../../contexts/SidebarContext"
import Sidebar from "../../components/Doctordashboard/Sidebar"
import Header from "../../components/Doctordashboard/Header"
import PatientDirectory from "../../components/patientrecords/PatientDirectory"
import PatientDetails from "../../components/patientrecords/PatientDetails"

interface Patient {
  id: string
  name: string
  patientId: string
  gender: string
  phone: string
  lastVisit: string
  prescriptions: number
}

const PatientRecordsContent = () => {
  const { isCollapsed } = useSidebar()
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null)

  const handlePatientSelect = (patient: Patient) => {
    setSelectedPatient(patient)
  }

  return (
    <div className="min-h-screen  bg-purple-50">
      <Sidebar />
      <Header />

      <main className={`pt-20 transition-all duration-300 ${isCollapsed ? "pl-20" : "pl-70"}`}>
        <div className="p-6">
          <div className="mb-6">
            <h1 style={{ color: "#29333D" }} className="text-2xl font-semibold mb-2">
              Patient Records
            </h1>
            <p style={{ color: "#29333D" }} className="opacity-70">
              Search and manage patient medical records
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <PatientDirectory onPatientSelect={handlePatientSelect} />
            </div>
            <div className="lg:col-span-1">
              <PatientDetails patient={selectedPatient} />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

const PatientRecords = () => {
  return (
    <SidebarProvider>
      <PatientRecordsContent />
    </SidebarProvider>
  )
}

export default PatientRecords
