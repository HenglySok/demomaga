import { MdOutlineDelete, MdClose } from "react-icons/md";
import { useState } from "react";
import { useDeleteMangaMutation } from "../../../redux/services/mangaSlice";

export default function MangaRow({
    id,
    author,
    imageFile,
    description,
    isHighlighted,
    onClick,
    onDeleteSuccess,
}) {
    const [deleteManga, { isLoading }] = useDeleteMangaMutation();
    const [showConfirm, setShowConfirm] = useState(false);

    const handleDeleteClick = (e) => {
        e.stopPropagation();
        setShowConfirm(true);
    };

    const handleConfirmDelete = async () => {
        try {
            await deleteManga(id).unwrap();
            onDeleteSuccess?.();
        } catch (error) {
            console.error("Failed to delete manga:", error);
        } finally {
            setShowConfirm(false);
        }
    };

    const handleCancelDelete = (e) => {
        e.stopPropagation();
        setShowConfirm(false);
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
                onError={(e) => {
                    e.target.src = '/default-manga-cover.jpg';
                }}
            />

            {/* Text Content */}
            <div className="flex flex-col gap-2 overflow-hidden">
                <p className="truncate text-[14px] font-medium">{author}</p>
                <p className="truncate text-[12px] text-text-75 font-light">{description}</p>
            </div>

            {/* Delete Button */}
            <div className="flex gap-2">
                {showConfirm ? (
                    <>
                        <button
                            onClick={handleConfirmDelete}
                            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-[5px] text-sm transition-colors flex items-center gap-1"
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <span className="animate-spin inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full"></span>
                            ) : null}
                            Delete
                        </button>
                        <button
                            onClick={handleCancelDelete}
                            className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded-[5px] text-sm transition-colors flex items-center gap-1"
                        >
                            <MdClose size={16} />
                            Cancel
                        </button>
                    </>
                ) : (
                    <button
                        onClick={handleDeleteClick}
                        className="bg-primary-100 hover:bg-primary-200 text-text-100 p-2 rounded-[5px] transition-all"
                        title="Delete manga"
                    >
                        <MdOutlineDelete size={20} />
                    </button>
                )}
            </div>
        </div>
    );
}