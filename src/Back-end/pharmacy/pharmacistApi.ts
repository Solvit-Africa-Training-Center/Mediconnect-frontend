import { apiSlice } from "../api/apiEntry";

export const pharmacistApi = apiSlice.injectEndpoints({
  endpoints:(builder)=>({
    registerPharmacist: builder.mutation({
        query:(data)=>({
            url:"/api/v1/pharmacists/register",
            method:'POST',
            body:data
        }) 
    }),
    getPharmacists: builder.query({
        query:()=>({
            url:"/api/v1/pharmacists",
            method:'GET'
        })
    }),
    getPharmacistById: builder.query({
        query:(pharmacistId)=>({
            url:`/api/v1/pharmacists/${pharmacistId}`,
            method:'GET'
        })
    }),
    updatePharmacist: builder.mutation({
        query:({pharmacistId, data})=>({
            url:`/api/v1/pharmacists/${pharmacistId}`,
            method:'PUT',
            body:data
        })
    }),
    deletePharmacist: builder.mutation({
        query:(pharmacistId)=>({
            url:`/api/v1/pharmacists/${pharmacistId}`,
            method:'DELETE'
        })
    })
  })
})

export const {
  useRegisterPharmacistMutation,
  useGetPharmacistsQuery,
  useGetPharmacistByIdQuery,
  useUpdatePharmacistMutation,
  useDeletePharmacistMutation
} = pharmacistApi