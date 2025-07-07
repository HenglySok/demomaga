
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const mangaApi = createApi({
  reducerPath: 'mangaApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: import.meta.env.VITE_VIEW_BASE_API
  }),
  endpoints: (builder) => ({
    getManga: builder.query({
      query: () => 'manga',
    }),
  }),
});

export const { useGetMangaQuery } = mangaApi;