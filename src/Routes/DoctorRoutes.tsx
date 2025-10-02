// src/components/doctor/DoctorRoutes.tsx
import { Route, Routes } from "react-router-dom";
import DoctorDashboard from "../pages/doctorDashboard/DoctorDashboard";
import CreatePrescription from "../pages/doctorDashboard/CreatePrescription";
import PatientRecords from "../pages/doctorDashboard/PatientRecords";
import PrescriptionHistory from "../pages/doctorDashboard/PrescriptionHistory";
import Settings from "../pages/doctorDashboard/Settings";
import AddPatient from "@/components/AddPatient";

const DoctorRoutes = () => {
  return (
<Routes>
  <Route index element={<DoctorDashboard />} />       
  <Route path="dashboard" element={<DoctorDashboard />} />    
  <Route path="create-prescription" element={<CreatePrescription />} /> 
  <Route path="patient-records" element={<PatientRecords />} />         
  <Route path="prescription-history" element={<PrescriptionHistory />} />
  <Route path="add-patient" element={<AddPatient />} />
  <Route path="settings" element={<Settings />} />
</Routes>

  );
};

export default DoctorRoutes;