import { SidebarProvider, useSidebar } from "../../contexts/SidebarContext"
import Sidebar from "../../components/Doctordashboard/Sidebar"
import Header from "../../components/Doctordashboard/Header"
import PrescriptionHeader from "../../components/prescriptionhistory/PrescriptionHeader"
import PrescriptionFilters from "../../components/prescriptionhistory/PrescriptionFilters"
import PrescriptionTable from "../../components/prescriptionhistory/PrescriptionTable"

const PrescriptionHistoryContent = () => {
  const { isCollapsed } = useSidebar()

  return (
    <div className="min-h-screen  bg-purple-50">
      <Sidebar />
      <Header />

      <main className={`transition-all duration-300 pt-20 p-6 ${isCollapsed ? "pl-20" : "pl-70"}`}>
        <div className="space-y-6">
          <PrescriptionHeader />
          <PrescriptionFilters />
          <PrescriptionTable />
        </div>
      </main>
    </div>
  )
}

const PrescriptionHistory = () => {
  return (
    <SidebarProvider>
      <PrescriptionHistoryContent />
    </SidebarProvider>
  )
}

export default PrescriptionHistory
