import { apiSlice } from "../api/apiEntry";

export const patientApi = apiSlice.injectEndpoints({
  endpoints:(builder)=>({
    getPatients: builder.query({
        query:()=>({
            url:"/api/v1/patients",
            method:'GET'
        })
    }),
    registerPatient: builder.mutation({
        query:(data)=>({
            url:"/api/v1/patients/register",
            method:'POST',
            body:data
        }) 
    }),
    searchPatients: builder.query({
        query:(searchParams)=>{
            console.log('Search params:', searchParams)
            return {
                url:"/api/v1/patients/search",
                method:'GET',
                params: searchParams
            }
        }
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
    createMedicalVisit: builder.mutation({
        query:({patientId, data})=>({
            url:`/api/v1/patients/${patientId}/visits`,
            method:'POST',
            body:data
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