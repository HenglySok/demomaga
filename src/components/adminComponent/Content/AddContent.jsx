import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
    useAddContentMutation,
    useGetContentByEpisodeIdQuery,
} from "../../../redux/services/contentSlice";

export default function AddContent({ mangaId, episodeId, onClose, onSuccess }) {
    const [addContent, { isLoading }] = useAddContentMutation();
    const [imageFile, setImageFile] = useState(null);
    const [preview, setPreview] = useState(null);

    const {
        data: contentData,
        isLoading: loadingContent,
        isError: errorContent,
        refetch,
    } = useGetContentByEpisodeIdQuery(episodeId);

    const formik = useFormik({
        initialValues: {
            mangaId: mangaId || "",
            episodeId: episodeId || "",
        },
        validationSchema: Yup.object({
            mangaId: Yup.string().required("Manga ID is required"),
            episodeId: Yup.string().required("Episode ID is required"),
        }),
        onSubmit: async (values) => {
            if (!imageFile) {
                alert("Please select an image.");
                return;
            }

            const formData = new FormData();
            formData.append("mangaId", values.mangaId);
            formData.append("episodeId", values.episodeId);
            formData.append("imageFile", imageFile);

            try {
                await addContent(formData).unwrap();
                alert("Content uploaded successfully");
                setImageFile(null);
                setPreview(null);
                refetch();
                onSuccess?.();
            } catch (err) {
                console.error("Upload failed", err);
            }
        },
    });

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageFile(file);
            setPreview(URL.createObjectURL(file));
        }
    };

    return (
        <div className="p-4 bg-white rounded-lg w-full max-w-md relative">
            <button
                type="button"
                onClick={onClose}
                className="absolute right-4 top-2 text-red-500 text-2xl"
            >
                &times;
            </button>

            <h2 className="text-lg font-bold mb-4 text-center">Add Content Image</h2>

            {/* Upload Form */}
            <form onSubmit={formik.handleSubmit}>
                <input type="file" accept="image/*" onChange={handleFileChange} className="mb-3" />
                {preview && <img src={preview} alt="Preview" className="w-32 mb-3 rounded" />}

                {!mangaId && (
                    <input
                        name="mangaId"
                        placeholder="Manga ID"
                        value={formik.values.mangaId}
                        onChange={formik.handleChange}
                        className="w-full border p-2 rounded mb-2"
                    />
                )}
                {!episodeId && (
                    <input
                        name="episodeId"
                        placeholder="Episode ID"
                        value={formik.values.episodeId}
                        onChange={formik.handleChange}
                        className="w-full border p-2 rounded mb-2"
                    />
                )}

                <button
                    type="submit"
                    disabled={isLoading}
                    className="bg-blue-600 text-white w-full py-2 rounded mt-4"
                >
                    {isLoading ? "Uploading..." : "Upload Content"}
                </button>
            </form>

            {/* Display Existing Content */}
            <h3 className="text-md font-semibold mt-6">Uploaded Content</h3>
            {loadingContent ? (
                <p>Loading...</p>
            ) : errorContent ? (
                <p className="text-red-500">Failed to load content.</p>
            ) : (
                <div className="grid grid-cols-3 gap-2 mt-2">
                    {contentData?.contents?.map((item) => (
                        <img
                            key={item._id}
                            src={item.imageUrl}
                            alt="Episode content"
                            className="w-full h-auto rounded"
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
