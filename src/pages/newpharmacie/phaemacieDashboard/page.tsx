import { QrCode, Clock, CheckCircle2 } from "lucide-react"
import { Sidebar } from "@/components/Pharmacycomponents/sidebar"
import { StatCard } from "@/components/Pharmacycomponents/stat-card"
import { QuickActions } from "@/components/Pharmacycomponents/quick-actions"
import { RecentActivity } from "@/components/Pharmacycomponents/recent-activity"
import { SystemAlerts } from "@/components/Pharmacycomponents/system-alerts"
import { DashboardHeader } from "@/components/Pharmacycomponents/dashboard-header"

export default function PharmacyDashboard() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Header */}
        <DashboardHeader />

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatCard
            title="Prescription Scanned Today"
            value={47}
            change="+12% from yesterday"
            changeType="positive"
            icon={QrCode}
            iconColor="text-blue-600"
            iconBgColor="bg-blue-100"
          />
          <StatCard
            title="Pending Prescriptions"
            value={8}
            change="-3 from yesterday"
            changeType="negative"
            icon={Clock}
            iconColor="text-yellow-600"
            iconBgColor="bg-yellow-100"
          />
          <StatCard
            title="Dispensed Today"
            value={156}
            change="+18% today"
            changeType="positive"
            icon={CheckCircle2}
            iconColor="text-green-600"
            iconBgColor="bg-green-100"
          />
        </div>

        <div className="mb-8">
          <QuickActions />
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <RecentActivity />
          <SystemAlerts />
        </div>
      </main>
    </div>
  )
}
