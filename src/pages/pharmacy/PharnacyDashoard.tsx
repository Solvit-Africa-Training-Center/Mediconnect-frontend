import StatsCard from "../../components/pharmacy/StatsCard";
import prescriptionIcon from "../../assets/prescriptionIcon.png";
import QuickActions from "../../components/pharmacy/QuickActions";
import RecentActivity from "../../components/pharmacy/RecentActivity";
import SystemAlerts from "../../components/pharmacy/SystemAlerts";
import pendingIcon from "../../assets/pendingIcon.png";
import dispensedIcon from "../../assets/dispensedIcon.png";
import Sidebar from "../../components/pharmacy/Sidebar";
export default function PharmacyDashboard() {
  return (

    <div className="space-y-6  flex">
      <Sidebar/>
      <div>
        <div>
          <h1 className="text-2xl font-semibold text-[#1F252E] mb-2">Dashboard</h1>
          
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <StatsCard
            title="Prescription Scanned Today"
            value={47}
            change="+12% from yesterday"
            icon={prescriptionIcon} // <-- image here
          />
          <StatsCard
            title="Pending Prescriptions"
            value={8}
            change="-3 from yesterday"
            icon={pendingIcon} // <-- image here
          />
          <StatsCard
            title="Dispensed Today"
            value={156}
            change="+18% today"
            icon={dispensedIcon} // <-- image here
          />
        </div>

        {/* Quick Actions */}
        <QuickActions />

        {/* Bottom section: Recent Activity + Alerts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <RecentActivity />
          <SystemAlerts />
        </div>
      </div>
    </div>
  );
}
