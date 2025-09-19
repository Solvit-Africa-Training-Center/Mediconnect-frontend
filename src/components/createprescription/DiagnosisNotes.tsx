import { usePrescription } from "../../contexts/PrescriptionContext"

const DiagnosisNotes = () => {
  const { prescription, setDiagnosis, setInstructions } = usePrescription()

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h3 className="text-lg font-semibold text-[#29333D] mb-2">Diagnosis & Notes</h3>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-[#29333D] mb-2">Diagnosis *</label>
          <textarea
            placeholder="Enter primary diagnosis..."
            rows={3}
            value={prescription.diagnosis}
            onChange={(e) => setDiagnosis(e.target.value)}
            className="w-full px-4 py-3 border border-[#D3D9DE] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0C7AE9] focus:border-transparent resize-none"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-[#29333D] mb-2">Additional Instructions</label>
          <textarea
            placeholder="Enter additional instructions for the patient..."
            rows={3}
            value={prescription.instructions}
            onChange={(e) => setInstructions(e.target.value)}
            className="w-full px-4 py-3 border border-[#D3D9DE] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0C7AE9] focus:border-transparent resize-none"
          />
        </div>
      </div>
    </div>
  )
}

export default DiagnosisNotes
