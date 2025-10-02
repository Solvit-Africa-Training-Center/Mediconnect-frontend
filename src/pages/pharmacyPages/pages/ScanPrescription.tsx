import React from 'react'
import QRScanner from '@/components/pharmacy/QrScanner'
import ManualEntry from '@/components/pharmacy/ManualEntry'

const ScanPrescription: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* QR Scanner */}
      <QRScanner />

      {/* Manual Entry */}
      <ManualEntry />
    </div>
  )
}

export default ScanPrescription
