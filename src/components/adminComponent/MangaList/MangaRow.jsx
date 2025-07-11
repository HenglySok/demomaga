import { MdOutlineDelete } from "react-icons/md";

export default function MangaRow({
    id,
    author,
    imageFile,
    description,
    isHighlighted,
    onClick,
}) {
    const handleDeleteManga = (e) => {
        e.stopPropagation();
        console.log(`delete manga ${id}`);
    };

    return (
        <div
            onClick={onClick}
            className={`grid grid-cols-[80px_1fr_auto] items-center gap-4
                 text-sm text-text-100 
                 ${isHighlighted ? "bg-primary-75" : "bg-[#00000060]"}
                 px-5 py-3 rounded-md w-full hover:bg-primary-50 
                 transition-all duration-200 cursor-pointer`}
        >
            {/* Image */}
            <img
                className="w-[70px] h-[77px] border rounded-[2px] object-cover"
                src={imageFile}
                alt="manga cover"
            />

            {/* Text Content */}
            <div className="flex flex-col gap-2 overflow-hidden">
                <p className="truncate text-[14px] font-medium">{author}</p>
                <p className="truncate text-[12px] text-text-75 font-light">{description}</p>
            </div>

            {/* Delete Button */}
            <button
                onClick={handleDeleteManga}
                className="bg-primary-100 hover:bg-primary-200 text-text-100 p-2 rounded-[5px] transition-all"
                title="Delete manga"
            >
                <MdOutlineDelete size={20} />
            </button>
        </div>
    );
}