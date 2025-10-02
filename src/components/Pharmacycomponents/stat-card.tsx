import { Card, CardContent } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"

interface StatCardProps {
  title: string
  value: string | number
  change: string
  changeType: "positive" | "negative"
  icon: LucideIcon
  iconColor: string
  iconBgColor: string
}

export function StatCard({ title, value, change, changeType, icon: Icon, iconColor, iconBgColor }: StatCardProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <p className="text-sm text-gray-600">{title}</p>
          <div className={`w-8 h-8 ${iconBgColor} rounded-lg flex items-center justify-center`}>
            <Icon className={`w-4 h-4 ${iconColor}`} />
          </div>
        </div>
        <p className="text-3xl font-semibold text-gray-900 mb-2">{value}</p>
        <p className={`text-sm ${changeType === "positive" ? "text-green-600" : "text-red-600"}`}>{change}</p>
      </CardContent>
    </Card>
  )
}
