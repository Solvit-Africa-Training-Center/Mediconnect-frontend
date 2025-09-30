import { apiSlice } from "../api/apiEntry";
import type { User, Doctor, Appointment } from "../../Types";
import { DoctorStats } from "../../Types";

export const doctorApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // 👨‍⚕️ GET ALL DOCTORS
    getDoctors: builder.query<Doctor[], void>({
      query: () => ({ url: "/doctors", method: "GET" }),
      providesTags: ["Doctor"],
    }),

    // GET DOCTOR BY ID
    getDoctorById: builder.query<Doctor, string>({
      query: (id) => ({ url: `/doctors/${id}`, method: "GET" }),
      providesTags: ["Doctor"],
    }),

    // GET DOCTOR STATS
    getDoctorStats: builder.query<DoctorStats, void>({
      query: () => ({ url: "/doctor/stats", method: "GET" }),
      providesTags: ["Doctor"],
    }),

    // UPDATE DOCTOR PROFILE
    updateDoctorProfile: builder.mutation<Doctor, Partial<Doctor>>({
      query: (body) => ({ url: "/doctors/profile", method: "PATCH", body }),
      invalidatesTags: ["Doctor"],
    }),

    // GET DOCTOR'S APPOINTMENTS
    getDoctorAppointments: builder.query<Appointment[], void>({
      query: () => ({ url: "/doctors/appointments", method: "GET" }),
      providesTags: ["Appointment"],
    }),

    // APPROVE APPOINTMENT
    approveAppointment: builder.mutation<Appointment, string>({
      query: (id) => ({ url: `/doctors/appointments/${id}/approve`, method: "PATCH" }),
      invalidatesTags: ["Appointment"],
    }),

    // REJECT APPOINTMENT
    rejectAppointment: builder.mutation<Appointment, string>({
      query: (id) => ({ url: `/doctors/appointments/${id}/reject`, method: "PATCH" }),
      invalidatesTags: ["Appointment"],
    }),

    // DELETE DOCTOR PROFILE
    deleteDoctorProfile: builder.mutation<{ success: boolean }, string>({
      query: (id) => ({ url: `/doctors/${id}`, method: "DELETE" }),
      invalidatesTags: ["Doctor"],
    }),
  }),
});

export const {
  useGetDoctorsQuery,
  useGetDoctorByIdQuery,
  useGetDoctorStatsQuery,
  useUpdateDoctorProfileMutation,
  useGetDoctorAppointmentsQuery,
  useApproveAppointmentMutation,
  useRejectAppointmentMutation,
  useDeleteDoctorProfileMutation,
} = doctorApi;