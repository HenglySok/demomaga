import { useGetMangaQuery } from "../../redux/services/mangaSlice"

const TableManga = () => {
    const { data, isLoading, isError, error } = useGetMangaQuery();
    console.log(data);
    const mangalist = data?.mangas || data?.data || data || [];

    isLoading && <div className="text-7xl">Loading...</div>

    return (
        <div className="flex flex-col gap-2">
            {
                mangalist.map((manga, index) => (
                    <MangaRow
                        key={index}
                        author={manga.author}
                        imageFile={manga.coverImageUrl}
                        description={manga.description}
                    />
                ))
            }
        </div>
    )
}

export default TableManga
