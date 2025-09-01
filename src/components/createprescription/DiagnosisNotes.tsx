const DiagnosisNotes = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h3 className="text-lg font-semibold text-[#29333D] mb-2">Diagnosis & Notes</h3>

      <textarea
        placeholder="Enter diagnosis, symptoms, and additional notes..."
        rows={6}
        className="w-full px-4 py-3 border border-[#D3D9DE] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0C7AE9] focus:border-transparent resize-none"
      />
    </div>
  )
}

export default DiagnosisNotes
