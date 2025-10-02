// PharmacyRoutes.tsx
import { Route } from "react-router-dom";
import PharmacyLayout from "./DashboardLayout";
import PharmacyDashboard from "@/pages/pharmacy/newpharmacie/phaemacieDashboard/page";
import ScanPrescription from "./ScanPrescription";
import DispensedRecords from "./DispensedRecords";
import PharmacySettings from "./PharmacySettings";

const PharmacyRoutes = () => {
  return (
    <>
      <Route index element={<PharmacyLayout />} />
      <Route path="dashboard" element={<PharmacyDashboard />} />
      <Route path="scan" element={<ScanPrescription />} />
      <Route path="dispensed" element={<DispensedRecords />} />
      <Route path="settings" element={<PharmacySettings />} />
    </>
  );
};

export default PharmacyRoutes;
