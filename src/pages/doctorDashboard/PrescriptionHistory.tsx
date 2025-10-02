import Header from "../../components/Doctordashboard/Header"
import Sidebar from "../../components/Doctordashboard/Sidebar"
import PrescriptionTable from "../../components/prescriptionhistory/PrescriptionTable"
import PrescriptionFilters from "../../components/prescriptionhistory/PrescriptionFilters"
import { SidebarProvider, useSidebar } from "../../contexts/SidebarContext"

const PrescriptionHistoryContent = () => {
  const { isCollapsed } = useSidebar()

  return (
    <div className="min-h-screen bg-purple-50">
      <Sidebar />
      <Header
        title="Prescription History"
        subtitle="View and manage all prescriptions"
      />

      <main
        className={`transition-all duration-300 px-6 pt-24 pb-12 ${isCollapsed ? "ml-16" : "ml-64"}`}
      >
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="space-y-2">
            <h1 className="text-3xl font-semibold" style={{ color: "#29333D" }}>
              Prescription History
            </h1>
            <p className="text-lg" style={{ color: "#29333D", opacity: 0.7 }}>
              View and manage all prescriptions
            </p>
          </div>

          <div className="space-y-6">
            <PrescriptionFilters />
            <PrescriptionTable />
          </div>
        </div>
      </main>
    </div>
  )
}

const PrescriptionHistory = () => (
  <SidebarProvider>
    <PrescriptionHistoryContent />
  </SidebarProvider>
)

export default PrescriptionHistory