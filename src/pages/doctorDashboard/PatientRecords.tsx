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
    <div className="min-h-screen bg-purple-50">
      <Sidebar />
      <Header
        title="Patient Records"
        subtitle="Search and manage patient medical records"
      />

      <main
        className={`transition-all duration-300 px-6 pt-24 pb-12 ${isCollapsed ? "ml-16" : "ml-64"}`}
      >
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="space-y-2">
            <h1 className="text-2xl font-semibold" style={{ color: "#29333D" }}>
              Patient Records
            </h1>
            <p style={{ color: "#29333D", opacity: 0.7 }}>
              Search and manage patient medical records
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
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