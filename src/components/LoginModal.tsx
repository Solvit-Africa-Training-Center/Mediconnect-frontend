import Input from "./Input"
import { useState, useContext } from "react"
import { Shield, Eye, EyeOff, LogIn } from "lucide-react"
import LoginContext from "../hooks/LoginContext"
import { loginSchema } from "../schemas/authSchemas"

interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
}

const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
  const { login } = useContext(LoginContext)
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({ 
    email: "", 
    password: ""
  })
  const [rememberMe, setRememberMe] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setErrors({})
    
    try {
      loginSchema.parse({ email: formData.email, password: formData.password })
      
      const userData = {
        id: Date.now().toString(),
        email: formData.email,
        fullName: formData.email.split('@')[0],
        role: "patient" as "patient" | "doctor" | "pharmacist"
      }
      
      login(userData)
    } catch (error: any) {
      if (error.errors) {
        const newErrors: Record<string, string> = {}
        error.errors.forEach((err: any) => {
          newErrors[err.path[0]] = err.message
        })
        setErrors(newErrors)
      }
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }



  if (!isOpen) return null
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white p-8 w-full max-w-md mx-4 shadow-2xl h-screen overflow-y-auto">
        <div className=" mb-8">
          <div className="mx-auto mb-6 p-4 bg-gradient-medical rounded w-fit">
            <Shield size={40} className="text-white" />
          </div>
          <h1 className="text-3xl font-bold text-blue-500 mb-2">
            Welcome Back
          </h1>
          <p className="text-gray-600">
            Please sign in to your account
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
            <Input
              name="email"
              type="email"
              className={`w-full h-12 px-4 border-2 rounded-lg focus:outline-none transition-colors ${
                errors.email ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-blue-500'
              }`}
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
            <div className="relative">
              <Input
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full h-12 px-4 pr-12 border-2 rounded-lg focus:outline-none transition-colors ${
                  errors.password ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-blue-500'
                }`}
                required
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-sm text-gray-600">
              <input 
                type="checkbox" 
                checked={rememberMe} 
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 text-blue-600 rounded"
              />
              Remember me
            </label>
            <button type="button" className="text-sm text-blue-600 hover:text-blue-800 font-medium">
              Forgot Password?
            </button>
          </div>

          <button 
            type="submit" 
            className="w-full h-12 bg-blue-600 text-white rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors shadow-lg"
          >
            <LogIn size={20} />
            Sign In
          </button>
        </form>

        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          ✕
        </button>
      </div>
    </div>
  )
}

export default LoginModal