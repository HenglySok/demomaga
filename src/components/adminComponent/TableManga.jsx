import { useGetMangaQuery } from "../../redux/services/mangaSlice"

export function MangaRow({ author, imageFile, description }) {
    return (
        <div className="grid grid-cols-4 gap-4 items-center text-sm text-text-100 bg-black px-5 py-3 rounded-md">
            <img
                className="w-[70px] h-[70px] border rounded-[2px] object-cover"
                src={imageFile}
                alt="mangaCover"
            />
            <p className="truncate">{author}</p>
            <p className="truncate">{description}</p>
            <button className="bg-primary-100 text-text-100 px-3 py-1 rounded-[5px] w-fit justify-self-end">
                Delete
            </button>
        </div>

    )

}


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
