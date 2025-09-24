export default function QuickActions() {
  const quickActions = [
    { id: 1, label: "Scan Prescription", style: "bg-blue-500 text-white" },
    { id: 2, label: "Dispensed records", style: "bg-gray-100 text-gray-900" },
  ];

  return (
    <div className="bg-white p-4 rounded-2xl shadow-md">
      <h2 className="text-lg text-[#1F252E] mb-4">Quick Actions</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {quickActions.map((action) => (
          <button
            key={action.id}
            className={`py-9 rounded-xl shadow transition ${action.style}`}
          >
            {action.label}
          </button>
        ))}
      </div>
    </div>
  );
}