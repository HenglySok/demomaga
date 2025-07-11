import { useState } from "react";
import { useGetMangaQuery } from "../../../redux/services/mangaSlice";
import MangaRow from "./MangaRow";

const TableManga = ({ onMangaSelect, selectedMangaId }) => {
    const { data, isLoading, isError, error } = useGetMangaQuery();
    const [lastClickedId, setLastClickedId] = useState(null);

    const mangalist = data?.mangas || data?.data || data || [];

    const handleRowClick = (manga) => {
        setLastClickedId(prevId => prevId === manga.id ? null : manga._id);
        onMangaSelect(prev => prev?._id === manga._id ? null : manga);
    };

    if (isLoading) return <div className="text-7xl">Loading...</div>;
    if (isError) return <div>Error: {error?.message || "Failed to load manga"}</div>;

    return (
        <div className="flex flex-col gap-[16px] p-5 pt-30">
            <h3
                className="text-text-100 text-[20px] "
            >
                Manga List
            </h3>
            <button
                className="w-fit px-3 py-1 bg-secondary-100 rounded-[5px] text-[14px]"
            >
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
                    />
                ))}
            </div>
        </div>
    );
};

export default TableManga;