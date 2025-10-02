import { Sidebar } from "@/components/sidebar"
import { DashboardHeader } from "@/components/dashboard-header"
import { QrScanner } from "@/components/qr-scanner"
import { ManualEntry } from "@/components/manual-entry"

export default function ScanQrCodePage() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      <main className="flex-1">
        <DashboardHeader title="Scan Prescription" />

        <div className="p-8 space-y-6">
          <QrScanner />
          <ManualEntry />
        </div>
      </main>
    </div>
  )
}
