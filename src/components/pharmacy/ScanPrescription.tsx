import React from 'react'
import QRScanner from './QrScanner'
import ManualEntry from './ManualEntry'

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
