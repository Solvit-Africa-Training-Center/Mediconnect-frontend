import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import PatientLanding from "../pages/patient/PatientLanding";
import PatientDashboard from "../pages/patient/PatientDashboard";
import MedicalRecordsRequest from "../pages/patient/MedicalRecordsRequest";
import ProtectedRoute from "../components/ProtectedRoute";
import DoctorRoutes from "./DoctorRoutes";
import PharmacyDashboard from "@/pages/pharmacy/newpharmacie/phaemacieDashboard/page";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/doctor-dashboard/*" element={<ProtectedRoute requiredRole="doctor"><DoctorRoutes /></ProtectedRoute>} />
      <Route path="/patient" element={<PatientLanding />} />      <Route path="/patient-dashboard" element={<ProtectedRoute requiredRole="patient"><PatientDashboard /></ProtectedRoute>} />      <Route path="/patient/medical-records-request" element={<ProtectedRoute requiredRole="patient"><MedicalRecordsRequest /></ProtectedRoute>} />
      <Route path="/pharmacy-dashboard" element={<ProtectedRoute requiredRole="pharmacist"><PharmacyDashboard /></ProtectedRoute>} />
    </Routes>
  );
};

export default AppRoutes;
