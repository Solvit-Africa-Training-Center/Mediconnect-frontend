import { Eye, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface DispensedRecordCardProps {
  record: {
    patientName: string
    patientId: string
    reference: string
    insurance: {
      provider: string
      policy: string
      coverage: number
      copay: string
    }
    digitalOrdinance: {
      id: string
      prescriber: string
      medicineCount: number
    }
    dispensing: {
      date: string
      time: string
      recorded: string
      total: string
      pharmacist: string
    }
    status: "Completed" | "Pending" | "Rejected"
  }
}

export function DispensedRecordCard({ record }: DispensedRecordCardProps) {
  const getCoverageColor = (coverage: number) => {
    if (coverage >= 85) return "bg-green-100 text-green-700"
    if (coverage >= 70) return "bg-blue-100 text-blue-700"
    return "bg-yellow-100 text-yellow-700"
  }

  return (
    <div className="bg-white border rounded-lg p-6 hover:shadow-md transition-shadow">
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
        {/* Patient Information */}
        <div className="lg:col-span-1">
          <h4 className="text-xs font-medium text-gray-500 mb-2">Patient Information</h4>
          <div className="space-y-1">
            <p className="font-semibold text-blue-600">{record.patientName}</p>
            <p className="text-sm text-gray-600">Patient ID:</p>
            <p className="text-sm">{record.patientId}</p>
            <p className="text-sm text-gray-600">Reference: {record.reference}</p>
          </div>
        </div>

        {/* Insurance Coverage */}
        <div className="lg:col-span-1">
          <h4 className="text-xs font-medium text-gray-500 mb-2">Insurance Coverage</h4>
          <div className="space-y-1">
            <p className="font-semibold text-green-600">{record.insurance.provider}</p>
            <p className="text-sm text-gray-600">Policy: {record.insurance.policy}</p>
            <Badge className={getCoverageColor(record.insurance.coverage)}>
              Coverage: {record.insurance.coverage}%
            </Badge>
            <p className="text-sm font-medium mt-2">Patient Copay: {record.insurance.copay}</p>
          </div>
        </div>

        {/* Digital Ordinance */}
        <div className="lg:col-span-1">
          <h4 className="text-xs font-medium text-gray-500 mb-2">Digital Ordinance</h4>
          <div className="space-y-1">
            <p className="font-semibold text-blue-600">{record.digitalOrdinance.id}</p>
            <p className="text-sm text-gray-600">Prescribed by: {record.digitalOrdinance.prescriber}</p>
            <p className="text-sm text-gray-600">{record.digitalOrdinance.medicineCount} medicines prescribed</p>
          </div>
        </div>

        {/* Dispensing Timeline */}
        <div className="lg:col-span-2">
          <h4 className="text-xs font-medium text-gray-500 mb-2">Dispensing Timeline</h4>
          <div className="bg-blue-50 rounded p-3 space-y-1">
            <p className="text-sm font-semibold text-blue-700">Dispensed: {record.dispensing.date}</p>
            <p className="text-sm">Time: {record.dispensing.time}</p>
            <p className="text-xs text-gray-600">Recorded: {record.dispensing.recorded}</p>
            <p className="text-sm font-semibold mt-2">Total: {record.dispensing.total}</p>
            <p className="text-xs text-gray-600">Pharmacist: {record.dispensing.pharmacist}</p>
          </div>
        </div>

        {/* Status & Actions */}
        <div className="lg:col-span-1 flex flex-col justify-between">
          <div>
            <h4 className="text-xs font-medium text-gray-500 mb-2">Status</h4>
            <Badge className="bg-green-100 text-green-700">{record.status}</Badge>
          </div>

          <div className="mt-4">
            <h4 className="text-xs font-medium text-gray-500 mb-2">Actions</h4>
            <div className="flex gap-2">
              <Button size="icon" variant="outline">
                <Eye className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="outline">
                <Download className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
