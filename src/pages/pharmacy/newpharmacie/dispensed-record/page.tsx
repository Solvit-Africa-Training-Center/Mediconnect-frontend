import { Sidebar } from "@/components/Pharmacycomponents/sidebar"
import { DashboardHeader } from "@/components/Pharmacycomponents/dashboard-header"
import { SearchFilter } from "@/components/Pharmacycomponents/search-filter"
import { DispensedRecordCard } from "@/components/Pharmacycomponents/dispensed-record-card"
import { FileText, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

const dispensedRecords = [
  {
    patientName: "Jean Baptiste Nkunrunziza",
    patientId: "ID123456789",
    reference: "RX-2024-001547",
    insurance: {
      provider: "RSSB",
      policy: "RSSB-2024-7891234",
      coverage: 85,
      copay: "RWF 3,750",
    },
    digitalOrdinance: {
      id: "DO-RW-2024-001547",
      prescriber: "Dr. Dr. Sarah Mukamana",
      medicineCount: 2,
    },
    dispensing: {
      date: "2024-01-15",
      time: "14:30",
      recorded: "1/15/2024, 2:32:13 PM",
      total: "RWF 25,000",
      pharmacist: "Grace Uwimana",
    },
    status: "Completed" as const,
  },
  {
    patientName: "Marie Claire Uwizeyimana",
    patientId: "ID987654321",
    reference: "RX-2024-001548",
    insurance: {
      provider: "MMI",
      policy: "MMI-2024-5567890",
      coverage: 90,
      copay: "RWF 1,850",
    },
    digitalOrdinance: {
      id: "DO-RW-2024-001548",
      prescriber: "Dr. Dr. Patrick Muhire",
      medicineCount: 3,
    },
    dispensing: {
      date: "2024-01-15",
      time: "15:45",
      recorded: "1/15/2024, 3:47:32 PM",
      total: "RWF 18,500",
      pharmacist: "Grace Uwimana",
    },
    status: "Completed" as const,
  },
  {
    patientName: "Emmanuel Habimana",
    patientId: "ID456789123",
    reference: "RX-2024-001549",
    insurance: {
      provider: "RADIANT",
      policy: "RADIANT-2024-3344556",
      coverage: 80,
      copay: "RWF 2,400",
    },
    digitalOrdinance: {
      id: "DO-RW-2024-001549",
      prescriber: "Dr. Dr. Olive Uwimana",
      medicineCount: 1,
    },
    dispensing: {
      date: "2024-01-14",
      time: "11:20",
      recorded: "1/14/2024, 11:22:05 AM",
      total: "RWF 12,000",
      pharmacist: "Grace Uwimana",
    },
    status: "Completed" as const,
  },
]

export default function DispensedRecordPage() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      <div className="flex-1 ml-64">
        <DashboardHeader title="Dispensed Prescription" />

        <main className="p-8 space-y-6">
          {/* Header Section */}
          <div className="bg-white rounded-lg border p-6">
            <div className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-blue-600" />
              <h2 className="text-lg font-semibold">Dispensed Prescription Records</h2>
            </div>
          </div>

          {/* Search & Filter */}
          <SearchFilter />

          {/* Records Section */}
          <div className="bg-white rounded-lg border p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold">Dispensed Records ({dispensedRecords.length})</h2>
              <Button variant="outline" className="gap-2 bg-transparent">
                <Download className="h-4 w-4" />
                Export Records
              </Button>
            </div>

            <div className="space-y-4">
              {dispensedRecords.map((record, index) => (
                <DispensedRecordCard key={index} record={record} />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
