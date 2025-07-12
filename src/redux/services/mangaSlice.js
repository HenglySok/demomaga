import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const mangaApi = createApi({
  reducerPath: 'mangaApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_VIEW_BASE_API,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('accessToken'); // or sessionStorage
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
        url: '/admin/manga',
        method: "POST",
        body: formData,
      }),
    }),
    deleteManga: builder.mutation({
      query: (id) => ({
        url: `/admin/manga/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const { useGetMangaQuery, useAddMangaMutation, useDeleteMangaMutation } = mangaApi;
