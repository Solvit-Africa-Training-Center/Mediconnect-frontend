import { Plus, Users, History } from "lucide-react"
import QuickActionButton from "./QuickActionButton"

const QuickActionsSection = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">Quick Actions</h3>
      <p className="text-gray-600 mb-6">Frequently used features</p>

      <div className="space-y-3">
        <QuickActionButton
          title="Create New Prescription"
          description="Write a new prescription"
          icon={Plus}
          variant="primary"
        />

        <QuickActionButton title="Patient Records" description="View patient history" icon={Users} />

        <QuickActionButton title="Prescription History" description="Review past prescriptions" icon={History} />
      </div>
    </div>
  )
}

export default QuickActionsSection
