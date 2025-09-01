import { Route, Routes } from "react-router-dom"
import Homepage from "../pages/Homepage"
import DoctorDashboard from "../pages/DoctorDashboard"

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/doctor-dashboard/*" element={<DoctorDashboard />} />
      <Route path="/create-prescription" element={<DoctorDashboard />} />
      <Route path="/patient-records" element={<DoctorDashboard />} />
      <Route path="/prescription-history" element={<DoctorDashboard />} />
      <Route path="/notifications" element={<DoctorDashboard />} />
      <Route path="/settings" element={<DoctorDashboard />} />
    </Routes>
  )
}

export default AppRoutes
