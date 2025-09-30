import  AddPatientForm  from "./AddPatientForm"
import { useSidebar } from "../contexts/SidebarContext"
import Sidebar from "./Doctordashboard/Sidebar"
import Header from "./Doctordashboard/Header"

export default function AddPatient() {
  const { isCollapsed } = useSidebar()

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Header title="Add New Patient" subtitle="Register a new patient here" />
        {/* Main Content Area */}
        <main className={`flex-1 overflow-auto bg-purple-50 mt-20 transition-all duration-300 ${isCollapsed ? "ml-16" : "ml-64"}`}>
          <AddPatientForm />
        </main>
      </div>
    </div>
  )
}