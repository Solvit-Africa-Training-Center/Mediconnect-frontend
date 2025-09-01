import { SidebarProvider, useSidebar } from "../contexts/SidebarContext"
import Sidebar from "../components/Doctordashboard/Sidebar"
import Header from "../components/Doctordashboard/Header"
import ProfileInformation from "../components/settings/ProfileInformation"
import ClinicInformation from "../components/settings/ClinicInformation"
import SecurityPrivacy from "../components/settings/SecurityPrivacy"

const SettingsContent = () => {
  const { isCollapsed } = useSidebar()

  return (
   <div
  className={`transition-all duration-300 ${isCollapsed ? "pl-20" : "pl-70"} pt-20 bg-purple-50 min-h-screen`}
>

      <div className="p-6 space-y-6">
        <div>
          <h1 className="text-2xl font-bold" style={{ color: "#131A20" }}>
            Settings
          </h1>
          <p style={{ color: "#29333D" }}>Manage your profile, clinic information and security settings</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ProfileInformation />
          <ClinicInformation />
        </div>

        <SecurityPrivacy />
      </div>
    </div>
  )
}

const Settings = () => {
  return (
    <SidebarProvider>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1">
          <Header />
          <SettingsContent />
        </div>
      </div>
    </SidebarProvider>
  )
}

export default Settings
