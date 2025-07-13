import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useAddEpisodeMutation } from "../../../redux/services/episodeSlice";

export default function CreateEpisode({ mangaId, onClose, onSuccess }) {
    const [imageFile, setImageFile] = useState(null);
    const [preview, setPreview] = useState(null);
    const [addEpisode, { isLoading, isSuccess, error }] = useAddEpisodeMutation();

    const formik = useFormik({
        initialValues: {
            chapter: "",
            title: "",
            mangaId: mangaId || "",
        },
        validationSchema: Yup.object({
            chapter: Yup.string()
                .required("Chapter is required")
                .matches(/^[0-9]+$/, "Chapter must be a number"),
            title: Yup.string().required("Title is required"),
            mangaId: Yup.string().required("Manga ID is required"),
        }),
        onSubmit: async (values, { resetForm }) => {
            if (!imageFile) {
                alert("Please select an image.");
                return;
            }

            const formData = new FormData();
            formData.append("chapter", values.chapter);
            formData.append("title", values.title);
            formData.append("mangaId", values.mangaId);
            formData.append("imageFile", imageFile);

            try {
                await addEpisode(formData).unwrap();
                alert("Episode created successfully!");
                resetForm();
                setImageFile(null);
                setPreview(null);
                onSuccess?.(); // Trigger refresh in parent
                onClose?.(); // Close modal if passed
            } catch (err) {
                console.error("Upload error:", err);
            }
        },
    });

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            // Validate file type and size
            if (!file.type.match("image.*")) {
                alert("Please select an image file");
                return;
            }
            if (file.size > 5 * 1024 * 1024) {
                alert("File size should be less than 5MB");
                return;
            }
            setImageFile(file);
            setPreview(URL.createObjectURL(file));
        }
    };

    return (
        <div className="fixed inset-0 bg-[url(src/assets/img/bg-image/backgroup.png)] bg-center bg-cover 0 flex items-center justify-center z-50 p-4">
            <form
                onSubmit={formik.handleSubmit}
                className="bg-[#00000050] rounded-lg shadow-xl w-full max-w-md"
            >
                <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-bold text-primary-100">Create Episode</h2>
                        <button
                            type="button"
                            onClick={onClose}
                            className="text-text-75"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>

                    {/* Image Upload */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-text-75 mb-1">
                            Episode Cover Image
                        </label>
                        <div className="flex items-center justify-center w-full">
                            <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                                {preview ? (
                                    <img
                                        src={preview}
                                        alt="Preview"
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                ) : (
                                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                        <svg
                                            className="w-8 h-8 mb-3 text-gray-400"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                            ></path>
                                        </svg>
                                        <p className="text-xs text-gray-500">
                                            PNG, JPG (MAX. 5MB)
                                        </p>
                                    </div>
                                )}
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                    className="hidden"
                                />
                            </label>
                        </div>
                    </div>

                    {/* Chapter Input */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-text-75 mb-1">
                            Chapter Number
                        </label>
                        <input
                            type="text"
                            name="chapter"
                            placeholder="e.g., 1, 2, 3..."
                            onChange={formik.handleChange}
                            value={formik.values.chapter}
                            className="w-full text-text-75 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {formik.touched.chapter && formik.errors.chapter && (
                            <p className="mt-1 text-sm text-red-600">
                                {formik.errors.chapter}
                            </p>
                        )}
                    </div>

                    {/* Title Input */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-text-75 mb-1">
                            Episode Title
                        </label>
                        <input
                            type="text"
                            name="title"
                            placeholder="e.g., The Beginning"
                            onChange={formik.handleChange}
                            value={formik.values.title}
                            className="w-full text-text-75 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {formik.touched.title && formik.errors.title && (
                            <p className="mt-1 text-sm text-red-600">
                                {formik.errors.title}
                            </p>
                        )}
                    </div>

                    {/* Hidden Manga ID if passed via props */}
                    {mangaId && (
                        <input type="hidden" name="mangaId" value={mangaId} />
                    )}

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-primary-100 text-white py-2 px-4 rounded-md hover:bg-primary-75 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isLoading ? (
                            <>
                                <svg
                                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                    ></circle>
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                    ></path>
                                </svg>
                                Creating...
                            </>
                        ) : (
                            "Create Episode"
                        )}
                    </button>

                    {/* Error Message */}
                    {error && (
                        <div className="mt-4 p-3 bg-red-50 text-red-700 rounded-md">
                            {error.data?.message || "Failed to create episode"}
                        </div>
                    )}
                </div>
            </form>
        </div>
    );
}