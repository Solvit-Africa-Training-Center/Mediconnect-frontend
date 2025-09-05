import { Search } from "lucide-react"

const PrescriptionFilters = () => {
  return (
    <div style={{ backgroundColor: "#FFFFFF" }} className="p-6 rounded-xl shadow-sm">
      <div className="mb-4">
        <h3 className="text-lg font-semibold" style={{ color: "#131A20" }}>
          Filters
        </h3>
        <p className="text-sm" style={{ color: "#29333D" }}>
          Filter prescriptions by search, status, and date
        </p>
      </div>

      <div className="flex gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4" style={{ color: "#29333D" }} />
          <input
            type="text"
            placeholder="Search by patient name, prescription ID..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
            style={{
              borderColor: "#D3D9DE",
              backgroundColor: "#FFFFFF",
              color: "#131A20",
            }}
          />
        </div>

        <select
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
          style={{
            borderColor: "#D3D9DE",
            backgroundColor: "#FFFFFF",
            color: "#131A20",
          }}
        >
          <option>All Statuses</option>
          <option>Active</option>
          <option>Completed</option>
          <option>Cancelled</option>
        </select>

        <select
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
          style={{
            borderColor: "#D3D9DE",
            backgroundColor: "#FFFFFF",
            color: "#131A20",
          }}
        >
          <option>All Dates</option>
          <option>Last 7 days</option>
          <option>Last 30 days</option>
          <option>Last 90 days</option>
        </select>
      </div>
    </div>
  )
}

export default PrescriptionFilters
