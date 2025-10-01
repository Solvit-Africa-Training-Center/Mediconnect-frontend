import { apiSlice } from "../api/apiEntry";
import type { Patient } from "../../Types/patient/patient.types";

export const patientApi = apiSlice.injectEndpoints({
  endpoints:(builder)=>({
    getPatients: builder.query<Patient[], void>({
        query:()=>({
            url:"/api/v1/patients",
            method:'GET'
        }),
        transformResponse: (response: { success: boolean; data: Patient[] }) => response.data
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
    transformResponse: (response: { success: boolean; data: Patient[] }) => {
      return response.data
    },
    providesTags: ["Patient"],
    }),
    getPatientByReference: builder.query({
        query:(referenceNumber)=>({
            url:`/patients/reference/${referenceNumber}`,
            method:'GET'
        })
    }),
    getPatientById: builder.query({
        query:(patientId)=>({
            url:`/patients/${patientId}`,
            method:'GET'
        })
    }),
    updatePatient: builder.mutation({
        query:({patientId, data})=>({
            url:`/patients/${patientId}`,
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
        }),
        providesTags: ["Patient"]
    }),
    getPrescriptions: builder.query<any[], void>({
        query:()=>({
            url:`/api/v1/prescriptions`,
            method:'GET'
        }),
        transformResponse: (response: { success: boolean; data: any[] }) => response.data,
        providesTags: ["Patient"]
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
  useCreatePrescriptionMutation,
  useGetPatientPrescriptionsQuery,
  useGetPrescriptionsQuery
} = patientApi