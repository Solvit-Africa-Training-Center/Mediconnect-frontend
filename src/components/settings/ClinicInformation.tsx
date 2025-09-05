import { useState } from "react"
import { Building2, Save } from "lucide-react"

const ClinicInformation = () => {
  const [clinicData, setClinicData] = useState({
    name: "City Medical Center",
    address: "123 Healthcare Ave, Medical District, NY 10001",
    phone: "+1 (555) 987-6543",
    email: "info@citymedical.com",
    license: "HC-987654321",
  })

  const handleInputChange = (field: string, value: string) => {
    setClinicData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSaveClinic = () => {
    console.log("Saving clinic changes:", clinicData)
  }

  return (
    <div style={{ backgroundColor: "#FFFFFF" }} className="p-6 rounded-xl shadow-sm">
      <div className="flex items-center gap-3 mb-6">
        <Building2 className="w-5 h-5" style={{ color: "#0C7AE9" }} />
        <div>
          <h3 className="text-lg font-semibold" style={{ color: "#131A20" }}>
            Clinic Information
          </h3>
          <p className="text-sm" style={{ color: "#29333D" }}>
            Manage your clinic or hospital details
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2" style={{ color: "#29333D" }}>
            Clinic/Hospital Name
          </label>
          <input
            type="text"
            value={clinicData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
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
            Address
          </label>
          <textarea
            value={clinicData.address}
            onChange={(e) => handleInputChange("address", e.target.value)}
            rows={2}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 resize-none"
            style={{
              backgroundColor: "#faf5ff",
              borderColor: "#D3D9DE",
              color: "#131A20",
            }}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2" style={{ color: "#29333D" }}>
              Phone Number
            </label>
            <input
              type="tel"
              value={clinicData.phone}
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
              Email Address
            </label>
            <input
              type="email"
              value={clinicData.email}
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

        <div>
          <label className="block text-sm font-medium mb-2" style={{ color: "#29333D" }}>
            Facility License
          </label>
          <input
            type="text"
            value={clinicData.license}
            onChange={(e) => handleInputChange("license", e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2"
            style={{
              backgroundColor: "#faf5ff",
              borderColor: "#D3D9DE",
              color: "#131A20",
            }}
          />
        </div>

       <button
  onClick={handleSaveClinic}
  className="w-full py-3 px-4 rounded-lg font-medium text-white transition-colors hover:opacity-90 flex items-center justify-center gap-2"
  style={{ backgroundColor: "#0C7AE9" }}
>
  <Save className="w-5 h-5" />
  <span>Save the Clinic Info Changes</span>
</button>

      </div>
    </div>
  )
}

export default ClinicInformation
