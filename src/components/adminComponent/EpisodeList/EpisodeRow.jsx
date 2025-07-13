import { MdDeleteOutline } from "react-icons/md";
import { useState } from "react";
import { useDeleteEpisodeMutation } from "../../../redux/services/episodeSlice";

const EpisodeRow = ({
    id,
    title,
    imageFile,
    onDeleteSuccess,
    onAddContentClick, // <-- important prop
}) => {
    const [deleteEpisode, { isLoading }] = useDeleteEpisodeMutation();
    const [showConfirm, setShowConfirm] = useState(false);

    const handleDelete = async () => {
        try {
            await deleteEpisode(id).unwrap();
            onDeleteSuccess?.(); // callback to refetch
        } catch (error) {
            console.error("Failed to delete episode:", error);
            alert("Failed to delete episode");
        } finally {
            setShowConfirm(false);
        }
    };

    return (
        <div className="w-full flex justify-between items-start p-5 bg-primary-75 text-text-75 rounded-[5px] hover:bg-primary-100 transition-colors">
            <div className="flex gap-4 items-center">
                <img
                    src={imageFile || "/default-episode.jpg"}
                    alt={title}
                    className="w-[70px] h-[70px] object-cover rounded-sm bg-gray-200"
                    onError={(e) => {
                        e.target.src = "/default-episode.jpg";
                    }}
                />
                <h4 className="font-medium">{title || "Untitled Episode"}</h4>
            </div>

            <div className="flex flex-col gap-3 items-end">
                {/* Add Content Button (calls parent handler) */}
                <button
                    onClick={onAddContentClick} // <-- the fix!
                    className="w-fit px-3 py-1 bg-secondary-75 hover:bg-secondary-100 rounded-[5px] transition-colors text-sm"
                >
                    Add Content
                </button>

                {/* Delete confirmation */}
                {showConfirm ? (
                    <div className="flex gap-2">
                        <button
                            onClick={handleDelete}
                            disabled={isLoading}
                            className="text-xs bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 disabled:opacity-50"
                        >
                            {isLoading ? "Deleting..." : "Confirm"}
                        </button>
                        <button
                            onClick={() => setShowConfirm(false)}
                            className="text-xs bg-gray-500 text-white px-2 py-1 rounded hover:bg-gray-600"
                        >
                            Cancel
                        </button>
                    </div>
                ) : (
                    <button
                        onClick={() => setShowConfirm(true)}
                        className="text-text-100 hover:text-red-500 transition-colors"
                        title="Delete episode"
                    >
                        <MdDeleteOutline size={25} />
                    </button>
                )}
            </div>
        </div>
    );
};

export default EpisodeRow;
