import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_VIEW_API_AUTH_ENDPOINT,
  }),
  endpoints: (build) => ({
    getLogin: build.mutation({
      query: ({ email, password }) => ({
        url: "/login",
        method: "POST",
        body: { email, password },
      }),
    }),
    getRegister: build.mutation({
      query: ({ firstName, lastName, email, password, confirmPassword }) => ({
        url: "/register",
        method: "POST",
        body: { firstName, lastName, email, password, confirmPassword },
      }),
    }),
    getVerify: build.mutation({
      query: ({ code }) => ({
        url: "verify/email",
        method: "POST",
        body: { code }, // ✅ Match API: { code: "xxx" }
      }),
    }),
    getResendVerification: build.mutation({
      query: ({ email }) => ({
        url: "resend-verification",
        method: "POST",
        body: { email }, // ✅ Match API: { email: "xxx@gmail.com" }
      }),
    }),
  }),
});

export const {
  useGetLoginMutation,
  useGetRegisterMutation,
  useGetVerifyMutation,
  useGetResendVerificationMutation,
} = authApi;
