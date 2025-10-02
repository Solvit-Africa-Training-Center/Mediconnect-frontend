import { configureStore } from "@reduxjs/toolkit"
import { apiSlice } from "../Back-end/api/apiEntry"
import authReducer from "./authSlice"

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer, // RTK Query API slice
    auth: authReducer, // Authentication slice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware), // Add RTK Query middleware
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch