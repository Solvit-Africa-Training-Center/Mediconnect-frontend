import type React from "react"
import { Calendar, FileText, Clock, AlertCircle } from "lucide-react"

const PatientDashboardContent: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-[#29333D] mb-2">Welcome back, John!</h2>
        <p className="text-gray-600">Here's an overview of your health information and upcoming appointments.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Next Appointment</p>
              <p className="text-2xl font-bold text-[#29333D]">Jan 25</p>
              <p className="text-sm text-gray-500">Dr. Smith - 2:00 PM</p>
            </div>
            <Calendar className="w-8 h-8 text-teal-500" />
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Prescriptions</p>
              <p className="text-2xl font-bold text-[#29333D]">3</p>
              <p className="text-sm text-green-600">All up to date</p>
            </div>
            <FileText className="w-8 h-8 text-teal-500" />
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Last Visit</p>
              <p className="text-2xl font-bold text-[#29333D]">Jan 15</p>
              <p className="text-sm text-gray-500">General checkup</p>
            </div>
            <Clock className="w-8 h-8 text-teal-500" />
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Health Alerts</p>
              <p className="text-2xl font-bold text-[#29333D]">1</p>
              <p className="text-sm text-orange-600">Requires attention</p>
            </div>
            <AlertCircle className="w-8 h-8 text-orange-500" />
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-[#29333D] mb-4">Recent Prescriptions</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-[#29333D]">Paracetamol 500mg</p>
                <p className="text-sm text-gray-600">Prescribed on Jan 15, 2024</p>
              </div>
              <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Active</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-[#29333D]">Amoxicillin 250mg</p>
                <p className="text-sm text-gray-600">Prescribed on Jan 10, 2024</p>
              </div>
              <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Active</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-[#29333D] mb-4">Upcoming Appointments</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-[#29333D]">Dr. Sarah Smith</p>
                <p className="text-sm text-gray-600">Jan 25, 2024 at 2:00 PM</p>
                <p className="text-xs text-gray-500">General Consultation</p>
              </div>
              <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Confirmed</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-[#29333D]">Dr. Michael Brown</p>
                <p className="text-sm text-gray-600">Feb 2, 2024 at 10:30 AM</p>
                <p className="text-xs text-gray-500">Follow-up</p>
              </div>
              <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">Pending</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PatientDashboardContent
