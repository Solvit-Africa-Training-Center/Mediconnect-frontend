
import { Search, Filter } from "lucide-react"
import { Input } from "@/components/ui/Input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function SearchFilter() {
  return (
    <div className="bg-white rounded-lg border p-6">
      <div className="flex items-center gap-2 mb-4">
        <Filter className="h-5 w-5 text-green-600" />
        <h2 className="text-lg font-semibold">Search & Filter Records</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
        <div className="md:col-span-1">
          <label className="text-sm text-gray-600 mb-2 block">Search Patient/Reference</label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input placeholder="Patient name, Reference ID..." className="pl-9" />
          </div>
        </div>

        <div className="md:col-span-1">
          <label className="text-sm text-gray-600 mb-2 block">Dispensed Date</label>
          <Input type="date" placeholder="mm/dd/yyyy" />
        </div>

        <div className="md:col-span-1">
          <label className="text-sm text-gray-600 mb-2 block">Insurance Provider</label>
          <Select defaultValue="all">
            <SelectTrigger>
              <SelectValue placeholder="All Providers" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Providers</SelectItem>
              <SelectItem value="rssb">RSSB</SelectItem>
              <SelectItem value="mmi">MMI</SelectItem>
              <SelectItem value="radiant">RADIANT</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="md:col-span-1">
          <Button variant="outline" className="w-full bg-transparent">
            Clear Filters
          </Button>
        </div>
      </div>
    </div>
  )
}
