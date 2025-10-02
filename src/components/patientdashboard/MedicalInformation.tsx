import type React from "react";
import { Heart, AlertTriangle } from "lucide-react";
import { useGetPatientByUserIdQuery } from "../../Back-end/patient/patientApi";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

const MedicalInformation: React.FC = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const userId = user?.id;
  const { data: patient, isLoading, error } = useGetPatientByUserIdQuery(userId, {
    skip: !userId,
  });

  if (isLoading) {
    return (
      <div className="bg-white rounded-lg p-6 shadow-sm animate-pulse">
        <div className="h-6 bg-gray-200 rounded mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/3 mb-6"></div>
        <div className="space-y-4">
          <div className="h-12 bg-gray-200 rounded"></div>
          <div className="h-12 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <div className="text-red-600 text-center">Failed to load medical information</div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex items-center gap-4 mb-6">
        <Heart className="w-5 h-5 text-green-500" />
        <h2 className="text-lg font-semibold text-[#29333D]">Medical Information</h2>
        <span className="ml-auto text-xs bg-[#D3D9DE] px-2 py-1 rounded text-[#29333D]">Doctor Editable Only</span>
      </div>

      {/* Chronic Diseases */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-3">
          <Heart className="w-4 h-4 text-green-500" />
          <h3 className="font-medium text-[#29333D]">Chronic Diseases</h3>
        </div>
        <div className="space-y-3">
          {patient?.chronicDiseases?.length > 0 ? (
            patient.chronicDiseases.map((disease, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-[#29333D]">{disease.name}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <div className={`w-2 h-2 ${disease.status === 'Well controlled' ? 'bg-green-500' : 'bg-yellow-500'} rounded-full`}></div>
                    <span className="text-sm text-[#29333D] opacity-70">{disease.status}</span>
                  </div>
                </div>
                <span className={`px-2 py-1 rounded text-xs font-medium ${disease.severity === 'Moderate' ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700'}`}>{disease.severity}</span>
              </div>
            ))
          ) : (
            <p className="text-sm text-gray-500">No chronic diseases reported.</p>
          )}
        </div>
      </div>

      {/* Allergies & Reactions */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <AlertTriangle className="w-4 h-4 text-red-500" />
          <h3 className="font-medium text-[#29333D]">Allergies & Reactions</h3>
        </div>
        <div className="space-y-2">
          {patient?.allergies?.length > 0 ? (
            patient.allergies.map((allergy, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <span className={`text-white px-2 py-1 rounded text-xs font-medium ${allergy.type === 'Medicine' ? 'bg-red-500' : 'bg-orange-500'}`}>{allergy.type}</span>
                  <span className="font-medium text-[#29333D]">{allergy.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-[#29333D] opacity-70">{allergy.reaction}</span>
                  <AlertTriangle className="w-4 h-4 text-red-500" />
                </div>
              </div>
            ))
          ) : (
            <p className="text-sm text-gray-500">No allergies reported.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MedicalInformation
