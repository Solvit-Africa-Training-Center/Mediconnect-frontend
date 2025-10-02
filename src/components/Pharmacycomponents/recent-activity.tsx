import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp } from "lucide-react"

interface ActivityItem {
  name: string
  action: string
  time: string
  status: "success" | "warning" | "error"
}

const activities: ActivityItem[] = [
  {
    name: "Jean Baptiste Nkurunziza",
    action: "Prescription dispensed",
    time: "2 minutes ago",
    status: "success",
  },
  {
    name: "Marie Claire Uwimana",
    action: "New prescription scanned",
    time: "5 minutes ago",
    status: "warning",
  },
  {
    name: "David Mugisha",
    action: "Prescription rejected - Allergy alert",
    time: "12 minutes ago",
    status: "error",
  },
  {
    name: "Grace Mukamana",
    action: "Prescription dispensed",
    time: "18 minutes ago",
    status: "success",
  },
]

const statusColors = {
  success: "bg-green-500",
  warning: "bg-yellow-500",
  error: "bg-red-500",
}

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <TrendingUp className="w-5 h-5 text-green-600" />
          Recent Activity
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div key={index} className="flex items-start justify-between">
              <div className="flex items-start gap-3">
                <div className={`w-2 h-2 ${statusColors[activity.status]} rounded-full mt-2`} />
                <div>
                  <p className="text-sm font-medium text-gray-900">{activity.name}</p>
                  <p className="text-xs text-gray-500">{activity.action}</p>
                </div>
              </div>
              <span className="text-xs text-gray-400">{activity.time}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
