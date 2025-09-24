export default function RecentActivity() {
  const activities = [
    {
      id: 1,
      user: "Jean Baptiste Nkurunziza",
      action: "Prescription dispensed",
      timeAgo: "2 minutes ago",
      status: "success",
    },
    {
      id: 2,
      user: "Marie Claire Uwimana",
      action: "New prescription scanned",
      timeAgo: "5 minutes ago",
      status: "success",
    },
    {
      id: 3,
      user: "David Mugisha",
      action: "Prescription rejected - Allergy alert",
      timeAgo: "12 minutes ago",
      status: "error",
    },
    {
      id: 4,
      user: "Grace Mukamana",
      action: "Prescription dispensed",
      timeAgo: "18 minutes ago",
      status: "success",
    },
  ];

  return (
    <div className="bg-white p-4 rounded-2xl shadow-md">
      <h3 className="text-lg text-[#1F252E] mb-4">Recent Activity</h3>
      <ul className="space-y-3">
        {activities.map((act) => (
          <li
            key={act.id}
            className="flex justify-between items-center p-2 rounded hover:bg-gray-50"
          >
            <div>
              <h4 className="text-[#1F252E]">{act.user}</h4>
              <p className="text-sm text-gray-500">{act.action}</p>
            </div>
            <span
              className={`text-xs px-2 py-1 rounded-full ${
                act.status === "success"
                  ? "bg-green-100 text-green-600"
                  : "bg-red-100 text-red-600"
              }`}
            >
              {act.timeAgo}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}