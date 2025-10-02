import { usePrescription } from "../../contexts/PrescriptionContext"

const DiagnosisAndInstructions = () => {
  const { prescription, setPrescription } = usePrescription()

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-[#29333D]">Diagnosis & Instructions</h3>
        <p className="text-sm text-gray-500">Provide a diagnosis and any special instructions for the patient.</p>
      </div>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Hospital Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="e.g., King Faisal Hospital"
            value={prescription.hospitalName}
            onChange={(e) => setPrescription({ ...prescription, hospitalName: e.target.value })}
            className="w-full px-3 py-2.5 bg-purple-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Diagnosis <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="e.g., Acute Bronchitis"
            value={prescription.diagnosis}
            onChange={(e) => setPrescription({ ...prescription, diagnosis: e.target.value })}
            className="w-full px-3 py-2.5 bg-purple-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Doctor's Notes</label>
          <textarea
            placeholder="e.g., Patient should rest for 3 days and drink plenty of fluids."
            value={prescription.instructions}
            onChange={(e) => setPrescription({ ...prescription, instructions: e.target.value })}
            className="w-full px-3 py-2.5 bg-purple-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500 min-h-[100px]"
          />
        </div>
      </div>
    </div>
  )
}

export default DiagnosisAndInstructions