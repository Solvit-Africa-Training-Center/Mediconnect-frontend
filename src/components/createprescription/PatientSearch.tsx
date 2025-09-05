import { Search } from "lucide-react"

const PatientSearch = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h3 className="text-lg font-semibold text-[#29333D] mb-2">Patient Information</h3>
      <p className="text-[#29333D] opacity-70 mb-4">Search for patient by ID</p>

      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Enter Patient ID (e.g., PAT-001)"
          className="flex-1 px-4 py-2 border border-[#D3D9DE] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0C7AE9] focus:border-transparent"
        />
        <button className="bg-[#0C7AE9] hover:bg-[#116FD4] text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
          <Search size={18} />
        </button>
      </div>
    </div>
  )
}

export default PatientSearch
