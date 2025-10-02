import { Stethoscope, Users, Pill } from "lucide-react";
import PortalCard from "./PortalCard";
import { useState } from "react";
import DoctorLoginModal from "./DoctorLoginModal";
import PharmacyLoginModal from "./PharmacyLoginModal"; // Import the PharmacyLoginModal

const PortalsSection = () => {
  const [isDoctorLoginOpen, setIsDoctorLoginOpen] = useState(false);
  const [isPharmacyLoginOpen, setIsPharmacyLoginOpen] = useState(false); // Add state for pharmacy login modal

  return (
    <section id="portals" className="py-16 md:py-25 bg-white/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <PortalCard
            icon={Users}
            title="Patient Portal"
            description="A centralized health profile with personal details, chronic conditions, allergies, and past treatments"
            link="/patient"
          />
          <PortalCard
            icon={Stethoscope}
            title="Doctor Portal"
            description="Create digital prescriptions ,diagnosis
            with allergy alerts ,patient history and other medical conditions"
            link="#"
            onClick={() => setIsDoctorLoginOpen(true)} // Open the Doctor Login Modal
          />
          <PortalCard
            icon={Pill}
            title="Pharmacy Portal"
            description="Verify prescriptions with QR
            scanner and mark medications
            as dispensed."
            onClick={() => setIsPharmacyLoginOpen(true)} // Open the Pharmacy Login Modal
          />
        </div>
      </div>

      {/* Doctor Login Modal */}
      <DoctorLoginModal
        isOpen={isDoctorLoginOpen}
        onClose={() => setIsDoctorLoginOpen(false)}
      />

      {/* Pharmacy Login Modal */}
      <PharmacyLoginModal
        isOpen={isPharmacyLoginOpen}
        onClose={() => setIsPharmacyLoginOpen(false)}
      />
    </section>
  );
};

export default PortalsSection;