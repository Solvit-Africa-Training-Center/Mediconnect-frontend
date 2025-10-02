import Input from "./Input"
import { useState, useEffect, useContext } from "react"
import { Stethoscope, Eye, EyeOff, LogIn } from "lucide-react"
import { loginSchema } from "../schemas/authSchemas"
import { useLoginMutation } from "../Back-end/authentication/authenticationApi"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../contexts/AuthContext"
import type { LoginCredentials } from "../Types/auth/auth.types"

interface DoctorLoginModalProps {
  isOpen: boolean
  onClose: () => void
}

const DoctorLoginModal = ({ isOpen, onClose }: DoctorLoginModalProps) => {
  const authContext = useContext(AuthContext)
  const handleLogin = authContext?.login || (() => {})
  const navigate = useNavigate()

  const [loginMutation, { isLoading }] = useLoginMutation()
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState<LoginCredentials>({ email: "", password: "" })
  const [rememberMe, setRememberMe] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  // Reset form when modal opens
  useEffect(() => {
    if (isOpen) {
      setFormData({ email: "", password: "" })
      setErrors({})
      setShowPassword(false)
      setRememberMe(false)
    }
  }, [isOpen])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrors({})

    try {
      loginSchema.parse(formData)

      const result = await loginMutation(formData).unwrap()

      if (!result.success || !result.data) {
        setErrors({ general: result.error?.message || "Login failed. Try again." })
        return
      }

      if (result.data.user.role !== "doctor") {
        setErrors({ general: "Access denied. Doctor credentials required." })
        return
      }

      // Save user in context
      handleLogin(result.data.user)

      // Save token
      localStorage.setItem("token", result.data.token)

      navigate("/doctor-dashboard")
      onClose()
    } catch (err: any) {
      if (err?.errors) {
        const newErrors: Record<string, string> = {}
        err.errors.forEach((e: any) => { if (e.path) newErrors[e.path[0]] = e.message })
        setErrors(newErrors)
      } else {
        setErrors({ general: "Network error. Please try again." })
      }
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white p-8 w-full max-w-md mx-4 shadow-2xl h-screen overflow-y-auto relative">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-6 p-4 bg-gradient-medical rounded w-fit">
            <Stethoscope size={40} className="text-white" />
          </div>
          <h1 className="text-3xl font-bold text-blue-500 mb-2">Doctor Portal</h1>
          <p className="text-gray-600">Sign in to access your medical dashboard</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4" autoComplete="off">
          {errors.general && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-3">
              <p className="text-red-600 text-sm">{errors.general}</p>
            </div>
          )}

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
            <Input
              name="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full h-12 px-4 border-2 rounded-lg focus:outline-none transition-colors ${
                errors.email ? "border-red-500 focus:border-red-500" : "border-gray-200 focus:border-blue-500"
              }`}
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
                  errors.password ? "border-red-500 focus:border-red-500" : "border-gray-200 focus:border-blue-500"
                }`}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 disabled:opacity-50"
                disabled={isLoading}
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
                disabled={isLoading}
              />
              Remember me
            </label>
            <button
              type="button"
              className="text-sm text-blue-600 hover:text-blue-800 font-medium disabled:opacity-50"
              disabled={isLoading}
            >
              Forgot Password?
            </button>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full h-12 bg-blue-600 text-white rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Signing In...
              </>
            ) : (
              <>
                <LogIn size={20} />
                Sign In
              </>
            )}
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

export default DoctorLoginModal
