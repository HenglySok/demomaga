import { useSearchParams } from "react-router-dom";
import { useGetEpisodesByMangaIdQuery } from "../../redux/services/episodeSlice";

function Episode() {
    const [searchParams] = useSearchParams();
    const mangaID = searchParams.get("manga");
    const { data, error, isLoading } = useGetEpisodesByMangaIdQuery(mangaID);

    console.log("mangaID:", mangaID);
    console.log("Data:", data);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className="flex flex-col gap-4 p-4">
            {data?.episodes?.map((episode) => (
                <div
                    key={episode._id}
                    className="flex items-center gap-4 bg-gray-800 p-3 rounded-md"
                >
                    <img
                        src={episode.coverImageUrl}
                        alt={episode.title}
                        className="w-24 h-24 object-cover rounded"
                    />
                    <div>
                        <h3 className="text-lg font-semibold text-white">{episode.title}</h3>
                        <p className="text-sm text-gray-400">{episode.author}</p>
                        <p className="text-sm text-gray-400">Chapter: {episode.chapter}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Episode;
