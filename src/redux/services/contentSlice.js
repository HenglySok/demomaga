import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contentApi = createApi({
    reducerPath: 'contentApi',
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
    tagTypes: ['Content'],
    endpoints: (builder) => ({
        getContentByEpisodeId: builder.query({
            query: (episodeId) => `content/episode/${episodeId}`,
            transformResponse: (response) => {
                console.log("Content API Response:", response);
                return response.data || response;
            },
            providesTags: (result, error, episodeId) => [
                { type: 'Content', id: episodeId },
            ],
        }),

        addContent: builder.mutation({
            query: (formData) => ({
                url: 'admin/content',
                method: 'POST',
                body: formData,
            }),
            invalidatesTags: (result, error, { episodeId }) => [
                { type: 'Content', id: episodeId },
            ],
        }),

    }),
});

export const {
    useGetContentByEpisodeIdQuery,
    useAddContentMutation,
} = contentApi;
