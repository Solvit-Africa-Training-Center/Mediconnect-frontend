
import LoginModal from "./LoginModal"
import { useContext } from "react"
import { Shield, QrCode, Clock } from "lucide-react"
import LoginContext from "../hooks/LoginContext"

const HeroSection = () => {
  const { isLoginOpen, handleLoginClick, handleClose } = useContext(LoginContext)
  const stats = ["100+ Physicians", "10K+ Patients", "500+ Professionals", "99.9% Uptime"]
  const badges = ["WHO Certified", "HIPAA Compliant", "AI-Powered"]

  return (
    <section className=" min-h-screen bg-background py-16 sm:px-5 md:px-10 lg:px-20">
      {isLoginOpen && <LoginModal isOpen={isLoginOpen} onClose={handleClose} />}
      <div className="max-w-7xl mx-auto px-4 lg:grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-sm text-primary">
            <Shield size={16} />
            Republic of Rwanda - Ministry of Health
          </div>
          <h1 className="text-4xl lg:text-6xl text-foreground">
            Digital Medical <span className="text-secondary">Ordinance System</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg">
            Secure, efficient healthcare for all Rwandans. Digital prescriptions and AI assistance.
          </p>
          <div className="flex gap-4">
            <button className="bg-gradient-medical text-primary-foreground px-6 py-3 rounded flex items-center gap-2">
              <QrCode size={16} /> Access Dashboard
            </button>
            <button onClick={handleLoginClick} className="border border-muted text-primary px-6 py-3 rounded flex items-center gap-2">
              <Clock size={16} /> Get Started
            </button>
          </div>
          <div className="flex gap-4 text-sm text-secondary">
            {badges.map(badge => <span key={badge}>{badge}</span>)}
          </div>
        </div>
        <div className="relative">
          <img src="Medicalpage.jpg" alt="Medical professionals using digital technology" className="w-full h-96 rounded-2xl" />
          <div className="absolute -bottom-6 -left-6 bg-card rounded p-4 grid grid-cols-2 gap-4 shadow-card">
            {stats.map(statText => {
              const [number, description] = statText.split(' ', 2)
              
              return (
                <div key={statText} className="text-center">
                  <div className="text-xl font-bold text-secondary">{number}</div>
                  <div className="text-xs text-muted-foreground">{description}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
