import LoginModal from "./LoginModal"
import { useContext } from "react"
import { Shield, QrCode, Clock } from "lucide-react"
import LoginContext from "../hooks/LoginContext"

const HeroSection = () => {
  const { isLoginOpen, handleLoginClick, handleClose } = useContext(LoginContext)
  const badges = ["MHO Certified", "HIPAA Compliant", "AI-Powered"]

  return (
    <section className=" min-h-screen bg-background p-14 sm:px-5 md:px-10 lg:px-25">
      {isLoginOpen && <LoginModal isOpen={isLoginOpen} onClose={handleClose} />}
      <div className="max-w-7xl lg:grid lg:grid-cols-2 gap-5 ">
        <div className="flex flex-col gap-7">
          <div className="flex items-center gap-2 text-sm text-primary">
            <Shield size={16} />
            Republic of Rwanda - Ministry of Health
          </div>
          <h1 className="text-4xl lg:text-6xl text-foreground">
            Digital Medical <span className="text-bg-gradient-medical">Ordinance System</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg">
            Secure, efficient, and connected healthcare for all Rwandans. Digital prescriptions, verified authenticity, and AI-powered medical support.
          </p>
          <div className="flex gap-4">
            <button className="bg-gradient-medical text-primary-foreground px-6 py-3 rounded flex items-center gap-2">
              <QrCode size={16} /> Access Dashboard
            </button>
            <button onClick={handleLoginClick} className="border border-muted text-primary px-6 py-3 rounded flex items-center gap-2">
              <Clock size={16} /> Watch Demo
            </button>
          </div>
          <div className="flex gap-4 text-sm text-secondary">
            {badges.map(badge => <span key={badge}>{badge}</span>)}
          </div>
        </div>
        <div className="relative">
          <img src="Medicalpage.jpg" alt="Medical professionals using digital technology" className="w-full rounded-2xl" />
          <div className="absolute -bottom-8 -left-10">
            <img src="qrcodephoto.jpg" alt="QR Code for quick access" className="w-75 h-80 rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection