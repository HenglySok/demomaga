import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useAddMangaMutation } from "../../../redux/services/mangaSlice";

const AddManga = ({ onSuccess, onClose }) => {
    const [imageFile, setImageFile] = useState(null);
    const [preview, setPreview] = useState(null);
    const [addManga, { isLoading, isSuccess, error }] = useAddMangaMutation();

    const formik = useFormik({
        initialValues: {
            title: "",
            author: "",
            description: "",
        },
        validationSchema: Yup.object({
            title: Yup.string().required("Title is required"),
            author: Yup.string().required("Author is required"),
            description: Yup.string().required("Description is required"),
        }),
        onSubmit: async (values, { resetForm }) => {
            if (!imageFile) {
                alert("Please select an image.");
                return;
            }

            const formData = new FormData();
            formData.append("title", values.title);
            formData.append("author", values.author);
            formData.append("description", values.description);
            formData.append("imageFile", imageFile);

            try {
                await addManga(formData).unwrap();
                alert("Manga uploaded successfully!");
                resetForm();
                setImageFile(null);
                setPreview(null);
                onSuccess?.();
            } catch (err) {
                console.error("Upload error:", err);
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
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-md relative">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white transition-colors"
                    aria-label="Close form"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <form onSubmit={formik.handleSubmit} className="p-6 space-y-4">
                    <h2 className="text-xl font-bold text-gray-800 dark:text-white">Add New Manga</h2>

                    {/* Image Upload */}
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Cover Image
                        </label>
                        <div className="flex items-center justify-center w-full">
                            <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700">
                                {preview ? (
                                    <img src={preview} alt="Preview" className="w-full h-full object-cover rounded-lg" />
                                ) : (
                                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                        <svg className="w-8 h-8 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                        </svg>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">PNG, JPG (MAX. 5MB)</p>
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

                    {/* Title Field */}
                    <div>
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            placeholder="Manga title"
                            onChange={formik.handleChange}
                            value={formik.values.title}
                            className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                        />
                        {formik.touched.title && formik.errors.title && (
                            <p className="mt-1 text-sm text-red-600">{formik.errors.title}</p>
                        )}
                    </div>

                    {/* Author Field */}
                    <div>
                        <label htmlFor="author" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Author
                        </label>
                        <input
                            type="text"
                            id="author"
                            name="author"
                            placeholder="Author name"
                            onChange={formik.handleChange}
                            value={formik.values.author}
                            className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                        />
                        {formik.touched.author && formik.errors.author && (
                            <p className="mt-1 text-sm text-red-600">{formik.errors.author}</p>
                        )}
                    </div>

                    {/* Description Field */}
                    <div>
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Description
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            rows={3}
                            placeholder="Manga description"
                            onChange={formik.handleChange}
                            value={formik.values.description}
                            className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                        />
                        {formik.touched.description && formik.errors.description && (
                            <p className="mt-1 text-sm text-red-600">{formik.errors.description}</p>
                        )}
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isLoading ? (
                            <>
                                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Adding...
                            </>
                        ) : (
                            "Add Manga"
                        )}
                    </button>

                    {/* Error Message */}
                    {error && (
                        <div className="mt-4 p-3 bg-red-50 text-red-700 rounded-md">
                            {error.data?.message || "Failed to add manga"}
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
};

export default AddManga;