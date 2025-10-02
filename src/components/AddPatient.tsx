import AddPatientForm from "./AddPatientForm"
import Sidebar from "./Doctordashboard/Sidebar"
import Header from "./Doctordashboard/Header"
import { SidebarProvider, useSidebar } from "../contexts/SidebarContext"

const AddPatientContent = () => {
  const { isCollapsed } = useSidebar()

  return (
    <div className="min-h-screen bg-purple-50">
      <Sidebar />
      <Header title="Add New Patient" subtitle="Register a new patient here" />

      <main
        className={`transition-all duration-300 px-6 pt-24 pb-12 ${isCollapsed ? "ml-16" : "ml-64"}`}
      >
        <div className="max-w-5xl mx-auto">
          <AddPatientForm />
        </div>
      </main>
    </div>
  )
}

const AddPatient = () => {
  return (
    <SidebarProvider>
      <AddPatientContent />
    </SidebarProvider>
  )
}

export default AddPatient