import { useState } from "react"
import { Shield, Mail, MessageSquare, Bell, Key, Save } from "lucide-react"

const SecurityPrivacy = () => {
  const [securitySettings, setSecuritySettings] = useState({
    twoFactorAuth: true,
    emailNotifications: true,
    smsNotifications: false,
    prescriptionAlerts: true,
    systemUpdates: true,
  })

  const [passwords, setPasswords] = useState({
    current: "",
    new: "",
  })

  const handleToggle = (setting: string) => {
    setSecuritySettings((prev) => ({ ...prev, [setting]: !prev[setting as keyof typeof prev] }))
  }

  const handlePasswordChange = (field: string, value: string) => {
    setPasswords((prev) => ({ ...prev, [field]: value }))
  }

  const handleSaveSecurity = () => {
    console.log("Saving security settings:", securitySettings, passwords)
  }

  const ToggleSwitch = ({ enabled, onToggle }: { enabled: boolean; onToggle: () => void }) => (
    <button
      onClick={onToggle}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
        enabled ? "bg-blue-600" : "bg-gray-300"
      }`}
      style={{ backgroundColor: enabled ? "#0C7AE9" : "#D3D9DE" }}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
          enabled ? "translate-x-6" : "translate-x-1"
        }`}
      />
    </button>
  )

  return (
    <div style={{ backgroundColor: "#FFFFFF" }} className="p-6 rounded-xl shadow-sm">
      <div className="flex items-center gap-3 mb-6">
        <Shield className="w-5 h-5" style={{ color: "#0C7AE9" }} />
        <div>
          <h3 className="text-lg font-semibold" style={{ color: "#131A20" }}>
            Security & Privacy
          </h3>
          <p className="text-sm" style={{ color: "#29333D" }}>
            Manage your account security and notification preferences
          </p>
        </div>
      </div>

      <div className="space-y-6">
        {/* Two-Factor Authentication */}
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center gap-3">
            <Key className="w-4 h-4" style={{ color: "#0C7AE9" }} />
            <div>
              <h4 className="font-medium" style={{ color: "#131A20" }}>
                Two-Factor Authentication
              </h4>
              <p className="text-sm" style={{ color: "#29333D" }}>
                Add an extra layer of security to your account
              </p>
            </div>
          </div>
          <ToggleSwitch enabled={securitySettings.twoFactorAuth} onToggle={() => handleToggle("twoFactorAuth")} />
        </div>

        {/* Notification Preferences */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Bell className="w-4 h-4" style={{ color: "#0C7AE9" }} />
            <h4 className="font-medium" style={{ color: "#131A20" }}>
              Notification Preferences
            </h4>
          </div>

          <div className="space-y-4 ml-7">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4" style={{ color: "#29333D" }} />
                <div>
                  <p className="font-medium" style={{ color: "#131A20" }}>
                    Email Notifications
                  </p>
                  <p className="text-sm" style={{ color: "#29333D" }}>
                    Receive notifications via email
                  </p>
                </div>
              </div>
              <ToggleSwitch
                enabled={securitySettings.emailNotifications}
                onToggle={() => handleToggle("emailNotifications")}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <MessageSquare className="w-4 h-4" style={{ color: "#29333D" }} />
                <div>
                  <p className="font-medium" style={{ color: "#131A20" }}>
                    SMS Notifications
                  </p>
                  <p className="text-sm" style={{ color: "#29333D" }}>
                    Receive urgent notifications via SMS
                  </p>
                </div>
              </div>
              <ToggleSwitch
                enabled={securitySettings.smsNotifications}
                onToggle={() => handleToggle("smsNotifications")}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium" style={{ color: "#131A20" }}>
                  Prescription Alerts
                </p>
                <p className="text-sm" style={{ color: "#29333D" }}>
                  Get notified when prescriptions are dispensed or rejected
                </p>
              </div>
              <ToggleSwitch
                enabled={securitySettings.prescriptionAlerts}
                onToggle={() => handleToggle("prescriptionAlerts")}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium" style={{ color: "#131A20" }}>
                  System Updates
                </p>
                <p className="text-sm" style={{ color: "#29333D" }}>
                  Receive notifications about system maintenance and updates
                </p>
              </div>
              <ToggleSwitch enabled={securitySettings.systemUpdates} onToggle={() => handleToggle("systemUpdates")} />
            </div>
          </div>
        </div>

        {/* Change Password */}
        <div>
          <h4 className="font-medium mb-4" style={{ color: "#131A20" }}>
            Change Password
          </h4>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: "#29333D" }}>
                Current Password
              </label>
              <input
                type="password"
                value={passwords.current}
                onChange={(e) => handlePasswordChange("current", e.target.value)}
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
                New Password
              </label>
              <input
                type="password"
                value={passwords.new}
                onChange={(e) => handlePasswordChange("new", e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2"
                style={{
                  backgroundColor: "#faf5ff",
                  borderColor: "#D3D9DE",
                  color: "#131A20",
                }}
              />
            </div>
          </div>

          <button
            className="mt-4 py-2 px-4 rounded-lg font-medium transition-colors hover:opacity-90"
            style={{ backgroundColor: "#faf5ff", color: "#29333D" }}
          >
            🔑 Update Password
          </button>
        </div>

        <button
  onClick={handleSaveSecurity}
  className="w-full py-3 px-4 rounded-lg font-medium text-white transition-colors hover:opacity-90 flex items-center justify-center gap-2"
  style={{ backgroundColor: "#0C7AE9" }}
>
  <Save className="w-5 h-5" />
  <span>Save Security Settings</span>
</button>

      </div>
    </div>
  )
}

export default SecurityPrivacy
