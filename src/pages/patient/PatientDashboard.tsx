import type React from "react"
import ProfileOverview from "../../components/patientdashboard/ProfileOverview"
import MedicalInformation from "../../components/patientdashboard/MedicalInformation"
import MyPrescriptions from "../../components/patientdashboard/MyPrescriptions"
import MedicalHistory from "../../components/patientdashboard/MedicalHistory"

type User = {
  id: string;
  email: string;
  fullName: string;
  role: "patient" | "doctor" | "admin"; // can be expanded if there are other roles
  phone: string;
  patientId: string;
};



const PatientDashboard: React.FC = () => {

  const storedUser = localStorage.getItem("user");
  const loginUser: User | null = storedUser ? JSON.parse(storedUser) : null;

  console.log(loginUser?.id);

  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(135deg, #29333D 0%, #131A20 100%)" }}>
      {/* Header */}
      <div className="text-center py-8 text-white">
        <h1 className="text-3xl font-bold mb-2">Patient Dashboard</h1>
        <p className="text-lg opacity-80">Digital Medical Ordinance System - Rwanda</p>
      </div>

      {/* Main Content */}
      <div className="bg-[#D3D9DE] min-h-screen px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-6">
              <ProfileOverview />
              <MedicalInformation />
              <MyPrescriptions />
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <MedicalHistory />

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PatientDashboard
