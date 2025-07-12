import { useGetEpisodesByMangaIdQuery } from '../../../redux/services/episodeSlice';
import { useEffect } from 'react';

function GetEpisode() {
    const mangaId = "68720cd3d266597bc01ab22f"; // Ideally pass this as a prop
    const {
        data: episodes = [],
        isLoading,
        isError,
        error,
        refetch
    } = useGetEpisodesByMangaIdQuery(mangaId);

    useEffect(() => {
        console.log('Query state:', { isLoading, isError, data: episodes });
        if (isError) {
            console.error('API Error:', error);
        }
    }, [isLoading, isError, episodes, error]);

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-40">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    if (isError) {
        return (
            <div className="p-4 bg-red-50 text-red-600 rounded-lg">
                <h3 className="font-bold">Failed to load episodes</h3>
                <p className="mb-2">{error?.data?.message || error.status || 'Unknown error'}</p>
                <button
                    onClick={refetch}
                    className="px-4 py-2 bg-red-100 hover:bg-red-200 rounded-md"
                >
                    Retry
                </button>
            </div>
        );
    }

    return (
        <div className="space-y-4">
            <h2 className="text-xl font-bold">Episodes</h2>

            {episodes.length === 0 ? (
                <p className="text-gray-500">No episodes found for this manga</p>
            ) : (
                <div className="grid gap-4">
                    {episodes.map(episode => (
                        <div key={episode._id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                            <h3 className="font-medium">{episode.title || `Episode ${episode.chapter}`}</h3>
                            <p className="text-sm text-gray-600">Chapter {episode.chapter}</p>
                            {episode.description && (
                                <p className="mt-2 text-sm">{episode.description}</p>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default GetEpisode;