import { Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function ManualEntry() {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-8">
      <div className="flex items-center gap-2 mb-6">
        <Clock className="w-5 h-5 text-green-600" />
        <h2 className="text-xl font-semibold text-gray-900">Manual Entry</h2>
      </div>

      <div className="space-y-4">
        <div>
          <Label htmlFor="prescription-id" className="text-sm font-medium text-gray-700 mb-2 block">
            Prescription Reference ID
          </Label>
          <Input id="prescription-id" type="text" placeholder="Enter prescription reference ID..." className="w-full" />
        </div>

        <Button className="bg-blue-400 hover:bg-blue-500 text-white px-6 py-2 rounded-lg">Retrieve Prescription</Button>
      </div>
    </div>
  )
}
