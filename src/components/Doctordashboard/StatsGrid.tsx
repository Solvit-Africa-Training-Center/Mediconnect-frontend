import { FileText, Clock, Users } from "lucide-react"
import StatCard from "./StatCard"
import { useGetPatientsQuery } from "../../Back-end/patient/patientApi"

const StatsGrid = () => {
  const { data: totalPatients, isLoading } = useGetPatientsQuery()

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      <StatCard
        title="Today's Prescriptions"
        value={24}
        subtitle="+3 from yesterday"
        icon={FileText}
        trend="up"
        trendColor="green"
      />

      <StatCard 
        title="Pending Prescriptions" 
        value={8} 
        subtitle="Awaiting dispensing" 
        icon={Clock} 
        trendColor="gray" 
      />

      <StatCard
        title="Total Patients"
        value={isLoading ? "..." : totalPatients?.total ?? 0}
        subtitle="+12 this week"
        icon={Users}
        trend="up"
        trendColor="green"
      />
    </div>
  )
}

export default StatsGrid
