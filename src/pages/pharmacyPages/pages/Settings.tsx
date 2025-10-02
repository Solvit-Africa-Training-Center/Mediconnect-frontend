import React, { useState } from 'react'
import { Bell, Shield, Settings as SettingsIcon, Database, Download, RotateCcw } from 'lucide-react'
import ToggleSwitch from '@/components/pharmacy/ToggleSwitch'

const Settings: React.FC = () => {
  // Pharmacy Profile State
  const [pharmacyProfile, setPharmacyProfile] = useState({
    name: 'PharmaCare Rwanda',
    licenseNumber: 'PH-RW-2023-0145',
    phoneNumber: '+250 788 555 1234',
    emailAddress: 'contact@pharmacare.rw',
    address: 'KN 15 Ave, Kigali Heights, Kinyinya, Gasabo District, Kigali, Rwanda'
  })

  // Pharmacist Information State
  const [pharmacistInfo, setPharmacistInfo] = useState({
    fullName: 'Dr. Marie Uwimana',
    licenseNumber: 'MD-RW-2019-0789',
    phoneNumber: '+250 788 987 6543',
    emailAddress: 'marie.uwimana@pharmacare.rw'
  })

  // Security Settings State
  const [securitySettings, setSecuritySettings] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    twoFactorAuth: true,
    sessionTimeout: true,
    loginAlerts: true
  })

  // System Preferences State
  const [systemPreferences, setSystemPreferences] = useState({
    autoRefreshDashboard: true,
    soundAlerts: true,
    compactView: false,
    advancedMode: false
  })

  // Data Management State
  const [dataManagement, setDataManagement] = useState({
    automaticBackup: true,
    dataRetention: true
  })

  const handleSaveChanges = () => {
    alert('Settings saved successfully!')
  }

  const handleCancel = () => {
    alert('Changes cancelled')
  }

  const handleExportData = () => {
    alert('Exporting data...')
  }

  const handleSyncNow = () => {
    alert('Syncing data...')
  }

  const inputClass =
    'w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500'

  const cardClass = 'bg-white shadow rounded-lg p-6'

  const btnPrimary = 'bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition'
  const btnSecondary =
    'bg-gray-200 text-gray-900 px-4 py-2 rounded-md hover:bg-gray-300 transition flex items-center gap-2'

  return (
    <div className="space-y-6">
      {/* Pharmacy Profile */}
      <div className={cardClass}>
        <div className="flex items-center gap-2 mb-6">
          <div className="p-1 bg-blue-50 rounded">
            <SettingsIcon size={16} className="text-blue-600" />
          </div>
          <h2 className="text-lg font-semibold text-gray-900">Pharmacy Profile</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Pharmacy Name</label>
            <input
              type="text"
              value={pharmacyProfile.name}
              onChange={(e) => setPharmacyProfile({ ...pharmacyProfile, name: e.target.value })}
              className={inputClass}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">License Number</label>
            <input
              type="text"
              value={pharmacyProfile.licenseNumber}
              onChange={(e) =>
                setPharmacyProfile({ ...pharmacyProfile, licenseNumber: e.target.value })
              }
              className={inputClass}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
            <input
              type="tel"
              value={pharmacyProfile.phoneNumber}
              onChange={(e) =>
                setPharmacyProfile({ ...pharmacyProfile, phoneNumber: e.target.value })
              }
              className={inputClass}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
            <input
              type="email"
              value={pharmacyProfile.emailAddress}
              onChange={(e) =>
                setPharmacyProfile({ ...pharmacyProfile, emailAddress: e.target.value })
              }
              className={inputClass}
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
            <textarea
              value={pharmacyProfile.address}
              onChange={(e) =>
                setPharmacyProfile({ ...pharmacyProfile, address: e.target.value })
              }
              rows={3}
              className={inputClass}
            />
          </div>
        </div>
      </div>

      {/* Pharmacist Information */}
      <div className={cardClass}>
        <div className="flex items-center gap-2 mb-6">
          <div className="p-1 bg-green-50 rounded">
            <div className="w-4 h-4 bg-green-600 rounded-full"></div>
          </div>
          <h2 className="text-lg font-semibold text-gray-900">Pharmacist Information</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
            <input
              type="text"
              value={pharmacistInfo.fullName}
              onChange={(e) =>
                setPharmacistInfo({ ...pharmacistInfo, fullName: e.target.value })
              }
              className={inputClass}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">License Number</label>
            <input
              type="text"
              value={pharmacistInfo.licenseNumber}
              onChange={(e) =>
                setPharmacistInfo({ ...pharmacistInfo, licenseNumber: e.target.value })
              }
              className={inputClass}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
            <input
              type="tel"
              value={pharmacistInfo.phoneNumber}
              onChange={(e) =>
                setPharmacistInfo({ ...pharmacistInfo, phoneNumber: e.target.value })
              }
              className={inputClass}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
            <input
              type="email"
              value={pharmacistInfo.emailAddress}
              onChange={(e) =>
                setPharmacistInfo({ ...pharmacistInfo, emailAddress: e.target.value })
              }
              className={inputClass}
            />
          </div>
        </div>
      </div>

      {/* Security Settings */}
      <div className={cardClass}>
        <div className="flex items-center gap-2 mb-6">
          <div className="p-1 bg-yellow-50 rounded">
            <Shield size={16} className="text-yellow-600" />
          </div>
          <h2 className="text-lg font-semibold text-gray-900">Security Settings</h2>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
              <input
                type="password"
                value={securitySettings.currentPassword}
                onChange={(e) =>
                  setSecuritySettings({ ...securitySettings, currentPassword: e.target.value })
                }
                placeholder="Enter current password"
                className={inputClass}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
              <input
                type="password"
                value={securitySettings.newPassword}
                onChange={(e) =>
                  setSecuritySettings({ ...securitySettings, newPassword: e.target.value })
                }
                placeholder="Enter new password"
                className={inputClass}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Confirm New Password
              </label>
              <input
                type="password"
                value={securitySettings.confirmPassword}
                onChange={(e) =>
                  setSecuritySettings({ ...securitySettings, confirmPassword: e.target.value })
                }
                placeholder="Confirm new password"
                className={inputClass}
              />
            </div>
          </div>

          <div className="border-t pt-6">
            <h3 className="text-sm font-medium text-gray-900 mb-4">Security Options</h3>
            <div className="space-y-4">
              <ToggleSwitch
                enabled={securitySettings.twoFactorAuth}
                onChange={(enabled) =>
                  setSecuritySettings({ ...securitySettings, twoFactorAuth: enabled })
                }
                label="Two Factor Authentication"
                description="Add an extra layer of security to your account"
              />
              <ToggleSwitch
                enabled={securitySettings.sessionTimeout}
                onChange={(enabled) =>
                  setSecuritySettings({ ...securitySettings, sessionTimeout: enabled })
                }
                label="Session Timeout"
                description="Automatically log out after 30 minutes of inactivity"
              />
              <ToggleSwitch
                enabled={securitySettings.loginAlerts}
                onChange={(enabled) =>
                  setSecuritySettings({ ...securitySettings, loginAlerts: enabled })
                }
                label="Login Alerts"
                description="Get notified of new login attempts"
              />
            </div>
          </div>
        </div>
      </div>

      {/* System Preferences */}
      <div className={cardClass}>
        <div className="flex items-center gap-2 mb-6">
          <div className="p-1 bg-blue-50 rounded">
            <SettingsIcon size={16} className="text-blue-600" />
          </div>
          <h2 className="text-lg font-semibold text-gray-900">System Preferences</h2>
        </div>

        <div className="space-y-4">
          <ToggleSwitch
            enabled={systemPreferences.autoRefreshDashboard}
            onChange={(enabled) =>
              setSystemPreferences({ ...systemPreferences, autoRefreshDashboard: enabled })
            }
            label="Auto-refresh Dashboard"
            description="Automatically refresh data every 5 minutes"
          />
          <ToggleSwitch
            enabled={systemPreferences.soundAlerts}
            onChange={(enabled) =>
              setSystemPreferences({ ...systemPreferences, soundAlerts: enabled })
            }
            label="Sound Alerts"
            description="Play sounds for notifications and alerts"
          />
          <ToggleSwitch
            enabled={systemPreferences.compactView}
            onChange={(enabled) =>
              setSystemPreferences({ ...systemPreferences, compactView: enabled })
            }
            label="Compact View"
            description="Use compact layout for tables and lists"
          />
          <ToggleSwitch
            enabled={systemPreferences.advancedMode}
            onChange={(enabled) =>
              setSystemPreferences({ ...systemPreferences, advancedMode: enabled })
            }
            label="Advanced Mode"
            description="Show additional technical information"
          />
        </div>
      </div>

      {/* Data Management */}
      <div className={cardClass}>
        <div className="flex items-center gap-2 mb-6">
          <div className="p-1 bg-yellow-50 rounded">
            <Database size={16} className="text-yellow-600" />
          </div>
          <h2 className="text-lg font-semibold text-gray-900">Data Management</h2>
        </div>

        <div className="space-y-6">
          <div className="space-y-4">
            <ToggleSwitch
              enabled={dataManagement.automaticBackup}
              onChange={(enabled) =>
                setDataManagement({ ...dataManagement, automaticBackup: enabled })
              }
              label="Automatic Backup"
              description="Backup data daily at 3:00 AM"
            />
            <ToggleSwitch
              enabled={dataManagement.dataRetention}
              onChange={(enabled) =>
                setDataManagement({ ...dataManagement, dataRetention: enabled })
              }
              label="Data Retention"
              description="Keep prescription records for 7 years"
            />
          </div>

          <div className="border-t pt-6">
            <h3 className="text-sm font-medium text-gray-900 mb-4">Data Actions</h3>
            <div className="flex gap-4">
              <button onClick={handleExportData} className={btnSecondary}>
                <Download size={16} />
                Export Data
              </button>
              <button onClick={handleSyncNow} className={btnSecondary}>
                <RotateCcw size={16} />
                Sync Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-4">
        <button onClick={handleCancel} className={btnSecondary}>
          Cancel
        </button>
        <button onClick={handleSaveChanges} className={btnPrimary}>
          Save Changes
        </button>
      </div>
    </div>
  )
}

export default Settings
