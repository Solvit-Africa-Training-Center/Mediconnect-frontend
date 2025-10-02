import React, { useState } from 'react';
import { Shield, Settings as SettingsIcon, Database, Download, RotateCcw } from 'lucide-react';
import ToggleSwitch from './ToggleSwitch';

const PharmacySettings: React.FC = () => {
  // Example: Fetch initial data from an API or props
  // For now, we use useState to make the form interactive.
  const [pharmacyProfile, setPharmacyProfile] = useState({
    name: 'PharmaCare Rwanda',
    licenseNumber: 'PH-RW-2023-0145',
    phoneNumber: '+250 788 555 1234',
    emailAddress: 'contact@pharmacare.rw',
    address: 'KN 15 Ave, Kigali Heights, Kinyinya, Gasabo District, Kigali, Rwanda',
  });

  const [pharmacistInfo, setPharmacistInfo] = useState({
    fullName: 'Dr. Marie Uwimana',
    licenseNumber: 'MD-RW-2019-0789',
    phoneNumber: '+250 788 987 6543',
    emailAddress: 'marie.uwimana@pharmacare.rw',
  });

  const [securitySettings, setSecuritySettings] = useState({
    twoFactorAuth: true,
    sessionTimeout: true,
    loginAlerts: true,
  });

  const [systemPreferences, setSystemPreferences] = useState({
    autoRefreshDashboard: true,
    soundAlerts: true,
    compactView: false,
    advancedMode: false,
  });

  const [dataManagement, setDataManagement] = useState({
    automaticBackup: true,
    dataRetention: true,
  });

  const handleToggle = <T,>(
    setter: React.Dispatch<React.SetStateAction<T>>,
    key: keyof T
  ) => {
    setter((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSaveChanges = () => {
    // Here you would typically dispatch an action to save the settings
    console.log('Saving changes:', {
      securitySettings,
      systemPreferences,
      dataManagement,
    });
    // You might want to show a success notification here
  };

  return (
    <div className="space-y-6">
      {/* Pharmacy Profile */}
      <div className="card p-6">
        <div className="flex items-center gap-2 mb-6">
          <div className="p-1 bg-blue-50 rounded">
            <SettingsIcon size={16} className="text-blue-600" />
          </div>
          <h2 className="text-lg font-semibold text-gray-900">Pharmacy Profile</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Pharmacy Name</label>
            <input type="text" value={pharmacyProfile.name} readOnly className="input-field" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">License Number</label>
            <input type="text" value={pharmacyProfile.licenseNumber} readOnly className="input-field" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
            <input type="tel" value={pharmacyProfile.phoneNumber} readOnly className="input-field" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
            <input type="email" value={pharmacyProfile.emailAddress} readOnly className="input-field" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
            <textarea value={pharmacyProfile.address} readOnly rows={3} className="input-field" />
          </div>
        </div>
      </div>

      {/* Pharmacist Information */}
      <div className="card p-6">
        <div className="flex items-center gap-2 mb-6">
          <div className="p-1 bg-green-50 rounded">
            <div className="w-4 h-4 bg-green-600 rounded-full"></div>
          </div>
          <h2 className="text-lg font-semibold text-gray-900">Pharmacist Information</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
            <input type="text" value={pharmacistInfo.fullName} readOnly className="input-field" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">License Number</label>
            <input type="text" value={pharmacistInfo.licenseNumber} readOnly className="input-field" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
            <input type="tel" value={pharmacistInfo.phoneNumber} readOnly className="input-field" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
            <input type="email" value={pharmacistInfo.emailAddress} readOnly className="input-field" />
          </div>
        </div>
      </div>

      {/* Security Settings */}
      <div className="card p-6">
        <div className="flex items-center gap-2 mb-6">
          <div className="p-1 bg-yellow-50 rounded">
            <Shield size={16} className="text-yellow-600" />
          </div>
          <h2 className="text-lg font-semibold text-gray-900">Security Settings</h2>
        </div>

        <div className="space-y-6">
          <div className="space-y-4">
            <ToggleSwitch enabled={securitySettings.twoFactorAuth} onChange={() => handleToggle(setSecuritySettings, 'twoFactorAuth')} label="Two Factor Authentication" description="Add an extra layer of security" />
            <ToggleSwitch enabled={securitySettings.sessionTimeout} onChange={() => handleToggle(setSecuritySettings, 'sessionTimeout')} label="Session Timeout" description="Auto logout after inactivity" />
            <ToggleSwitch enabled={securitySettings.loginAlerts} onChange={() => handleToggle(setSecuritySettings, 'loginAlerts')} label="Login Alerts" description="Get notified on new logins" />
          </div>
        </div>
      </div>

      {/* System Preferences */}
      <div className="card p-6">
        <div className="flex items-center gap-2 mb-6">
          <div className="p-1 bg-blue-50 rounded">
            <SettingsIcon size={16} className="text-blue-600" />
          </div>
          <h2 className="text-lg font-semibold text-gray-900">System Preferences</h2>
        </div>

        <div className="space-y-4">
          <ToggleSwitch enabled={systemPreferences.autoRefreshDashboard} onChange={() => handleToggle(setSystemPreferences, 'autoRefreshDashboard')} label="Auto-refresh Dashboard" description="Refresh data every 5 min" />
          <ToggleSwitch enabled={systemPreferences.soundAlerts} onChange={() => handleToggle(setSystemPreferences, 'soundAlerts')} label="Sound Alerts" description="Play sounds for notifications" />
          <ToggleSwitch enabled={systemPreferences.compactView} onChange={() => handleToggle(setSystemPreferences, 'compactView')} label="Compact View" description="Use compact layout" />
          <ToggleSwitch enabled={systemPreferences.advancedMode} onChange={() => handleToggle(setSystemPreferences, 'advancedMode')} label="Advanced Mode" description="Show advanced info" />
        </div>
      </div>

      {/* Data Management */}
      <div className="card p-6">
        <div className="flex items-center gap-2 mb-6">
          <div className="p-1 bg-yellow-50 rounded">
            <Database size={16} className="text-yellow-600" />
          </div>
          <h2 className="text-lg font-semibold text-gray-900">Data Management</h2>
        </div>

        <div className="space-y-6">
          <ToggleSwitch enabled={dataManagement.automaticBackup} onChange={() => handleToggle(setDataManagement, 'automaticBackup')} label="Automatic Backup" description="Backup daily at 3:00 AM" />
          <ToggleSwitch enabled={dataManagement.dataRetention} onChange={() => handleToggle(setDataManagement, 'dataRetention')} label="Data Retention" description="Keep records for 7 years" />

          <div className="border-t pt-6">
            <h3 className="text-sm font-medium text-gray-900 mb-4">Data Actions</h3>
            <div className="flex gap-4">
              <button className="btn-secondary flex items-center gap-2"><Download size={16} /> Export Data</button>
              <button className="btn-secondary flex items-center gap-2"><RotateCcw size={16} /> Sync Now</button>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-4">
        <button className="btn-secondary">Cancel</button>
        <button className="btn-primary" onClick={handleSaveChanges}>Save Changes</button>
      </div>
    </div>
  );
};

export default PharmacySettings
