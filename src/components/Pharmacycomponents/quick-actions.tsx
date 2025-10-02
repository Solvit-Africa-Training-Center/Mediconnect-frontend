import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { QrCode, CreditCard } from "lucide-react"

export function QuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <QrCode className="w-5 h-5 text-blue-600" />
          Quick Actions
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Button className="h-16 bg-blue-600 hover:bg-blue-700 text-white">
            <QrCode className="w-5 h-5 mr-2" />
            Scan New Prescription
          </Button>
          <Button variant="outline" className="h-16 bg-transparent">
            <CreditCard className="w-5 h-5 mr-2" />
            Dispensed Records
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
