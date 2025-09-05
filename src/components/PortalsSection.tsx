import { Stethoscope, Users, Pill } from "lucide-react"

const PortalsSection = () => {
  const portals = [
    {
      icon: Users,
      title: "Patient Portal",
      description: "Access prescriptions, get medication reminders, and chat with your healthcare provider.",
      link: "/patient-portal"
    },
    {
      icon: Stethoscope,
      title: "Doctor Dashboard",
      description:
        "Create secure digital prescriptions with allergy alerts, patient history and other medical information.",
      link: "/doctor-dashboard"
    },
    {
      icon: Pill,
      title: "Pharmacist Tools",
      description: "Verify prescriptions, manage drug inventory, scanner and track medication on dispensed.",
      link: "/pharmacist-tools"
    },
  ]

  return (
    <section className="py-25 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {portals.map((portal, index) => (
            <a
              key={index}
              href={portal.link}
              className="bg-card rounded p-8 shadow-card hover:shadow-float transition-smooth cursor-pointer block"
            >
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-medical rounded-xl flex items-center justify-center mx-auto">
                  <portal.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{portal.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{portal.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PortalsSection