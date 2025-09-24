import lowStock from "../../assets/lowStock.png";
import lowStock2 from "../../assets/lowStock2.png";
import systemUpdate from "../../assets/systemUpdate.png";
import performance from "../../assets/performance.png";

export default function SystemAlerts() {
  const alerts = [
    {
      id: 1,
      type: "low-stock",
      message: "Low Stock Alert",
      details: "Paracetamol 500mg running low (12 units remaining)",
    },
    {
      id: 2,
      type: "system",
      message: "System Update",
      details: "Database backup completed successfully",
    },
    {
      id: 3,
      type: "performance",
      message: "Performance Report",
      details: "23% increase in prescription processing speed this week",
    },
  ];

  return (
    <div className="bg-white p-4 rounded-2xl shadow-md">
      <h2 className="text-lg text-[#1F252E] mb-4 flex items-center gap-2">
        <img src={lowStock2} alt="Alerts" className="w-5 h-5" />
        System Alerts
      </h2>
      <ul className="space-y-3">
        {alerts.map((alert) => {
          const icon =
            alert.type === "low-stock"
              ? lowStock
              : alert.type === "system"
              ? systemUpdate
              : performance;

          return (
            <li
              key={alert.id}
              className={`flex items-start gap-3 p-3 rounded-lg border ${
                alert.type === "low-stock"
                  ? "bg-yellow-50 border-yellow-200"
                  : alert.type === "system"
                  ? "bg-green-50 border-green-200"
                  : "bg-blue-50 border-blue-200"
              }`}
            >
              <img src={icon} alt={alert.type} className="w-6 h-6 mt-1" />
              <div>
                <p className="text-[#1F252E] font-medium">{alert.message}</p>
                <p className="text-sm text-gray-600">{alert.details}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}