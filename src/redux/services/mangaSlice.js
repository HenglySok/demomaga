import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const mangaApi = createApi({
  reducerPath: 'mangaApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_VIEW_BASE_API,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('accesstoken'); // or sessionStorage
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getManga: builder.query({
      query: () => 'manga',
    }),
    addManga: builder.mutation({
      query: (formData) => ({
        url: "/admin/manga",
        method: "POST",
        body: formData,
      }),
    }),
  }),
});

export const { useGetMangaQuery, useAddMangaMutation } = mangaApi;
