import PatientSearch from "../../components/createprescription/PatientSearch"
import DiagnosisAndInstructions from "../../components/createprescription/DiagnosisAndInstructions"
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
    <div className="min-h-screen bg-purple-50">
      <Sidebar />
      <Header title="Create Prescription" subtitle="Create and send prescriptions to patients" />

      <main
        className={`transition-all duration-300 px-6 pt-24 pb-12 ${isCollapsed ? "ml-16" : "ml-64"}`}
      >
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="space-y-2">
            <h1 className="text-3xl font-semibold" style={{ color: "#29333D" }}>
              Create New Prescription
            </h1>
            <p className="text-lg" style={{ color: "#29333D", opacity: 0.7 }}>
              Create and send prescriptions to patients
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
            <div className="space-y-6 xl:col-span-2">
              <PatientSearch />
              <DiagnosisAndInstructions />
              <PrescriptionMedicines />
            </div>
            <div className="relative">
              <div className="sticky top-24 space-y-6">
                <PrescriptionSummary />
              </div>
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