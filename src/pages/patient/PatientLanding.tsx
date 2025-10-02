import Footer from "../../components/Footer"
import { Heart, Shield, Users, QrCode } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import LoginContext from "../../hooks/LoginContext"
import PatientLoginModal from "../../components/PatientLoginModal"

const PatientLanding = () => {
  const { user } = useContext(LoginContext)
  const navigate = useNavigate()
  const [showLoginModal, setShowLoginModal] = useState(false)

  const features = [
    {
      icon: <Heart className="w-8 h-8 text-blue-600" />,
      title: "Medical Records",
      description: "Access your complete medical history, prescriptions, and health information securely.",
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Secure & Private",
      description: "Your medical data is protected with Rwanda's highest security standards.",
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Doctor Collaboration",
      description: "Seamless communication with your healthcare providers and medical team.",
    },
    {
      icon: <QrCode className="w-8 h-8 text-blue-600" />,
      title: "Digital Prescriptions",
      description: "Receive and manage digital prescriptions with QR code verification.",
    },
  ]

  const handleDashboardAccess = () => {
    if (user) {
      navigate('/patient/dashboard')
    } else {
      setShowLoginModal(true)
    }
  }

  return (
    <div>
      <div className="bg-[url('/patientphoto.jpg')] bg-cover bg-center bg-no-repeat h-screen w-full flex flex-col justify-center">
        <div className="bg-black/60 h-screen flex flex-col justify-center gap-10 px-10">
          <h1 className="text-6xl text-white/95">
            A Secure Digital
            Space for <br /> Your Health Information
          </h1>
          <article className="text-3xl text-white/80">
            Empowering patients in Rwanda with
            secure, accessible <br /> healthcare technology
          </article>

          <div className="px-5">
            <button 
              onClick={handleDashboardAccess}
              className="bg-background-blue text-white px-15 py-4 rounded inline-block"
            >
              Access Patient Dashboard
            </button>
          </div>
        </div>
      </div>
      
      <div className="py-20 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl text-center mb-10 text-blue-600">Health at Your Fingertips</h1>
            <p className="text-lg text-foreground max-w-2xl mx-auto text-center">
              Experience modern healthcare management designed specifically for Rwanda's
              healthcare ecosystem
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow duration-200">
                <div className="w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-blue-600 mb-4">{feature.title}</h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
      
      {/* Patient Login Modal */}
      <PatientLoginModal 
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
      />
    </div>
  )
}

export default PatientLanding
