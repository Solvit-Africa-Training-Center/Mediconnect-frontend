import type React from "react"
import { Bell, FileText, CheckCircle, Calendar } from "lucide-react"

const PatientNotifications: React.FC = () => {
  const notifications = [
    {
      id: 1,
      type: "prescription",
      icon: FileText,
      title: "New Prescription Available",
      description: "Dr. KAGAME Jean Baptiste has created a new prescription (RX-2024-001)",
      time: "2 hours ago",
      actionLabel: "Prescription",
      actionColor: "bg-[#0C7AE9] text-white",
    },
    {
      id: 2,
      type: "dispensed",
      icon: CheckCircle,
      title: "Prescription Dispensed",
      description: "City Pharmacy has dispensed your prescription RX-2024-002",
      time: "1 day ago",
      actionLabel: "Pharmacy",
      actionColor: "bg-green-100 text-green-700",
    },
    {
      id: 3,
      type: "appointment",
      icon: Calendar,
      title: "Follow-up Appointment Reminder",
      description: "You have a follow-up appointment with Dr.MUKAMANA Alice tomorrow at 2:00 PM",
      time: "1 day ago",
      actionLabel: "reminder",
      actionColor: "bg-red-100 text-red-700",
    },
  ]

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex items-center gap-4 mb-6">
        <Bell className="w-5 h-5 text-[#0C7AE9]" />
        <h2 className="text-lg font-semibold text-[#29333D]">Notifications</h2>
        <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">1 New</span>
      </div>

      <div className="space-y-4">
        {notifications.map((notification) => {
          const IconComponent = notification.icon
          return (
            <div key={notification.id} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-2">
                <IconComponent className="w-4 h-4 text-[#0C7AE9]" />
                {notification.id === 1 && <div className="w-2 h-2 bg-[#0C7AE9] rounded-full"></div>}
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-[#29333D] mb-1">{notification.title}</h4>
                <p className="text-sm text-[#29333D] opacity-70 mb-2">{notification.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#29333D] opacity-50">{notification.time}</span>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${notification.actionColor}`}>
                    {notification.actionLabel}
                  </span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default PatientNotifications
