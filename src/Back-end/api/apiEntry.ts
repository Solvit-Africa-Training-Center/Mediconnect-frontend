import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import type { BaseQueryFn, FetchArgs, FetchBaseQueryError } from "@reduxjs/toolkit/query"

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_BASE_URL,
  prepareHeaders: (headers) => {
    const token = localStorage.getItem("token")
    if (token) {
      headers.set("authorization", `Bearer ${token}`)
    }
    return headers
  },
})

const baseQueryWithErrorHandling: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions)
  
  if (result.error && result.error.status === 401) {
    localStorage.removeItem("token")
    window.location.href = "/unauthorized"
  }
  
  return result
}

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithErrorHandling,
  tagTypes: ['Patient', 'Doctor', 'Pharmacist', 'Prescription', 'QrCode', 'PharmacyOperation', 'Auth'],
  endpoints: () => ({ }),
})
