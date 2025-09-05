import type React from "react"
import { User, Calendar, Mail, Phone, Shield } from "lucide-react"

const ProfileOverview: React.FC = () => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex items-center gap-4 mb-6">
        <User className="w-5 h-5 text-[#0C7AE9]" />
        <h2 className="text-lg font-semibold text-[#29333D]">Profile Overview</h2>
      </div>

      <div className="flex items-center gap-4 mb-6">
        <div className="w-16 h-16 bg-[#0C7AE9] rounded-full flex items-center justify-center text-white font-semibold text-xl">
          RM
        </div>
        <div>
          <h3 className="font-semibold text-[#29333D] text-lg">Raissa Micheline IMPUHWE MANZI</h3>
          <span className="text-xs bg-[#D3D9DE] px-2 py-1 rounded text-[#29333D]">REF: RW-PAT-2024-001567</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-[#29333D]" />
          <div>
            <p className="text-sm text-[#29333D] opacity-70">Date of Birth</p>
            <p className="text-sm font-medium text-[#29333D]">1985-03-15</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Mail className="w-4 h-4 text-[#29333D]" />
          <div>
            <p className="text-sm text-[#29333D] opacity-70">Email</p>
            <p className="text-sm font-medium text-[#29333D]">raissamich12@gmail.com</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4 text-[#29333D]" />
          <div>
            <p className="text-sm text-[#29333D] opacity-70">Insurance</p>
            <p className="text-sm font-medium text-[#29333D]">RSSB - Community Based Health Insurance</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Phone className="w-4 h-4 text-[#29333D]" />
          <div>
            <p className="text-sm text-[#29333D] opacity-70">Phone</p>
            <p className="text-sm font-medium text-[#29333D]">+250 788 123 456</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileOverview
