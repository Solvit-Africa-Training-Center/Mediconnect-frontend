import type React from "react";
import ProfileOverview from "../../components/patientdashboard/ProfileOverview";
import MedicalInformation from "../../components/patientdashboard/MedicalInformation";
import MyPrescriptions from "../../components/patientdashboard/MyPrescriptions";
import MedicalHistory from "../../components/patientdashboard/MedicalHistory";

const PatientDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#D3D9DE]">
      {/* Header */}
      <div 
        className="text-center py-8 text-white"
        style={{ background: "linear-gradient(135deg, #29333D 0%, #131A20 100%)" }}
      >
        <h1 className="text-3xl font-bold mb-2">Patient Dashboard</h1>
        <p className="text-lg opacity-80">Digital Medical Ordinance System - Rwanda</p>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto px-6 py-8">
        <div className="space-y-6">
          <ProfileOverview />
          <MedicalInformation />
          <MyPrescriptions />
        </div>
        <div className="space-y-6">
          <MedicalHistory />
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;
