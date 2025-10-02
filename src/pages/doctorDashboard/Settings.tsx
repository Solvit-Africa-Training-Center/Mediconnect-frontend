import { SidebarProvider, useSidebar } from "../../contexts/SidebarContext"
import Sidebar from "../../components/Doctordashboard/Sidebar"
import Header from "../../components/Doctordashboard/Header"
import ProfileInformation from "../../components/settings/ProfileInformation"
import ClinicInformation from "../../components/settings/ClinicInformation"
import SecurityPrivacy from "../../components/settings/SecurityPrivacy"

const SettingsContent = () => {
  const { isCollapsed } = useSidebar()

  return (
    <div className="min-h-screen bg-purple-50">
      <Sidebar />
      <Header title="Settings" subtitle="Manage your profile, clinic information and security settings" />

      <main
        className={`transition-all duration-300 px-6 pt-24 pb-12 ${isCollapsed ? "ml-16" : "ml-64"}`}
      >
        <div className="max-w-7xl mx-auto space-y-8">
          <div>
            <h1 className="text-2xl font-bold" style={{ color: "#131A20" }}>
              Settings
            </h1>
            <p style={{ color: "#29333D" }}>
              Manage your profile, clinic information and security settings
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <ProfileInformation />
            <ClinicInformation />
          </div>

          <SecurityPrivacy />
        </div>
      </main>
    </div>
  )
}

const Settings = () => {
  return (
    <SidebarProvider>
      <SettingsContent />
    </SidebarProvider>
  )
}

export default Settings