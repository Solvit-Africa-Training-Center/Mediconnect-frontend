import { apiSlice } from "../api/apiEntry"

export const doctorApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getDoctorStats: builder.query({
      query: () => "/doctor/stats",
    }),
  }),
})

export const { useGetDoctorStatsQuery } = doctorApi