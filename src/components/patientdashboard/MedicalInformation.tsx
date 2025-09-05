import type React from "react"
import { Heart, AlertTriangle } from "lucide-react"

const MedicalInformation: React.FC = () => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex items-center gap-4 mb-6">
        <Heart className="w-5 h-5 text-green-500" />
        <h2 className="text-lg font-semibold text-[#29333D]">Medical Information</h2>
        <span className="ml-auto text-xs bg-[#D3D9DE] px-2 py-1 rounded text-[#29333D]">Doctor Editable Only</span>
      </div>

      {/* Chronic Diseases */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-3">
          <Heart className="w-4 h-4 text-green-500" />
          <h3 className="font-medium text-[#29333D]">Chronic Diseases</h3>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div>
              <p className="font-medium text-[#29333D]">Type 2 Diabetes</p>
              <div className="flex items-center gap-2 mt-1">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-[#29333D] opacity-70">Well controlled</span>
              </div>
            </div>
            <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium">Moderate</span>
          </div>

          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div>
              <p className="font-medium text-[#29333D]">Hypertension</p>
              <div className="flex items-center gap-2 mt-1">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-[#29333D] opacity-70">Well controlled</span>
              </div>
            </div>
            <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium">Mild</span>
          </div>
        </div>
      </div>

      {/* Allergies & Reactions */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <AlertTriangle className="w-4 h-4 text-red-500" />
          <h3 className="font-medium text-[#29333D]">Allergies & Reactions</h3>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
            <div className="flex items-center gap-2">
              <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">Medicine</span>
              <span className="font-medium text-[#29333D]">Penicillin</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-[#29333D] opacity-70">Skin rash</span>
              <AlertTriangle className="w-4 h-4 text-red-500" />
            </div>
          </div>

          <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
            <div className="flex items-center gap-2">
              <span className="bg-orange-500 text-white px-2 py-1 rounded text-xs font-medium">Food</span>
              <span className="font-medium text-[#29333D]">Shellfish</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-[#29333D] opacity-70">Breathing difficulties</span>
              <AlertTriangle className="w-4 h-4 text-red-500" />
            </div>
          </div>

          <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
            <div className="flex items-center gap-2">
              <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">Medicine</span>
              <span className="font-medium text-[#29333D]">Naproxen</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-[#29333D] opacity-70">Asthma flare</span>
              <AlertTriangle className="w-4 h-4 text-red-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MedicalInformation
