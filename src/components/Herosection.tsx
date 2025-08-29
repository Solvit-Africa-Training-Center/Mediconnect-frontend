import {CircleCheckBig} from "lucide-react"
import { Shield } from "lucide-react"
import { QrCode } from "lucide-react"
import {Clock} from "lucide-react"

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex  items-center space-x-2 text-sm text-blue-500">
              <span className="font-medium flex place-content-center items-center"><Shield/> Republic of Rwanda - Ministry of Health</span>
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl text-gray-900 leading-tight">
                Digital Medical
                <br />
                <span className="text-cyan-600">Ordinance System</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                Secure, efficient, and connected healthcare for all Rwandans. Digital prescriptions, verified
                authenticity, and AI-powered medical assistance.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium flex items-center space-x-2 transition-colors">
                <span className="flex gap-1.5"><QrCode/> Access Dashboard</span>
              </button>
              <button className="border border-gray-300 hover:border-gray-400 text-blue-500 px-6 py-3 rounded-lg 
                      font-medium flex items-center space-x-2 transition-colors">
                <span className="flex gap-1"> <Clock/>  Watch Demo</span>
              </button>
            </div>

            <div className="flex flex-wrap gap-3">
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm flex items-center space-x-1">
                <span className="flex items-center place-content-center gap-1"><CircleCheckBig color="green"/> WHO Certified</span>
              </span>
              <span className="bg-blue-100 text-green-700 px-3 py-1 rounded-full text-sm flex items-center space-x-1">
                <span className="flex justify-center align-middle items-center"><Shield/> HIPAA Compliant</span>
              </span>
              <span className="bg-purple-100 text-green-700 px-3 py-1 rounded-full text-sm flex items-center space-x-1">
                <span>AI-Powered</span>
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/medical-hero.png"
                alt="Medical professionals using digital technology"
                className="w-full h-96 object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-6 ">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center  bg-blue-50 rounded-xl px-2 pt-1 pb-1">
                  <div className="text-2xl font-medium text-cyan-500">100+</div>
                  <div className="text-sm text-gray-600">Physicians</div>
                </div>
                <div className="text-center  bg-blue-50 rounded-xl px-2 pt-1 pb-1">
                  <div className="text-2xl font-medium text-cyan-500">10K+</div>
                  <div className="text-sm text-gray-600">Patients</div>
                </div>
                <div className="text-center  bg-blue-50 rounded-xl px-2 pt-1 pb-1">
                  <div className="text-2xl font-medium text-cyan-500">500+</div>
                  <div className="text-sm text-gray-600">Medical Professionals</div>
                </div>
                <div className="text-center bg-blue-50 rounded-xl px-2 pt-1 pb-1">
                  <div className="text-2xl font-medium text-cyan-500">99.9%</div>
                  <div className="text-sm text-gray-600">Uptime Guarantee</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
