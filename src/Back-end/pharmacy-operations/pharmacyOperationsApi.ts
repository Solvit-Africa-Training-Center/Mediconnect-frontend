import { apiSlice } from "../api/apiEntry";

export const pharmacyOperationsApi = apiSlice.injectEndpoints({
  endpoints:(builder)=>({
    scanQrCode: builder.mutation<any, {qrData: string}>({
        query:(data)=>({
            url:"/api/v1/pharmacy/scan",
            method:'POST',
            body:data
        }),
        invalidatesTags: ['PharmacyOperation']
    }),
    validatePrescription: builder.mutation<any, string>({
        query:(prescriptionId)=>({
            url:`/api/v1/pharmacy/validate/${prescriptionId}`,
            method:'POST'
        }),
        invalidatesTags: ['PharmacyOperation', 'Prescription']
    }),
    dispensePrescription: builder.mutation<any, string>({
        query:(prescriptionId)=>({
            url:`/api/v1/pharmacy/dispense/${prescriptionId}`,
            method:'POST'
        }),
        invalidatesTags: ['PharmacyOperation', 'Prescription']
    }),
    rejectPrescription: builder.mutation<any, string>({
        query:(prescriptionId)=>({
            url:`/api/v1/pharmacy/reject/${prescriptionId}`,
            method:'POST'
        }),
        invalidatesTags: ['PharmacyOperation', 'Prescription']
    }),
    getPrescriptionLogs: builder.query({
        query:(prescriptionId)=>({
            url:`/api/v1/pharmacy/logs/${prescriptionId}`,
            method:'GET'
        })
    }),
    getPharmacistHistory: builder.query({
        query:(params)=>({
            url:"/api/v1/pharmacy/history",
            method:'GET',
            params
        })
    }),
    checkQrScanStatus: builder.query({
        query:(qrHash)=>({
            url:`/api/v1/pharmacy/scan-status/${qrHash}`,
            method:'GET'
        })
    }),
    getDispensingHistory: builder.query({
        query:(prescriptionId)=>({
            url:`/api/v1/pharmacy/dispensing-history/${prescriptionId}`,
            method:'GET'
        })
    }),
    getDispensingSummary: builder.query({
        query:(prescriptionId)=>({
            url:`/api/v1/pharmacy/dispensing-summary/${prescriptionId}`,
            method:'GET'
        })
    })
  })
})

export const {
  useScanQrCodeMutation,
  useValidatePrescriptionMutation,
  useDispensePrescriptionMutation,
  useRejectPrescriptionMutation,
  useGetPrescriptionLogsQuery,
  useGetPharmacistHistoryQuery,
  useCheckQrScanStatusQuery,
  useGetDispensingHistoryQuery,
  useGetDispensingSummaryQuery
} = pharmacyOperationsApi