
import type React from "react"

import { Plus } from "lucide-react"
import { useState } from "react"

interface Medicine {
  id: string
  name: string
  dosage: string
  frequency: string
  duration: string
  instructions: string
}

interface AddMedicineFormProps {
  onAddMedicine: (medicine: Medicine) => void
  medicineCount: number
}

const AddMedicineForm = ({ onAddMedicine, medicineCount }: AddMedicineFormProps) => {
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    dosage: "",
    frequency: "",
    duration: "",
    instructions: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.name && formData.dosage && formData.frequency && formData.duration) {
      onAddMedicine({
        id: (medicineCount + 1).toString(),
        ...formData,
      })
      setFormData({
        name: "",
        dosage: "",
        frequency: "",
        duration: "",
        instructions: "",
      })
      setShowForm(false)
    }
  }

  if (!showForm) {
    return (
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="mb-4">
          <h3 className="text-lg font-medium text-gray-900 mb-1">Prescription Medicines</h3>
          <p className="text-sm text-gray-500">Add multiple medicines to the prescription with dosage and instructions</p>
        </div>
        
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
        >
          <Plus size={18} />
          Add First Medicine
        </button>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="mb-4">
        <h3 className="text-lg font-medium text-gray-900 mb-1">Prescription Medicines</h3>
        <p className="text-sm text-gray-500">Add multiple medicines to the prescription with dosage and instructions</p>
      </div>

      <div className="mb-4">
        <h4 className="text-base font-medium text-gray-900 mb-4 flex items-center gap-2">
          Add First Medicine
          <Plus size={16} className="text-blue-600" />
        </h4>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Medicine Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g., Amoxicillin"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3 py-2.5 bg-purple-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Dosage <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g., 500mg"
                value={formData.dosage}
                onChange={(e) => setFormData({ ...formData, dosage: e.target.value })}
                className="w-full px-3 py-2.5 bg-purple-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Frequency <span className="text-red-500">*</span>
              </label>
              <select
                value={formData.frequency}
                onChange={(e) => setFormData({ ...formData, frequency: e.target.value })}
                className="w-full px-3 py-2.5 bg-purple-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700"
                required
              >
                <option value="">Select frequency</option>
                <option value="once daily">Once daily</option>
                <option value="twice daily">Twice daily</option>
                <option value="three times daily">Three times daily</option>
                <option value="four times daily">Four times daily</option>
                <option value="as needed">As needed</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Duration <span className="text-red-500">*</span>
              </label>
              <select
                value={formData.duration}
                onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                className="w-full px-3 py-2.5 bg-purple-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700"
                required
              >
                <option value="">Select duration</option>
                <option value="3 days">3 days</option>
                <option value="5 days">5 days</option>
                <option value="7 days">7 days</option>
                <option value="10 days">10 days</option>
                <option value="14 days">14 days</option>
                <option value="30 days">30 days</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Special Instructions</label>
            <input
              type="text"
              placeholder="e.g., Take with food"
              value={formData.instructions}
              onChange={(e) => setFormData({ ...formData, instructions: e.target.value })}
              className="w-full px-3 py-2.5 bg-purple-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-lg flex items-center justify-center gap-2 font-medium transition-colors"
          >
            <Plus size={16} />
            Add First Medicine
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddMedicineForm