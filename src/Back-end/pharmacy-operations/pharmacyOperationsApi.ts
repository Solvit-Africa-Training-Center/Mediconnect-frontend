import { apiSlice } from "../api/apiEntry";

// Define basic types for API responses. You should expand these
// to match your actual API data structure.
interface QrScanResponse {
  success: boolean;
  prescriptionId: string;
  message: string;
}

interface PrescriptionActionResponse {
  success: boolean;
  message: string;
}

interface PrescriptionLog {
  id: string;
  action: string;
  timestamp: string;
  actor: string;
}

interface PharmacistHistoryItem {
  id: string;
  date: string;
  action: string;
  details: string;
}

export const pharmacyOperationsApi = apiSlice.injectEndpoints({
  endpoints:(builder)=>({
    scanQrCode: builder.mutation<QrScanResponse, {qrData: string}>({
        query:(data)=>({
            url:"/api/v1/pharmacy/scan",
            method:'POST',
            body:data
        }),
        invalidatesTags: ['PharmacyOperation' as const]
    }),
    validatePrescription: builder.mutation<PrescriptionActionResponse, string>({
        query:(prescriptionId)=>({
            url:`/api/v1/pharmacy/validate/${prescriptionId}`,
            method:'POST'
        }),
        invalidatesTags: ['PharmacyOperation' as const, 'Prescription' as const]
    }),
    dispensePrescription: builder.mutation<PrescriptionActionResponse, string>({
        query:(prescriptionId)=>({
            url:`/api/v1/pharmacy/dispense/${prescriptionId}`,
            method:'POST'
        }),
        invalidatesTags: ['PharmacyOperation' as const, 'Prescription' as const]
    }),
    rejectPrescription: builder.mutation<PrescriptionActionResponse, string>({
        query:(prescriptionId)=>({
            url:`/api/v1/pharmacy/reject/${prescriptionId}`,
            method:'POST'
        }),
        invalidatesTags: ['PharmacyOperation' as const, 'Prescription' as const]
    }),
    getPrescriptionLogs: builder.query<PrescriptionLog[], string>({
        query:(prescriptionId)=>({
            url:`/api/v1/pharmacy/logs/${prescriptionId}`,
            method:'GET'
        })
    }),
    getPharmacistHistory: builder.query<PharmacistHistoryItem[], { page?: number; limit?: number }>({
        query:(params)=>({
            url:"/api/v1/pharmacy/history",
            method:'GET',
            params
        })
    }),
    checkQrScanStatus: builder.query<{ status: string }, string>({
        query:(qrHash)=>({
            url:`/api/v1/pharmacy/scan-status/${qrHash}`,
            method:'GET'
        })
    }),
    getDispensingHistory: builder.query<any[], string>({
        query:(prescriptionId)=>({
            url:`/api/v1/pharmacy/dispensing-history/${prescriptionId}`,
            method:'GET'
        })
    }),
    getDispensingSummary: builder.query<any, string>({
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