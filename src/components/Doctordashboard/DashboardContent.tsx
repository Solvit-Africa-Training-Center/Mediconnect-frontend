import { Plus } from "lucide-react"
import StatsGrid from "./StatsGrid"
import QuickActionsSection from "./QuickActionsSection"
import { Link } from "react-router-dom"
import { useGetProfileQuery } from "../../Back-end/authentication/authenticationApi"

const DashboardContent = () => {

  const {data:profile, isLoading, isError} = useGetProfileQuery()
  if (isLoading) return <p>Loading dashboard...</p>;
  if (isError) return <p>Failed to load profile.</p>;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Dashboard Overview</h2>
        <p className="text-gray-600">
          Welcome back, {profile?.fullName}. Here's your practice summary.
        </p>

        </div>
        <Link to="add-patient" className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          <Plus className="w-4 h-4" />
          <span>Add New Patient</span>
        </Link>
      </div>

      <StatsGrid />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <QuickActionsSection />

      </div>
    </div>
  )
}

export default DashboardContent
