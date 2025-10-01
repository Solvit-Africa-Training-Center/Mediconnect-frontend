import Header from "../../components/Doctordashboard/Header";
import Sidebar from "../../components/Doctordashboard/Sidebar";
import PrescriptionTable from "../../components/prescriptionhistory/PrescriptionTable";
import PrescriptionFilters from "../../components/prescriptionhistory/PrescriptionFilters";
import { SidebarProvider, useSidebar } from "../../contexts/SidebarContext";

const PrescriptionHistoryContent = () => {
  const { isCollapsed } = useSidebar();

  return (
    <div className="min-h-screen bg-purple-50">
      <Sidebar />
      <Header />
      <main
        className={`transition-all duration-300 pt-20 p-6 ${
          isCollapsed ? "ml-16" : "ml-64"
        }`}
      >
        <div className="mb-6">
          <h1 className="text-3xl font-semibold text-[#29333D]">
            Prescription History
          </h1>
          <p className="text-[#29333D] opacity-70 text-lg">
            View and manage all prescriptions
          </p>
        </div>
        <div className="space-y-6">
          <PrescriptionFilters />
          <PrescriptionTable />
        </div>
      </main>
    </div>
  );
};

const PrescriptionHistory = () => (
  <SidebarProvider>
    <PrescriptionHistoryContent />
  </SidebarProvider>
);

export default PrescriptionHistory;