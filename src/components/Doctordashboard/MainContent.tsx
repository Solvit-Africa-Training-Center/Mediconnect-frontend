import { Routes, Route } from "react-router-dom"
import DashboardContent from "./DashboardContent"
import CreatePrescription from "../../pages/CreatePrescription"
import PatientRecords from "../../pages/PatientRecords"
import PrescriptionHistory from "../../pages/PrescriptionHistory"
import Notifications from "../../pages/Notifications"
import Settings from "../../pages/Settings"
import { useSidebar } from "../../contexts/SidebarContext"

const MainContent = () => {
  const { isCollapsed } = useSidebar()

  return (
    <main
      className={`mt-20 p-6 bg-slate-100 min-h-screen transition-all duration-300 ${isCollapsed ? "ml-16" : "ml-64"}`}
    >
      <Routes>
        <Route path="/doctor-dashboard" element={<DashboardContent />} />
        <Route path="/create-prescription" element={<CreatePrescription />} />
        <Route path="/patient-records" element={<PatientRecords />} />
        <Route path="/prescription-history" element={<PrescriptionHistory />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<DashboardContent />} />
      </Routes>
    </main>
  )
}

export default MainContent
