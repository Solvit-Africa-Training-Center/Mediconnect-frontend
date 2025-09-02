const PortalsSection = () => {
  const portals = [
    {
      icon: "",
      title: "Doctor Dashboard",
      description:
        "Create secure digital prescriptions with allergy alerts, patient history and other medical information.",
    },
    {
      icon: "",
      title: "Patient Portal",
      description: "Access prescriptions, get medication reminders, and chat with your healthcare provider.",
    },
    {
      icon: "",
      title: "Pharmacist Tools",
      description: "Verify prescriptions, manage drug inventory, scanner and track medication on dispensed.",
    },
  ]

  return (
    <section className="py-25 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {portals.map((portal, index) => (
            <div
              key={index}
              className="bg-card rounded p-8 shadow-card hover:shadow-float transition-smooth"
            >
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-medical rounded-xl flex items-center justify-center mx-auto">
                  <span className="text-2xl text-primary-foreground">{portal.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">{portal.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{portal.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PortalsSection