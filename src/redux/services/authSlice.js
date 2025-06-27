
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const authAPI = createApi({
  reducerPath: 'authAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_AUTH_ENDPOINT, 
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("accessToken");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`); 
      }
      return headers;
    }
  }),
  endpoints: (build) => ({
    getLogin: build.mutation({
      query: ({ email, password }) => ({
        url: "/login/",
        method: "POST",
        body: { email, password },
      }),
    }),
  }),
});


export const { useGetLoginMutation } = authAPI;