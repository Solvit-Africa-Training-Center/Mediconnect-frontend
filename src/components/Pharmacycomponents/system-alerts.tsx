import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, CheckCircle2, TrendingUp } from "lucide-react"

interface Alert {
  title: string
  message: string
  type: "warning" | "success" | "info"
  icon: typeof AlertTriangle
}

const alerts: Alert[] = [
  {
    title: "Low Stock Alert",
    message: "Paracetamol 500mg running low (12 units remaining)",
    type: "warning",
    icon: AlertTriangle,
  },
  {
    title: "System Update",
    message: "Database backup completed successfully",
    type: "success",
    icon: CheckCircle2,
  },
  {
    title: "Performance Report",
    message: "23% increase in prescription processing speed this week",
    type: "info",
    icon: TrendingUp,
  },
]

const alertStyles = {
  warning: {
    bg: "bg-yellow-50",
    border: "border-yellow-200",
    iconColor: "text-yellow-600",
  },
  success: {
    bg: "bg-green-50",
    border: "border-green-200",
    iconColor: "text-green-600",
  },
  info: {
    bg: "bg-blue-50",
    border: "border-blue-200",
    iconColor: "text-blue-600",
  },
}

export function SystemAlerts() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <AlertTriangle className="w-5 h-5 text-yellow-600" />
          System Alerts
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {alerts.map((alert, index) => {
            const Icon = alert.icon
            const styles = alertStyles[alert.type]

            return (
              <div key={index} className={`p-4 ${styles.bg} border ${styles.border} rounded-lg`}>
                <div className="flex items-start gap-3">
                  <Icon className={`w-5 h-5 ${styles.iconColor} mt-0.5`} />
                  <div>
                    <p className="text-sm font-medium text-gray-900">{alert.title}</p>
                    <p className="text-xs text-gray-600">{alert.message}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
