import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import QuickActions from "./QuickActions";
import RecentActivity from "./RecentActivity";
import SystemAlerts from "./SystemAlerts";

export default function DashboardLayout() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <main className="p-4 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <QuickActions />
            <RecentActivity />
          </div>
          <div className="space-y-6">
            <SystemAlerts />
          </div>
        </main>
      </div>
    </div>
  );
}