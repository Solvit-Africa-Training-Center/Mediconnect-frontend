import { Stethoscope, Users, Pill } from "lucide-react"
import PortalCard from "./PortalCard"
import { useState } from "react"
import DoctorLoginModal from "./DoctorLoginModal"

const PortalsSection = () => {
  const [isDoctorLoginOpen, setIsDoctorLoginOpen] = useState(false)

  return (
    <section className="py-16 md:py-25 bg-white/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <PortalCard
            icon={Users}
            title="Patient Portal"
            description="Access prescriptions, get medication reminders, and chat with your healthcare provider."
            link="/patient"
          />
          <PortalCard
            icon={Stethoscope}
            title="Doctor Dashboard"
            description="Create secure digital prescriptions with allergy alerts, patient history and other medical information."
            link="#"
            onClick={() => setIsDoctorLoginOpen(true)} // Open the Doctor Login Modal
          />
          <PortalCard
            icon={Pill}
            title="Pharmacist Tools"
            description="Verify prescriptions, manage drug inventory, scanner and track medication on dispensed."
            link="/pages/pharmacy"
          />
        </div>
      </div>

      {/* Doctor Login Modal */}
      <DoctorLoginModal
        isOpen={isDoctorLoginOpen}
        onClose={() => setIsDoctorLoginOpen(false)}
      />
    </section>
  )
}

export default PortalsSection