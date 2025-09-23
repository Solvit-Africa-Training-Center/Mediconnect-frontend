import { apiSlice } from "../api/apiEntry";

export const qrCodeApi = apiSlice.injectEndpoints({
  endpoints:(builder)=>({
    getQrCodes: builder.query<any[], any>({
        query:(params)=>({
            url:"/api/v1/qr-codes",
            method:'GET',
            params
        }),
        providesTags: ['QrCode']
    }),
    generateQrCode: builder.mutation<any, string>({
        query:(prescriptionId)=>({
            url:`/api/v1/qr-codes/generate/${prescriptionId}`,
            method:'POST'
        }),
        invalidatesTags: ['QrCode']
    }),
    getQrCodeStats: builder.query({
        query:(qrHash)=>({
            url:`/api/v1/qr-codes/stats/${qrHash}`,
            method:'GET'
        })
    }),
    sendPrescriptionEmail: builder.mutation({
        query:(prescriptionId)=>({
            url:`/api/v1/qr-codes/email/${prescriptionId}`,
            method:'POST'
        })
    }),
    getQrCodeByPrescription: builder.query({
        query:(prescriptionId)=>({
            url:`/api/v1/qr-codes/${prescriptionId}`,
            method:'GET'
        })
    })
  })
})

export const {
  useGetQrCodesQuery,
  useGenerateQrCodeMutation,
  useGetQrCodeStatsQuery,
  useSendPrescriptionEmailMutation,
  useGetQrCodeByPrescriptionQuery
} = qrCodeApi