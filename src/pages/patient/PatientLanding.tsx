import type React from "react"
import { Link } from "react-router-dom"
import { Heart, Shield, Users, Grid3X3 } from "lucide-react"

const PatientLanding: React.FC = () => {
  const features = [
    {
      icon: Heart,
      title: "Medical Records",
      description: "Access your complete medical history, prescriptions, and health information securely.",
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Your medical data is protected with Rwanda's highest security standards.",
    },
    {
      icon: Users,
      title: "Doctor Collaboration",
      description: "Seamless communication with your healthcare providers and medical team.",
    },
    {
      icon: Grid3X3,
      title: "Digital Prescriptions",
      description: "Receive and manage digital prescriptions with QR code verification.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-teal-400 to-teal-600 text-white py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 text-balance">Digital Medical Ordinance System</h1>
          <p className="text-xl mb-12 text-teal-50 max-w-2xl mx-auto text-pretty">
            Empowering patients in Rwanda with secure, accessible healthcare technology
          </p>
          <Link
            to="/patient/dashboard"
            className="inline-block bg-white text-teal-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-teal-50 transition-colors duration-200"
          >
            Access Patient Dashboard
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#29333D] mb-4">Healthcare at Your Fingertips</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto text-pretty">
              Experience modern healthcare management designed specifically for Rwanda's healthcare ecosystem
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow duration-200"
                >
                  <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#29333D] mb-4">{feature.title}</h3>
                  <p className="text-gray-600 text-pretty">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PatientLanding
