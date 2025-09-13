import { apiSlice } from "../api/apiEntry";


export const doctorApi = apiSlice.injectEndpoints({
  endpoints:(builder)=>({
    registerDoctor: builder.mutation({
        query:(data)=>({
            url:"/api/v1/doctors/register",
            method:'POST',
            body:data
        })
    }),
    getDoctors: builder.query({
        query:()=>({
            url:"/api/v1/doctors",
            method:'GET'
        })
    }),
    getDoctorById: builder.query({
        query:(doctorId)=>({
            url:`/api/v1/doctors/${doctorId}`,
            method:'GET'
        })
    }),
    updateDoctor: builder.mutation({
        query:({doctorId, data})=>({
            url:`/api/v1/doctors/${doctorId}`,
            method:'PUT',
            body:data
        })
    }),
    deleteDoctor: builder.mutation({
        query:(doctorId)=>({
            url:`/api/v1/doctors/${doctorId}`,
            method:'DELETE'
        })
    })
  })
})

export const {
  useRegisterDoctorMutation,
  useGetDoctorsQuery,
  useGetDoctorByIdQuery,
  useUpdateDoctorMutation,
  useDeleteDoctorMutation
} = doctorApi