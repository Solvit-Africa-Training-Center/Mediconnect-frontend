import { Route, Routes } from "react-router-dom"
import Homepage from "../pages/Homepage"
import DoctorDashboard from "../pages/DoctorDashboard"
import CreatePrescription from "../pages/CreatePrescription"
import PatientRecords from "../pages/PatientRecords"
import PrescriptionHistory from "../pages/PrescriptionHistory"
import Settings from "../pages/Settings"

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/doctor-dashboard/*" element={<DoctorDashboard />} />
      <Route path="/create-prescription" element={<CreatePrescription />} />
      <Route path="/patient-records" element={<PatientRecords />} />
      <Route path="/prescription-history" element={<PrescriptionHistory />} />
      <Route path="/notifications" element={<DoctorDashboard />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  )
}

export default AppRoutes
