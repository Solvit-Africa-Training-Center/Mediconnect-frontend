import { Search } from "lucide-react";

const PrescriptionFilters = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        {/* Left side: Title and Filters */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-[#131A20] mb-2">
            Filters
          </h3>
          <p className="text-sm text-[#29333D] mb-4">
            Filter prescriptions by search, status, and date
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative md:col-span-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search by patient name, prescription ID..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-purple-50"
              />
            </div>
            <select className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-purple-50">
              <option>All Statuses</option>
            </select>
            <select className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-purple-50">
              <option>All Dates</option>
            </select>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PrescriptionFilters;