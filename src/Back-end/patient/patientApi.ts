import { apiSlice } from "../api/apiEntry";
import type { Patient, MedicalVisit } from "../../Types";

export const patientApi = apiSlice.injectEndpoints({
  endpoints:(builder)=>({
    getPatients: builder.query<number, void>({
        query:()=>({
            url:"/api/v1/patients",
            method:'GET'
        }),
        transformResponse: (response: { success: boolean; data: Patient[]; pagination: { total: number } }) => {
        return response.pagination.total}
        ,
        providesTags: ['Patient']
    }),
    registerPatient: builder.mutation<Patient, Partial<Patient>>({
        query:(data)=>({
            url:"/patients/register",
            method:'POST',
            body:data
        }),
        invalidatesTags: ['Patient']
    }),
    searchPatients: builder.query<Patient[], { query: string }>({
      query: ({ query }) => ({
        url: "/api/v1/patients/search",
        method: "GET",
        params: { query }
    }),
    providesTags: ["Patient"],
    }),
    getPatientByReference: builder.query({
        query:(referenceNumber)=>({
            url:`/api/v1/patients/reference/${referenceNumber}`,
            method:'GET'
        })
    }),
    getPatientById: builder.query({
        query:(patientId)=>({
            url:`/api/v1/patients/${patientId}`,
            method:'GET'
        })
    }),
    updatePatient: builder.mutation({
        query:({patientId, data})=>({
            url:`/api/v1/patients/${patientId}`,
            method:'PUT',
            body:data
        })
    }),
    getPatientHistory: builder.query({
        query:(patientId)=>({
            url:`/api/v1/patients/${patientId}/history`,
            method:'GET'
        })
    }),
    createMedicalVisit: builder.mutation<MedicalVisit, {patientId: string, data: Partial<MedicalVisit>}>({
        query:({patientId, data})=>({
            url:`/api/v1/patients/${patientId}/visits`,
            method:'POST',
            body:data
        }),
        invalidatesTags: ['Patient']
    }),
    createPrescription: builder.mutation({
        query:({patientId, data})=>({
            url:`/api/v1/patients/${patientId}/prescriptions`,
            method:'POST',
            body:data
        })
    }),
    getPatientPrescriptions: builder.query({
        query:(patientId)=>({
            url:`/api/v1/patients/${patientId}/prescriptions`,
            method:'GET'
        })
    })
  })
})

export const {
  useGetPatientsQuery,
  useRegisterPatientMutation,
  useSearchPatientsQuery,
  useGetPatientByReferenceQuery,
  useGetPatientByIdQuery,
  useUpdatePatientMutation,
  useGetPatientHistoryQuery,
  useCreateMedicalVisitMutation,
  useCreatePrescriptionMutation,
  useGetPatientPrescriptionsQuery
} = patientApi