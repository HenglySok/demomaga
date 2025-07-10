export default function MangaRow({ author, imageFile, description }) {
    return (
        <div className="grid grid-cols-4 gap-4 items-center text-sm text-text-100 bg-black px-5 py-3 rounded-md w-[700px]">
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