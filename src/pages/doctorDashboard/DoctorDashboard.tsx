import Sidebar from "../../components/Doctordashboard/Sidebar"
import Header from "../../components/Doctordashboard/Header"
import MainContent from "../../components/Doctordashboard/MainContent"
import { SidebarProvider } from "../../contexts/SidebarContext"

const DoctorDashboard = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen bg-gray-100">
        <Sidebar />
        <Header />
        <MainContent />
      </div>
    </SidebarProvider>
  )
}

export default DoctorDashboard
