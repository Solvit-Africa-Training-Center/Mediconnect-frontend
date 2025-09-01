import { useState } from "react"
import { User, Save } from "lucide-react"

const ProfileInformation = () => {
  const [profileData, setProfileData] = useState({
    fullName: "Dr. John Smith",
    email: "john.smith@hospital.com",
    phone: "+1 (555) 123-4567",
    medicalLicense: "MD-12345678",
    specialization: "Internal Medicine",
    bio: "Experienced physician with 15 years in internal medicine, specializing in chronic disease management and preventive care.",
  })

  const handleInputChange = (field: string, value: string) => {
    setProfileData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSaveProfile = () => {
    console.log("Saving profile changes:", profileData)
  }

  return (
    <div style={{ backgroundColor: "#FFFFFF" }} className="p-6 rounded-xl shadow-sm">
      <div className="flex items-center gap-3 mb-6">
        <User className="w-5 h-5" style={{ color: "#0C7AE9" }} />
        <div>
          <h3 className="text-lg font-semibold" style={{ color: "#131A20" }}>
            Profile Information
          </h3>
          <p className="text-sm" style={{ color: "#29333D" }}>
            Update your personal and professional information
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2" style={{ color: "#29333D" }}>
              Full Name
            </label>
            <input
              type="text"
              value={profileData.fullName}
              onChange={(e) => handleInputChange("fullName", e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2"
              style={{
                backgroundColor: "#faf5ff",
                borderColor: "#D3D9DE",
                color: "#131A20",
                focusRingColor: "#0C7AE9",
              }}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2" style={{ color: "#29333D" }}>
              Email Address
            </label>
            <input
              type="email"
              value={profileData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2"
              style={{
                backgroundColor: "#faf5ff",
                borderColor: "#D3D9DE",
                color: "#131A20",
              }}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2" style={{ color: "#29333D" }}>
              Phone Number
            </label>
            <input
              type="tel"
              value={profileData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2"
              style={{
                backgroundColor: "#faf5ff",
                borderColor: "#D3D9DE",
                color: "#131A20",
              }}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2" style={{ color: "#29333D" }}>
              Medical License
            </label>
            <input
              type="text"
              value={profileData.medicalLicense}
              onChange={(e) => handleInputChange("medicalLicense", e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2"
              style={{
                backgroundColor: "#faf5ff",
                borderColor: "#D3D9DE",
                color: "#131A20",
              }}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2" style={{ color: "#29333D" }}>
            Specialization
          </label>
          <input
            type="text"
            value={profileData.specialization}
            onChange={(e) => handleInputChange("specialization", e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2"
            style={{
              backgroundColor: "#faf5ff",
              borderColor: "#D3D9DE",
              color: "#131A20",
            }}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2" style={{ color: "#29333D" }}>
            Professional Bio
          </label>
          <textarea
            value={profileData.bio}
            onChange={(e) => handleInputChange("bio", e.target.value)}
            rows={3}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 resize-none"
            style={{
              backgroundColor: "#faf5ff",
              borderColor: "#D3D9DE",
              color: "#131A20",
            }}
          />
        </div>

       <button
  onClick={handleSaveProfile}
  className="w-full py-3 px-4 rounded-lg font-medium text-white transition-colors hover:opacity-90 flex items-center justify-center gap-2"
  style={{ backgroundColor: "#0C7AE9" }}
>
  <Save className="w-5 h-5" />
  <span>Save the Profile Changes</span>
</button>

      </div>
    </div>
  )
}

export default ProfileInformation
