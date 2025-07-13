// MangaDetail.jsx
import { useParams } from "react-router-dom";
import { Skeleton } from "./ui/skeleton"; // Assuming you have a Skeleton component
import { useGetMangaQuery } from "../redux/services/mangaSlice";
import { useGetEpisodesByMangaIdQuery } from "../redux/services/episodeSlice";

function MangaDetail() {
    const { mangaId } = useParams();

    // Fetch manga details
    const {
        data: manga,
        isLoading: isMangaLoading,
        isError: isMangaError
    } = useGetMangaQuery(mangaId);

    // Fetch episodes
    const {
        data: episodes,
        isLoading: isEpisodesLoading,
        isError: isEpisodesError
    } = useGetEpisodesByMangaIdQuery(mangaId);

    if (isMangaLoading || isEpisodesLoading) {
        return (
            <div className="container mx-auto p-4">
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Manga cover skeleton */}
                    <div className="w-full md:w-1/3">
                        <Skeleton className="w-full h-96 rounded-lg" />
                    </div>

                    {/* Manga info skeleton */}
                    <div className="w-full md:w-2/3 space-y-4">
                        <Skeleton className="h-10 w-3/4" />
                        <Skeleton className="h-6 w-1/2" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-2/3" />
                    </div>
                </div>

                {/* Episodes skeleton */}
                <div className="mt-8 space-y-2">
                    {[...Array(5)].map((_, i) => (
                        <Skeleton key={i} className="h-16 w-full" />
                    ))}
                </div>
            </div>
        );
    }

    if (isMangaError || isEpisodesError) {
        return (
            <div className="container mx-auto p-4 text-red-500">
                Error loading manga details. Please try again later.
            </div>
        );
    }

    return (
        <div className="container mx-auto p-4">
            {/* Manga Header Section */}
            <div className="flex flex-col md:flex-row gap-8">
                {/* Manga Cover */}
                <div className="w-full md:w-1/3">
                    <img
                        src={manga.coverImageUrl}
                        alt={manga.title}
                        className="w-full h-auto rounded-lg shadow-lg object-cover"
                    />
                </div>

                {/* Manga Info */}
                <div className="w-full md:w-2/3">
                    <h1 className="text-3xl font-bold mb-2">{manga.title}</h1>
                    <p className="text-lg text-gray-600 mb-4">by {manga.author}</p>

                    <div className="flex gap-4 mb-6">
                        <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                            #{manga.id}
                        </div>
                        <div className="flex items-center gap-1 text-gray-600">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-eye"
                                viewBox="0 0 16 16"
                            >
                                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                            </svg>
                            <span>{manga.views} views</span>
                        </div>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-xl font-semibold mb-2">Description</h2>
                        <p className="text-gray-700">
                            {manga.description || "No description available."}
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {manga.tags?.map((tag) => (
                            <span
                                key={tag}
                                className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Episodes Section */}
            <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6">Episodes</h2>

                {episodes?.length > 0 ? (
                    <div className="grid grid-cols-1 gap-4">
                        {episodes.map((episode) => (
                            <div
                                key={episode.id}
                                className="p-4 border rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                            >
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h3 className="text-lg font-semibold">
                                            Episode {episode.number}: {episode.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm">
                                            {new Date(episode.createdAt).toLocaleDateString()}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-gray-600 text-sm">
                                            {episode.pages?.length || 0} pages
                                        </span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            className="bi bi-chevron-right"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-8 text-gray-500">
                        No episodes available yet.
                    </div>
                )}
            </div>
        </div>
    );
}

export default MangaDetail;