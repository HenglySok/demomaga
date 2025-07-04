import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_VIEW_API_AUTH_ENDPOINT
  }),
  endpoints: (build) => ({
    getLogin: build.mutation({
      query: ({ email, password }) => ({
        url: "/login",
        method: "POST",
        body: { email, password }
      })
    }),
    getRegister: build.mutation({
      query: ({ firstName, lastName, email, password, confirmPassword }) => ({
        url: "/register",
        method: "POST",
        body: { firstName, lastName, email, password, confirmPassword }
      })
    })
  }),
})
export const { useGetLoginMutation, useGetRegisterMutation } = authApi;
