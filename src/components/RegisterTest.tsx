import { useState } from 'react'

const RegisterTest = () => {
  const [credentials, setCredentials] = useState({ 
    fullName: 'Test Doctor',
    email: 'test@example.com', 
    password: 'test123',
    role: 'doctor'
  })
  const [result, setResult] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  const handleRegister = async () => {
    setLoading(true)
    try {
      const response = await fetch('https://prescripto-backend-2lb9.onrender.com/api/v1/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials)
      })
      
      const data = await response.json()
      setResult({
        status: response.status,
        data: data
      })
    } catch (error) {
      setResult({ error: error.message })
    }
    setLoading(false)
  }

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Registration Test</h2>
      
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          value={credentials.fullName}
          onChange={(e) => setCredentials({...credentials, fullName: e.target.value})}
          className="w-full p-2 border rounded"
        />
        <input
          type="email"
          placeholder="Email"
          value={credentials.email}
          onChange={(e) => setCredentials({...credentials, email: e.target.value})}
          className="w-full p-2 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={credentials.password}
          onChange={(e) => setCredentials({...credentials, password: e.target.value})}
          className="w-full p-2 border rounded"
        />
        <select
          value={credentials.role}
          onChange={(e) => setCredentials({...credentials, role: e.target.value})}
          className="w-full p-2 border rounded"
        >
          <option value="doctor">Doctor</option>
          <option value="patient">Patient</option>
          <option value="pharmacist">Pharmacist</option>
        </select>
        <button
          onClick={handleRegister}
          disabled={loading}
          className="w-full bg-green-500 text-white p-2 rounded disabled:opacity-50"
        >
          {loading ? 'Registering...' : 'Test Register'}
        </button>
      </div>
      
      {result && (
        <div className="mt-4 p-3 bg-gray-100 rounded">
          <pre className="text-xs overflow-auto">
            {JSON.stringify(result, null, 2)}
          </pre>
        </div>
      )}
    </div>
  )
}

export default RegisterTest