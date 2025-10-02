import { apiSlice } from "../api/apiEntry";
import type { Doctor, Patient, LoginCredentials, UserCredentials, AuthResponse, ChangePasswordData } from "../../Types";

// Generic login response
interface LoginSuccessResponse<T = UserCredentials> {
  success: true;
  message: string;
  data: {
    user: T;
    token: string;
  };
}

interface LoginErrorResponse {
  success: false;
  error: {
    message: string;
    statusCode: number;
  };
}

type LoginResponse<T = UserCredentials> = LoginSuccessResponse<T> | LoginErrorResponse;

export const authenticationApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse<UserCredentials>, LoginCredentials>({
      query: (credentials) => ({
        url: '/api/v1/auth/login',
        method: 'POST',
        body: credentials
      }),
      invalidatesTags: ['Auth']
    }),
registerPatient: builder.mutation<AuthResponse, Partial<UserCredentials & Patient>>({
  query: (body) => ({
    url: '/api/v1/patients/register', // <-- correct endpoint
    method: 'POST',
    body,
  }),
  transformResponse: (response: AuthResponse) => response,
  invalidatesTags: ['Auth'],
}),
    registerDoctor: builder.mutation<LoginResponse<Doctor>, Doctor>({
      query: (body) => ({
        url: '/api/v1/auth/doctor/register',
        method: 'POST',
        body
      }),
      invalidatesTags: ['Auth']
    }),
    getProfile: builder.query<UserCredentials, void>({
      query: () => ({
        url: '/api/v1/auth/profile',
        method: 'GET'
      }),
      transformResponse: (response: any) => response.data,
      providesTags: ['Auth']
    }),

    changePassword: builder.mutation<{ success: boolean }, { currentPassword: string; newPassword: string }>({
      query: (passwordData) => ({
        url: '/api/v1/auth/change-password',
        method: 'PUT',
        body: passwordData
      }),
      invalidatesTags: ['Auth']
    }),
    logout: builder.mutation<{ success: boolean }, void>({
      query: () => ({
        url: '/api/v1/auth/logout',
        method: 'POST'
      }),
      invalidatesTags: ['Auth']
    }),
    deactivateUser: builder.mutation<{ success: boolean }, string>({
      query: (userId) => ({
        url: `/api/v1/auth/users/${userId}/deactivate`,
        method: 'PUT'
      }),
      invalidatesTags: ['Auth']
    }),
    reactivateUser: builder.mutation<{ success: boolean }, string>({
      query: (userId) => ({
        url: `/api/v1/auth/users/${userId}/reactivate`,
        method: 'PUT'
      }),
      invalidatesTags: ['Auth']
    })
  })
})

export const {
  useLoginMutation,
  useRegisterPatientMutation,
  useRegisterDoctorMutation,
  useGetProfileQuery,
  useChangePasswordMutation,
  useLogoutMutation,
  useDeactivateUserMutation,
  useReactivateUserMutation
} = authenticationApi;
