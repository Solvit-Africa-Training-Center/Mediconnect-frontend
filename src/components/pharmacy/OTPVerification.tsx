import React, { useState, useRef, useEffect } from 'react'

const OTPVerification: React.FC = () => {
  const [otp, setOtp] = useState<string[]>(new Array(7).fill(''))
  const [email] = useState('usbsenior142@gmail.com')
  const inputRefs = useRef<HTMLInputElement[]>([])

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus()
    }
  }, [])

  const handleChange = (index: number, value: string) => {
    if (isNaN(Number(value))) return

    const newOtp = [...otp]
    newOtp[index] = value.substring(value.length - 1)
    setOtp(newOtp)

    if (value && index < 6) {
      inputRefs.current[index + 1].focus()
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus()
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const enteredOtp = otp.join('')
    alert(`OTP ${enteredOtp} submitted for verification!`)
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h1 className="text-center text-3xl font-bold text-gray-900 mb-2">
          Verify Your Identity
        </h1>

        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="mb-6 text-center">
            <p className="text-sm text-gray-600 mb-1">
              Code sent to
            </p>
            <p className="text-md font-medium text-gray-900">
              {email}
            </p>
          </div>

          <p className="text-sm text-gray-600 text-center mb-8">
            Enter the 7-digit verification code sent to your email address
          </p>

          <form onSubmit={handleSubmit}>
            <div className="flex justify-center space-x-2 mb-8">
              {otp.map((value, index) => (
                <input
                  key={index}
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  className="w-12 h-12 border-2 border-gray-300 rounded-md text-center text-xl font-semibold focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  value={value}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  ref={(ref) => {
                    if (ref) {
                      inputRefs.current[index] = ref
                    }
                  }}
                  maxLength={1}
                />
              ))}
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Verify Identity
              </button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Didn't receive the code?{' '}
              <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                Resend code
              </a>
            </p>
          </div>
        </div>

        <div className="mt-6 text-center text-sm text-gray-600">
          <p>
            Having trouble?{' '}
            <a href="https://www.verifyyouridentity.com/" className="font-medium text-blue-600 hover:text-blue-500">
              Contact support
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default OTPVerification