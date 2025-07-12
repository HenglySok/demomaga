import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithReauth } from './baseQueryWithReauth';

export const mangaApi = createApi({
  reducerPath: 'mangaApi',
  baseQuery: baseQueryWithReauth,
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