import { FileText, User, Calendar, Download, Eye } from "lucide-react"
import { useGetPrescriptionsQuery } from "../../Back-end/patient/patientApi"

const PrescriptionTable = () => {
  const { data: prescriptions, isLoading, isError } = useGetPrescriptionsQuery()

  return (
    <div style={{ backgroundColor: "#FFFFFF" }} className="rounded-xl shadow-sm">
      <div className="p-6 border-b" style={{ borderColor: "#D3D9DE" }}>
        <h3 className="text-lg font-semibold" style={{ color: "#131A20" }}>
          All Prescriptions
        </h3>
        <p className="text-sm" style={{ color: "#29333D" }}>
          {`Showing ${prescriptions?.length || 0} of ${prescriptions?.length || 0} prescriptions`}
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead style={{ backgroundColor: "#D3D9DE", opacity: 0.3 }}>
            <tr>
              <th
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                style={{ color: "#29333D" }}
              >
                Prescription ID
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                style={{ color: "#29333D" }}
              >
                Patient
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                style={{ color: "#29333D" }}
              >
                Date
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                style={{ color: "#29333D" }}
              >
                Diagnosis
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                style={{ color: "#29333D" }}
              >
                Medicines
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                style={{ color: "#29333D" }}
              >
                Actions
              </th>
            </tr>
          </thead>
          {isLoading ? (
            <tbody>
              <tr>
                <td colSpan={6} className="text-center py-10">
                  <p className="text-gray-500">Loading prescriptions...</p>
                </td>
              </tr>
            </tbody>
          ) : isError ? (
            <tbody>
              <tr>
                <td colSpan={6} className="text-center py-10">
                  <p className="text-red-500">Failed to load prescriptions.</p>
                </td>
              </tr>
            </tbody>
          ) : (
            <tbody className="divide-y" style={{ backgroundColor: "#FFFFFF", borderColor: "#D3D9DE" }}>
              {prescriptions?.map((prescription: any) => (
                <tr key={prescription.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <FileText className="w-4 h-4 mr-2" style={{ color: "#0C7AE9" }} />
                      <span className="text-sm font-medium" style={{ color: "#0C7AE9" }}>
                        {prescription.referenceNumber}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-2" style={{ color: "#29333D" }} />
                      <div>
                        <div className="text-sm font-medium" style={{ color: "#131A20" }}>
                          {prescription.patient.fullName}
                        </div>
                        <div className="text-sm" style={{ color: "#29333D" }}>
                          {prescription.patient.referenceNumber}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" style={{ color: "#29333D" }} />
                      <span className="text-sm" style={{ color: "#131A20" }}>
                        {new Date(prescription.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm" style={{ color: "#131A20" }}>
                      {prescription.diagnosis}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm" style={{ color: "#131A20" }}>
                      {prescription.medications.length} medicines
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-2">
                      <button className="p-1 rounded hover:bg-gray-100" style={{ color: "#0C7AE9" }}>
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-1 rounded hover:bg-gray-100" style={{ color: "#29333D" }}>
                        <Download className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>

      <div className="px-6 py-4 border-t flex items-center justify-center" style={{ borderColor: "#D3D9DE" }}>
        <div className="flex items-center space-x-2">
          <button className="px-3 py-1 rounded text-sm" style={{ color: "#29333D" }}>
            ‹
          </button>
          <button
            className="px-3 py-1 rounded text-sm font-medium"
            style={{ backgroundColor: "#0C7AE9", color: "#FFFFFF" }}
          >
            1
          </button>
          <button className="px-3 py-1 rounded text-sm" style={{ color: "#29333D" }}>
            ›
          </button>
        </div>
      </div>
    </div>
  )
}

export default PrescriptionTable
