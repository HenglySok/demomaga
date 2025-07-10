import { useState } from "react";
import { useGetMangaQuery } from "../../redux/services/mangaSlice";
import MangaRow from "./MangaRow";

const TableManga = () => {
    const { data, isLoading, isError, error } = useGetMangaQuery();
    const [lastClickedId, setLastClickedId] = useState(null);

    const mangalist = data?.mangas || data?.data || data || [];

    const handleRowClick = (id) => {
        setLastClickedId(prevId => prevId === id ? null : id);
    };

    if (isLoading) return <div className="text-7xl">Loading...</div>;
    if (isError) return <div>Error: {error?.message || "Failed to load manga"}</div>;

    return (
        <div className="flex flex-col gap-2">
            {mangalist.map((manga) => (
                <MangaRow
                    key={manga._id}
                    id={manga._id}
                    author={manga.author}
                    imageFile={manga.coverImageUrl}
                    description={manga.description}
                    isHighlighted={lastClickedId === manga._id}
                    onClick={() => handleRowClick(manga._id)}
                />
            ))}
        </div>
    );
};

export default TableManga;