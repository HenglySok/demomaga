import { useState, useEffect } from "react";
import { useGetMangaQuery } from "../../../redux/services/mangaSlice";
import MangaRow from "./MangaRow";

const TableManga = ({ onMangaSelect, selectedMangaId }) => {
    const { data, isLoading, isError, error, refetch } = useGetMangaQuery();
    const [lastClickedId, setLastClickedId] = useState(null);

    const mangalist = data?.mangas || data?.data || data || [];

    // 🟩 Select first manga when data is loaded
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
        refetch(); // Refresh the manga list after deletion
        if (lastClickedId === id) {
            // If the deleted manga was the selected one, clear the selection
            setLastClickedId(null);
            onMangaSelect(null);
        }
    };

    if (isLoading) return <div className="text-7xl">Loading...</div>;
    if (isError) return <div>Error: {error?.message || "Failed to load manga"}</div>;

    return (
        <div className="flex flex-col gap-[16px] p-5 pt-30">
            <h3 className="text-text-100 text-[20px]">Manga List</h3>
            <button className="w-fit px-3 py-1 bg-secondary-100 rounded-[5px] text-[14px]">
                Add Manga
            </button>
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