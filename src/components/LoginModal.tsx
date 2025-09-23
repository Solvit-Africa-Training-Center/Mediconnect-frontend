// import { useState } from "react"
// import { useAuth } from "../contexts/AuthContext"
// import { useLoginMutation } from "../Back-end/authentication/authenticationApi"

const LoginModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  // const [formData, setFormData] = useState({ email: "", password: "" })
  // const [login, { isLoading }] = useLoginMutation()
  // const { login: handleLogin } = useAuth()
  // const [error, setError] = useState<string | null>(null)

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target
  //   setFormData({ ...formData, [name]: value })
  // }

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault()
  //   setError(null)

  //   try {
  //     const result = await login(formData).unwrap()
  //     handleLogin(result.data)
  //     onClose()
  //   } catch (err: any) {
  //     setError(err?.data?.message || "Login failed. Please try again.")
  //   }
  // }

  // if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      {/* <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition duration-300 disabled:opacity-50"
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>
        <button
          onClick={onClose}
          className="mt-4 w-full bg-gray-300 hover:bg-gray-400 text-gray-700 font-medium py-2 px-4 rounded-lg transition duration-300"
        >
          Cancel
        </button>
      </div> */}
    </div>
  )
}

export default LoginModal