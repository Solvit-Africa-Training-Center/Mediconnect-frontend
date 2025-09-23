import { apiSlice } from "../api/apiEntry";
import type { Pharmacist } from "../../Types";

export const pharmacistApi = apiSlice.injectEndpoints({
  endpoints:(builder)=>({
    registerPharmacist: builder.mutation<Pharmacist, Partial<Pharmacist>>({
        query:(data)=>({
            url:"/api/v1/pharmacists/register",
            method:'POST',
            body:data
        }),
        invalidatesTags: ['Pharmacist']
    }),
    getPharmacists: builder.query<Pharmacist[], void>({
        query:()=>({
            url:"/api/v1/pharmacists",
            method:'GET'
        }),
        providesTags: ['Pharmacist']
    }),
    getPharmacistById: builder.query<Pharmacist, string>({
        query:(pharmacistId)=>({
            url:`/api/v1/pharmacists/${pharmacistId}`,
            method:'GET'
        }),
        providesTags: ['Pharmacist']
    }),
    updatePharmacist: builder.mutation<Pharmacist, {pharmacistId: string, data: Partial<Pharmacist>}>({
        query:({pharmacistId, data})=>({
            url:`/api/v1/pharmacists/${pharmacistId}`,
            method:'PUT',
            body:data
        }),
        invalidatesTags: ['Pharmacist']
    }),
    deletePharmacist: builder.mutation<void, string>({
        query:(pharmacistId)=>({
            url:`/api/v1/pharmacists/${pharmacistId}`,
            method:'DELETE'
        }),
        invalidatesTags: ['Pharmacist']
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