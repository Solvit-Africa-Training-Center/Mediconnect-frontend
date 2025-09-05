import type { LucideIcon } from "lucide-react"

const TREND_COLORS = {
  green: "text-green-600",
  red: "text-red-600",
  orange: "text-orange-600",
  gray: "text-gray-500",
}

interface StatCardProps {
  title: string
  value: string | number
  subtitle: string
  icon: LucideIcon
  trend?: "up" | "down" | "neutral"
  trendColor?: keyof typeof TREND_COLORS
}

const StatCard = ({ title, value, subtitle, icon: Icon, trend, trendColor = "gray" }: StatCardProps) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-gray-600">{title}</h3>
        <Icon className="w-5 h-5 text-gray-400" />
      </div>
      <div className="flex items-end space-x-2">
        <span className="text-3xl font-bold text-gray-900">{value}</span>
        <span className={`text-sm ${TREND_COLORS[trendColor]} flex items-center`}>
          {trend === "up" && "↗ "}
          {subtitle}
        </span>
      </div>
    </div>
  )
}

export default StatCard
