import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const episodeApi = createApi({
    reducerPath: 'episodeApi',
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_VIEW_BASE_API,
    }),
    endpoints: (builder) => ({
        getEpisodeByID: builder.query({
            query: (id) => `episode/manga/${id}`,
        }),
    }),
});

export const { useGetEpisodeByIDQuery } = episodeApi;