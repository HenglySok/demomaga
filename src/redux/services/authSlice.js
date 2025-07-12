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
      transformResponse: (response) => {
        // Store tokens on successful login
        if (response.data?.accessToken && response.data?.refreshToken) {
          localStorage.setItem('accessToken', response.data.accessToken);
          localStorage.setItem('refreshToken', response.data.refreshToken);
        }
        return response;
      },
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
        body: { code },
      }),
    }),
    getResendVerification: build.mutation({
      query: ({ email }) => ({
        url: "resend-verification",
        method: "POST",
        body: { email },
      }),
    }),
    getFogotPassword: build.mutation({
      query: ({ email }) => ({
        url: "password/forgot",
        method: "POST",
        body: { email }
      })
    }),
    getResetPassword: build.mutation({
      query: ({ password, verificationCode }) => ({
        url: "password/reset",
        method: "POST",
        body: { password, verificationCode }
      })
    }),
    // Added refresh token endpoint while maintaining naming convention
    getRefreshToken: build.mutation({
      query: (refreshToken) => ({
        url: "/auth/refresh",
        method: "POST",
        body: { refreshToken },
      }),
      transformResponse: (response) => {
        // Store new tokens on successful refresh
        if (response.data?.accessToken && response.data?.refreshToken) {
          localStorage.setItem('accessToken', response.data.accessToken);
          localStorage.setItem('refreshToken', response.data.refreshToken);
        }
        return response;
      },
    }),
    // Added logout endpoint while maintaining naming convention
    getLogout: build.mutation({
      query: () => ({
        url: "/logout",
        method: "POST",
      }),
      transformResponse: (response) => {
        // Clear tokens on logout
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        return response;
      },
    }),
  })
});

export const {
  useGetLoginMutation,
  useGetRegisterMutation,
  useGetVerifyMutation,
  useGetResendVerificationMutation,
  useGetFogotPasswordMutation,
  useGetResetPasswordMutation,
  useGetRefreshTokenMutation,
  useGetLogoutMutation,
} = authApi;