import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const episodeApi = createApi({
    reducerPath: 'episodeApi', // ✅ Good: Unique name for this slice
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_VIEW_BASE_API, // ✅ Must be defined in your .env file
    }),
    endpoints: (builder) => ({
        getEpisodeByID: builder.query({
            query: (id) => `episode/manga/${id}`, // ✅ Assumes this is a GET request
        }),
    }),
});

export const { useGetEpisodeByIDQuery } = episodeApi;