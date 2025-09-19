import { useState } from 'react'
import { useLoginMutation, useGetProfileQuery } from '../Back-end/authentication/authenticationApi'

const AuthTest = () => {
  const [credentials, setCredentials] = useState({ email: 'dr.smith@hospital.com', password: 'password123' })
  const [loginMutation, { isLoading: loginLoading, error: loginError }] = useLoginMutation()
  const { data: profile, error: profileError } = useGetProfileQuery(undefined, {
    skip: !localStorage.getItem('authToken')
  })

  const handleLogin = async () => {
    try {
      const result = await loginMutation(credentials).unwrap()
      // Login successful
      
      // Try different token field names
      const token = result?.token || result?.accessToken || result?.access_token || result?.data?.token
      if (token) {
        localStorage.setItem('authToken', token)
        alert('Login successful! Page will reload.')
        window.location.reload()
      } else {
        alert('Login failed: No token found in response')
      }
    } catch (error) {
      alert('Login failed')
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('authToken')
    window.location.reload()
  }

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Authentication Test</h2>
      
      {!localStorage.getItem('authToken') ? (
        <div className="space-y-4">
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
          <button
            onClick={handleLogin}
            disabled={loginLoading}
            className="w-full bg-blue-500 text-white p-2 rounded disabled:opacity-50"
          >
            {loginLoading ? 'Logging in...' : 'Test Login'}
          </button>
          {loginError && (
            <div className="text-red-500 text-sm">
              Error: {JSON.stringify(loginError)}
            </div>
          )}
        </div>
      ) : (
        <div className="space-y-4">
          <div className="text-green-600">✅ Authenticated</div>
          {profile ? (
            <div className="bg-gray-100 p-3 rounded">
              <pre>{JSON.stringify(profile, null, 2)}</pre>
            </div>
          ) : profileError ? (
            <div className="text-red-500">
              Profile Error: {JSON.stringify(profileError)}
            </div>
          ) : (
            <div>Loading profile...</div>
          )}
          <button
            onClick={handleLogout}
            className="w-full bg-red-500 text-white p-2 rounded"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  )
}

export default AuthTest