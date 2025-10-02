import React, { useState, useRef } from 'react'
import { Camera, Upload, AlertCircle, CheckCircle, Scan } from 'lucide-react'
import type { QRScanResult } from '@/Types/pharmacist/pharmacyTypes'

const QRScanner: React.FC = () => {
  const [isScanning, setIsScanning] = useState(false)
  const [scanResult, setScanResult] = useState<QRScanResult | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleStartScan = () => {
    setIsScanning(true)
    setError(null)
    setScanResult(null)
    
    // Simulate QR scanning - in real implementation, this would use camera
    setTimeout(() => {
      const mockQRCode = "PRESCRIPTION_QR_" + Date.now()
      handleQRScan(mockQRCode)
    }, 2000)
  }

  const handleQRScan = async (qrCode: string) => {
    setLoading(true)
    try {
      const prescription = await apiService.scanPrescription(qrCode)
      
      // Convert prescription to scan result format
      const result: QRScanResult = {
        prescriptionId: prescription._id,
        patientName: `Patient ${prescription.patientId.slice(-6)}`,
        doctorName: 'Dr. Unknown', // Would need to fetch doctor details
        medications: prescription.medications,
        diagnosis: prescription.diagnosis,
        issueDate: new Date(prescription.date).toLocaleDateString()
      }
      
      setScanResult(result)
      setIsScanning(false)
    } catch (error) {
      console.error('QR scan failed:', error)
      setError('Failed to scan prescription. Please try again or enter manually.')
      setIsScanning(false)
      
      // Fallback to mock data for demo
      const mockResult: QRScanResult = {
        prescriptionId: 'RX-' + Date.now().toString().slice(-6),
        patientName: 'Jean Baptiste Nkurunziza',
        doctorName: 'Dr. Sarah Mukamana',
        medications: [
          {
            name: 'Amoxicillin',
            dosage: '500mg',
            frequency: '3 times daily',
            duration: '7 days'
          },
          {
            name: 'Paracetamol',
            dosage: '500mg',
            frequency: 'As needed',
            duration: '5 days'
          }
        ],
        diagnosis: 'Upper Respiratory Infection',
        issueDate: new Date().toLocaleDateString()
      }
      setScanResult(mockResult)
      setIsScanning(false)
    } finally {
      setLoading(false)
    }
  }

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setLoading(true)
      // Simulate QR code extraction from image
      setTimeout(() => {
        const mockQRCode = "PRESCRIPTION_QR_UPLOAD_" + Date.now()
        handleQRScan(mockQRCode)
      }, 1500)
    }
  }

  const handleDispense = async () => {
    if (!scanResult) return
    
    setLoading(true)
    try {
      await apiService.dispensePrescription(scanResult.prescriptionId, 'PHARMACIST_001')
      alert('Prescription dispensed successfully!')
      setScanResult(null)
    } catch (error) {
      console.error('Dispensing failed:', error)
      alert('Failed to dispense prescription. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const resetScanner = () => {
    setIsScanning(false)
    setScanResult(null)
    setError(null)
  }

  return (
    <div className="card p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-blue-50 rounded-lg">
          <Scan className="w-6 h-6 text-blue-600" />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-900">QR Code Scanner</h2>
          <p className="text-gray-600">Scan prescription QR codes for quick processing</p>
        </div>
      </div>

      {!isScanning && !scanResult && (
        <div className="text-center py-12">
          <div className="w-32 h-32 mx-auto mb-6 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
            <Camera className="w-12 h-12 text-gray-400" />
          </div>
          
          <div className="space-y-4">
            <button
              onClick={handleStartScan}
              disabled={loading}
              className="btn-primary flex items-center gap-2 mx-auto"
            >
              <Camera size={16} />
              {loading ? 'Processing...' : 'Start QR Scan'}
            </button>
            
            <div className="flex items-center gap-4 justify-center">
              <div className="h-px bg-gray-300 flex-1 max-w-16"></div>
              <span className="text-sm text-gray-500">or</span>
              <div className="h-px bg-gray-300 flex-1 max-w-16"></div>
            </div>
            
            <button
              onClick={() => fileInputRef.current?.click()}
              disabled={loading}
              className="btn-secondary flex items-center gap-2 mx-auto"
            >
              <Upload size={16} />
              Upload QR Image
            </button>
            
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileUpload}
              className="hidden"
            />
          </div>
        </div>
      )}

      {isScanning && (
        <div className="text-center py-12">
          <div className="w-32 h-32 mx-auto mb-6 border-2 border-blue-500 rounded-lg flex items-center justify-center animate-pulse">
            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
          <p className="text-lg font-medium text-gray-900 mb-2">Scanning QR Code...</p>
          <p className="text-gray-600">Please hold the QR code steady</p>
          <button
            onClick={resetScanner}
            className="btn-secondary mt-4"
          >
            Cancel Scan
          </button>
        </div>
      )}

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-red-600" />
            <p className="text-red-800 font-medium">Scan Failed</p>
          </div>
          <p className="text-red-700 mt-1">{error}</p>
          <button
            onClick={resetScanner}
            className="btn-secondary mt-3"
          >
            Try Again
          </button>
        </div>
      )}

      {scanResult && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <div className="flex items-center gap-2 mb-4">
            <CheckCircle className="w-6 h-6 text-green-600" />
            <h3 className="text-lg font-semibold text-green-900">Prescription Scanned Successfully</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div>
                <label className="text-sm font-medium text-gray-700">Patient Name</label>
                <p className="text-gray-900">{scanResult.patientName}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Prescribed By</label>
                <p className="text-gray-900">{scanResult.doctorName}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Issue Date</label>
                <p className="text-gray-900">{scanResult.issueDate}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Diagnosis</label>
                <p className="text-gray-900">{scanResult.diagnosis}</p>
              </div>
            </div>
            
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">Medications</label>
              <div className="space-y-2">
                {scanResult.medications.map((med, index) => (
                  <div key={index} className="bg-white p-3 rounded border">
                    <p className="font-medium text-gray-900">{med.name}</p>
                    <p className="text-sm text-gray-600">
                      {med.dosage} • {med.frequency} • {med.duration}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="flex gap-3 mt-6">
            <button
              onClick={handleDispense}
              disabled={loading}
              className="btn-primary flex-1"
            >
              {loading ? 'Processing...' : 'Dispense Prescription'}
            </button>
            <button
              onClick={resetScanner}
              className="btn-secondary"
            >
              Scan Another
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default QRScanner
