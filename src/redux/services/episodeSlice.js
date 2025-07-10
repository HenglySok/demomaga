
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const episodeApi = createApi({
    reducerPath: 'mangaApi',
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_VIEW_BASE_API
    }),
    endpoints: (builder) => ({
        getEpisodebyID: builder.mutation({
            query: ({ id }) => ({
                url: `/episode/manga/${id}`,
                method: "POST",
                body: { id },
            }),
        })
    }),
});

const { useGetEpisodebyIDMutation } = episodeApi