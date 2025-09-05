import { Route, Routes } from "react-router-dom"
import Homepage from "../pages/Homepage"
import DoctorDashboard from "../pages/doctorDashboard/DoctorDashboard"
import CreatePrescription from "../pages/doctorDashboard/CreatePrescription"
import PatientRecords from "../pages/doctorDashboard/PatientRecords"
import PrescriptionHistory from "../pages/doctorDashboard/PrescriptionHistory"
import Settings from "../pages/doctorDashboard/Settings"
import PatientLanding from "../pages/patient/PatientLanding"
import PatientDashboard from "../pages/patient/PatientDashboard"

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

       <Route path="/patient" element={<PatientLanding />} />
      <Route path="/patient/*" element={<PatientDashboard />} />
    </Routes>
  )
}

export default AppRoutes
