import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import PatientLanding from "../pages/patient/PatientLanding";
import PatientDashboard from "../pages/patient/PatientDashboard";
import MedicalRecordsRequest from "../pages/patient/MedicalRecordsRequest";
import ProtectedRoute from "../components/ProtectedRoute";
import DoctorRoutes from "./DoctorRoutes";
import PharmacyDashboard from "@/pages/pharmacy/newpharmacie/phaemacieDashboard/page";
import PharamcyPage from "@/pages/pharmacy/PharamcyPage";
import Dashboard from "@/pages/pharmacyPages/pages/Dashboard";
import ScanPrescription from "@/pages/pharmacyPages/pages/ScanPrescription";
import Layout from "@/layouts/Layout";
import DispensedRecordPage from "@/pages/pharmacyPages/pages/DispensedRecords";
import Settings from "@/pages/pharmacyPages/pages/Settings";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/pharmacyPage" element={<PharamcyPage/>} />
      <Route path="/doctor-dashboard/*" element={<ProtectedRoute requiredRole="doctor"><DoctorRoutes /></ProtectedRoute>} />
      <Route path="/patient" element={<PatientLanding />} />      <Route path="/patient-dashboard" element={<ProtectedRoute requiredRole="patient"><PatientDashboard /></ProtectedRoute>} />      <Route path="/patient/medical-records-request" element={<ProtectedRoute requiredRole="patient"><MedicalRecordsRequest /></ProtectedRoute>} />
      <Route path="/pharmacy-dashboard" element={<ProtectedRoute requiredRole="pharmacist"><PharmacyDashboard /></ProtectedRoute>} />

         {/* ✅ Layout routes with nested pages */}
      <Route element={<Layout/>}>
        <Route path="/PharmacyDashboard" element={<Dashboard />} />
        <Route path="/scan" element={<ScanPrescription />} />
        <Route path="/dispensed" element={<DispensedRecordPage />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
      

    </Routes>
  );
};

export default AppRoutes;
