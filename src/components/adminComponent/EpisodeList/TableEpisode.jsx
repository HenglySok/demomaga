import { useState } from "react";
import { useGetEpisodesByMangaIdQuery } from "../../../redux/services/episodeSlice";
import CreateEpisode from "./CreateEpisode";
import AddContent from "./../Content/AddContent";
import EpisodeRow from "./EpisodeRow";
import LoadingSpinner from "../../common/LoadingSpinner";
import ErrorMessage from "../../common/ErrorMessage";

export default function TableEpisode({ selectedManga }) {
    const [showModal, setShowModal] = useState(false);
    const [showContentModal, setShowContentModal] = useState(false);
    const [selectedEpisodeId, setSelectedEpisodeId] = useState(null);

    const {
        data: apiResponse,
        isLoading,
        isError,
        error,
        refetch
    } = useGetEpisodesByMangaIdQuery(selectedManga?._id, {
        skip: !selectedManga?._id
    });

    const episodes = apiResponse?.episodes || [];

    if (!selectedManga) {
        return <div className="text-text-75 p-4">Please select a manga</div>;
    }

    return (
        <div className="flex flex-col gap-[16px] relative">
            <div className="flex justify-between items-end gap-[16px] bg-primary-75 p-5 text-text-75">
                <span className="flex gap-[16px]">
                    <img
                        src={selectedManga.coverImageUrl || ""}
                        alt=""
                        className="w-[130px] h-[130px] object-cover"
                        onError={(e) => e.target.src = '/default-manga-cover.jpg'}
                    />
                    <span className="flex flex-col gap-2 justify-end">
                        <h6 className="text-[14px] font-light text-text-50">Episode</h6>
                        <h4 className="text-[18px] font-bold">{selectedManga.author || "Manga title"}</h4>
                        <p className="text-[12px] font-light">{selectedManga.description || "apple banana lorem"}</p>
                    </span>
                </span>
                <button
                    onClick={() => setShowModal(true)}
                    className="w-fit px-3 py-1 bg-secondary-75 rounded-[5px] hover:bg-secondary-100 transition-colors"
                >
                    Add Episode
                </button>
            </div>

            <h3 className="text-text-75 text-[22px] mt-5">Episode List</h3>

            {isLoading ? (
                <div className="flex justify-center p-8">
                    <LoadingSpinner size="md" />
                </div>
            ) : isError ? (
                <ErrorMessage
                    message={error?.data?.message || 'Failed to load episodes'}
                    onRetry={refetch}
                />
            ) : episodes.length === 0 ? (
                <div className="text-text-75 text-center p-8">No episodes found</div>
            ) : (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[16px]">
                    {episodes.map((episode) => (
                        <EpisodeRow
                            key={episode._id}
                            id={episode._id}
                            title={episode.title}
                            chapter={episode.chapter}
                            imageFile={episode.coverImageUrl}
                            createdAt={episode.createdAt}
                            onDeleteSuccess={refetch}
                            onAddContentClick={() => {
                                setSelectedEpisodeId(episode._id);
                                setShowContentModal(true);
                            }}
                        />
                    ))}
                </div>
            )}

            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <CreateEpisode
                        mangaId={selectedManga._id}
                        onClose={() => setShowModal(false)}
                        onSuccess={refetch}
                    />
                </div>
            )}

            {showContentModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <AddContent
                        mangaId={selectedManga._id}
                        episodeId={selectedEpisodeId}
                        onClose={() => setShowContentModal(false)}
                        onSuccess={refetch}
                    />
                </div>
            )}
        </div>
    );
}
