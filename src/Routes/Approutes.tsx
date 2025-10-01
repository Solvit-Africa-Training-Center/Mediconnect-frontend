import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import PatientLanding from "../pages/patient/PatientLanding";
import PatientDashboard from "../pages/patient/PatientDashboard";
import MedicalRecordsRequest from "../pages/patient/MedicalRecordsRequest";
import ProtectedRoute from "../components/ProtectedRoute";
import PharmacyRoutes from "@/components/pharmacy/PharmacyRoutes";
import DoctorRoutes from "./DoctorRoutes";
import PharmacyLayout from "@/components/pharmacy/DashboardLayout";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/doctor-dashboard/*" element={<ProtectedRoute requiredRole="doctor"><DoctorRoutes /></ProtectedRoute>} />
      <Route path="/patient" element={<PatientLanding />} />
      <Route path="/patient-dashboard" element={<ProtectedRoute requiredRole="patient"><PatientDashboard /></ProtectedRoute>} />
      <Route path="/patient/medical-records-request" element={<ProtectedRoute requiredRole="patient"><MedicalRecordsRequest /></ProtectedRoute>} />
      <Route path="/pharmacy/*" element={<ProtectedRoute requiredRole="pharmacist"><PharmacyLayout /></ProtectedRoute>}>
      <Route index element={<PharmacyLayout />} /> 
      <Route path="dashboard" element={<PharmacyRoutes />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
