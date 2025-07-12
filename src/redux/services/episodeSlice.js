import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const episodeApi = createApi({
    reducerPath: "episodeApi",
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_VIEW_BASE_API,
        prepareHeaders: (headers) => {
            const token = localStorage.getItem("accessToken");
            if (token) {
                headers.set("Authorization", `Bearer ${token}`);
            }
            return headers;
        },
    }),
    tagTypes: ["Episode"],
    endpoints: (builder) => ({
        addEpisode: builder.mutation({
            query: (formData) => ({
                url: "/admin/episode",
                method: "POST",
                body: formData,
            }),
            invalidatesTags: ["Episode"],
        }),
        // getEpisodes: builder.query({
        //     query: (mangaId) => ({
        //         url: `episodes/${mangaId}`,
        //         method: 'GET'
        //     }),
        //     providesTags: ['Episode']
        // }),
        // In your episodeSlice.js
        getEpisodes: builder.query({
            query: (mangaId) => `episodes/manga/${mangaId}`, // or your actual endpoint
        }),
        getEpisodesByMangaId: builder.query({
            query: (mangaId) => `episode/manga/${mangaId}`,
            transformResponse: (response) => {
                console.log('API Response:', response);
                return response.data || response; // Adjust based on your API response structure
            },
            providesTags: (result, error, mangaId) => [
                { type: 'Episodes', id: mangaId }
            ],
        }),
        deleteEpisode: builder.mutation({
            query: (id) => ({
                url: `/admin/episode/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Episode"],
        }),
    }),
});

export const {
    useAddEpisodeMutation,
    useGetEpisodesQuery,
    useDeleteEpisodeMutation,
    useGetEpisodesByMangaIdQuery,
} = episodeApi;