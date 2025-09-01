import NotificationItem from "./NotificationItem"

const NotificationsSection = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Recent Notifications</h3>
          <p className="text-gray-600">Latest updates and alerts</p>
        </div>
      </div>

      <div className="space-y-4">
        <NotificationItem
          message="Prescription #PRX-001 dispensed for John Doe"
          time="2 min ago"
          status="dispensed"
          statusColor="green"
        />

        <NotificationItem
          message="New patient registration: Sarah Wilson"
          time="15 min ago"
          status="pending"
          statusColor="orange"
        />

        <NotificationItem
          message="Prescription #PRX-045 expired"
          time="1 hour ago"
          status="expired"
          statusColor="red"
        />
      </div>

      <button className="w-full mt-4 py-2 text-sm text-blue-600 hover:text-blue-700 font-medium">
        View All Notifications
      </button>
    </div>
  )
}

export default NotificationsSection
