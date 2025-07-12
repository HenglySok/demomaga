import { useState, useEffect } from "react";
import { useGetMangaQuery } from "../../../redux/services/mangaSlice";
import MangaRow from "./MangaRow";
import AddManga from "./AddManga"; // Import the AddManga component

const TableManga = ({ onMangaSelect, selectedMangaId }) => {
    const { data, isLoading, isError, error, refetch } = useGetMangaQuery();
    const [lastClickedId, setLastClickedId] = useState(null);
    const [showAddForm, setShowAddForm] = useState(false); // State for showing/hiding form

    const mangalist = data?.mangas || data?.data || data || [];

    useEffect(() => {
        if (mangalist.length > 0 && !lastClickedId) {
            const first = mangalist[0];
            setLastClickedId(first._id);
            onMangaSelect(first);
        }
    }, [mangalist, lastClickedId, onMangaSelect]);

    const handleRowClick = (manga) => {
        setLastClickedId(prevId => (prevId === manga._id ? null : manga._id));
        onMangaSelect(prev => (prev?._id === manga._id ? null : manga));
    };

    const handleDeleteSuccess = () => {
        refetch();
        if (lastClickedId === id) {
            setLastClickedId(null);
            onMangaSelect(null);
        }
    };

    const handleAddSuccess = () => {
        setShowAddForm(false);
        refetch(); // Refresh the manga list after successful addition
    };

    if (isLoading) return <div className="text-7xl">Loading...</div>;
    if (isError) return <div>Error: {error?.message || "Failed to load manga"}</div>;

    return (
        <div className="flex flex-col gap-[16px] p-5 pt-30">
            <h3 className="text-text-100 text-[20px]">Manga List</h3>
            <button
                onClick={() => setShowAddForm(true)}
                className="w-fit px-3 py-1 bg-secondary-75 text-text-75 text-[18px] rounded-[5px]"
            >
                Add Manga
            </button>

            {/* Add Manga Popup */}
            {showAddForm && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="relative">
                        <AddManga
                            onSuccess={handleAddSuccess}
                            onClose={() => setShowAddForm(false)}
                        />
                    </div>
                </div>
            )}

            <div className="flex flex-col gap-2 ms-[5px]">
                {mangalist.map((manga) => (
                    <MangaRow
                        key={manga._id}
                        id={manga._id}
                        author={manga.author}
                        imageFile={manga.coverImageUrl}
                        description={manga.description}
                        isHighlighted={lastClickedId === manga._id}
                        onClick={() => handleRowClick(manga)}
                        onDeleteSuccess={handleDeleteSuccess}
                    />
                ))}
            </div>
        </div>
    );
};

export default TableManga;