const STATUS_COLORS = {
  green: { bg: "bg-green-100", text: "text-green-800", dot: "bg-green-500" },
  orange: { bg: "bg-orange-100", text: "text-orange-800", dot: "bg-orange-500" },
  red: { bg: "bg-red-100", text: "text-red-800", dot: "bg-red-500" },
}

interface NotificationItemProps {
  message: string
  time: string
  status: "dispensed" | "pending" | "expired"
  statusColor: keyof typeof STATUS_COLORS
}

const NotificationItem = ({ message, time, status, statusColor }: NotificationItemProps) => {
  const colors = STATUS_COLORS[statusColor]

  return (
    <div className="flex items-start space-x-3">
      <div className={`w-2 h-2 ${colors.dot} rounded-full mt-2`}></div>
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-gray-900">{message}</p>
          <span className={`px-2 py-1 ${colors.bg} ${colors.text} text-xs rounded-full`}>{status}</span>
        </div>
        <p className="text-xs text-gray-500 mt-1">{time}</p>
      </div>
    </div>
  )
}

export default NotificationItem
