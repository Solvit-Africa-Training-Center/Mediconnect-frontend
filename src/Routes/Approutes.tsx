import { Route, Routes } from "react-router-dom"
import Homepage from "../pages/Homepage"
import DoctorDashboard from "../pages/doctorDashboard/DoctorDashboard"
import CreatePrescription from "../pages/doctorDashboard/CreatePrescription"
import PatientRecords from "../pages/doctorDashboard/PatientRecords"
import PrescriptionHistory from "../pages/doctorDashboard/PrescriptionHistory"
import Settings from "../pages/doctorDashboard/Settings"
import PatientLanding from "../pages/patient/PatientLanding"
import PatientDashboard from "../pages/patient/PatientDashboard"
import PharmacyDashboard from "../pages/pharmacy/PharnacyDashoard"
import MedicalRecordsRequest from "../pages/patient/MedicalRecordsRequest"
import OTPVerification from "../components/pharmacy/OTPVerification"
import ProtectedRoute from "../components/ProtectedRoute"
import PortalsSection from "../components/PortalsSection"
import Unauthorized from "../components/Unauthorized"
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/doctor-dashboard/*" element={<DoctorDashboard />} />
      <Route path="/create-prescription" element={<ProtectedRoute requiredRole="doctor"><CreatePrescription /></ProtectedRoute>} />
      <Route path="/patient-records" element={<ProtectedRoute requiredRole="doctor"><PatientRecords /></ProtectedRoute>} />
      <Route path="/prescription-history" element={<ProtectedRoute requiredRole="doctor"><PrescriptionHistory /></ProtectedRoute>} />

      <Route path="/settings" element={<ProtectedRoute requiredRole="doctor"><Settings /></ProtectedRoute>} />
      <Route path="/patient" element={<PatientLanding />} />
      <Route path="/patient/*" element={<ProtectedRoute requiredRole="patient"><PatientDashboard /></ProtectedRoute>} />
      <Route path="/patient/medical-records-request" element={<ProtectedRoute requiredRole="patient"><MedicalRecordsRequest /></ProtectedRoute>} />
      <Route path="/otp-verification" element={<OTPVerification />} />
      <Route path="/pages/pharmacy" element={<PharmacyDashboard/>} />
      <Route path="/PortalsSection" element={<PortalsSection />} />
      <Route path="/unauthorized" element={<Unauthorized />} />
    </Routes>
  )
}

export default AppRoutes
