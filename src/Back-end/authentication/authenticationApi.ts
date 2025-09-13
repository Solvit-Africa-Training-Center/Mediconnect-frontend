import { apiSlice } from "../api/apiEntry";

export const authenticationApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (credentials) => ({
                url: '/api/v1/auth/login',
                method: 'POST',
                body: { ...credentials }
            })
        }),
        getProfile: builder.query({
            query: () => ({
                url: '/api/v1/auth/profile',
                method: 'GET'
            })
        }),
        changePassword: builder.mutation({
            query: (passwordData) => ({
                url: '/api/v1/auth/change-password',
                method: 'PUT',
                body: { ...passwordData }
            })
        }),
        logout: builder.mutation({
            query: () => ({
                url: '/api/v1/auth/logout',
                method: 'POST'
            })
        }),
        deactivateUser: builder.mutation({
            query: (userId) => ({
                url: `/api/v1/auth/users/${userId}/deactivate`,
                method: 'PUT'
            })
        }),
        reactivateUser: builder.mutation({
            query: (userId) => ({
                url: `/api/v1/auth/users/${userId}/reactivate`,
                method: 'PUT'
            })
        })
    })
})

export const {
    useLoginMutation,
    useGetProfileQuery,
    useChangePasswordMutation,
    useLogoutMutation,
    useDeactivateUserMutation,
    useReactivateUserMutation
} = authenticationApi