import PatientSearch from "../../components/createprescription/PatientSearch"
import DiagnosisNotes from "../../components/createprescription/DiagnosisNotes"
import PrescriptionMedicines from "../../components/createprescription/PrescriptionMedicines"
import PrescriptionActions from "../../components/createprescription/PrescriptionActions"
import Sidebar from "../../components/Doctordashboard/Sidebar"
import Header from "../../components/Doctordashboard/Header"
import { SidebarProvider, useSidebar } from "../../contexts/SidebarContext"

const CreatePrescriptionContent = () => {
  const { isCollapsed } = useSidebar()

  return (
    <div className="min-h-screen  bg-purple-50">
      <Sidebar />
      <Header />

      <main className={`transition-all duration-300 pt-20 p-6 ${isCollapsed ? "pl-20" : "pl-70"}`}>
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="mb-8">
            <h1 className="text-3xl font-semibold text-[#29333D] mb-2">Create New Prescription</h1>
            <p className="text-[#29333D] opacity-70 text-lg">Create and send prescriptions to patients</p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6">
            <PatientSearch />
            <DiagnosisNotes />
          </div>

          <div className="mb-6">
            <PrescriptionMedicines />
          </div>

          <PrescriptionActions medicineCount={1} />
        </div>
      </main>
    </div>
  )
}

const CreatePrescription = () => {
  return (
    <SidebarProvider>
      <CreatePrescriptionContent />
    </SidebarProvider>
  )
}

export default CreatePrescription
