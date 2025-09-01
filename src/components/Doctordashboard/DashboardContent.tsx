import { Plus } from "lucide-react"
import StatsGrid from "./StatsGrid"
import QuickActionsSection from "./QuickActionsSection"
import NotificationsSection from "./NotificationsSection"

const DashboardContent = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Dashboard Overview</h2>
          <p className="text-gray-600">Welcome back, Dr. Smith. Here's your practice summary.</p>
        </div>
        <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          <Plus className="w-4 h-4" />
          <span>Create prescription</span>
        </button>
      </div>

      <StatsGrid />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <QuickActionsSection />
        <NotificationsSection />
      </div>
    </div>
  )
}

export default DashboardContent
