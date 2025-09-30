import PatientSearch from "../../components/createprescription/PatientSearch"
import DiagnosisNotes from "../../components/createprescription/DiagnosisNotes"
import PrescriptionMedicines from "../../components/createprescription/PrescriptionMedicines"
import PrescriptionActions from "../../components/createprescription/PrescriptionActions"
import PrescriptionSummary from "../../components/createprescription/PrescriptionSummary"
import Sidebar from "../../components/Doctordashboard/Sidebar"
import Header from "../../components/Doctordashboard/Header"
import { SidebarProvider, useSidebar } from "../../contexts/SidebarContext"
import { PrescriptionProvider } from "../../contexts/PrescriptionContext"

const CreatePrescriptionContent = () => {
  const { isCollapsed } = useSidebar()

  return (
    <div className="min-h-screen  bg-purple-50">
      <Sidebar />
      <Header />

      <main className={`transition-all duration-300 pt-20 p-6 ${isCollapsed ? "ml-16" : "ml-64"}`}>
        <div>
          <div>
            <h1 className="text-3xl font-semibold text-[#29333D]">Create New Prescription</h1>
            <p className="text-[#29333D] opacity-70 text-lg">Create and send prescriptions to patients</p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            <div className="xl:col-span-2">
              <PatientSearch />
              <DiagnosisNotes />
              <PrescriptionMedicines />
            </div>
            <div>
              <PrescriptionSummary />
            </div>
          </div>

          <PrescriptionActions />
        </div>
      </main>
    </div>
  )
}

const CreatePrescription = () => {
  return (
    <SidebarProvider>
      <PrescriptionProvider>
        <CreatePrescriptionContent />
      </PrescriptionProvider>
    </SidebarProvider>
  )
}

export default CreatePrescription
