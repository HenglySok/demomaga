import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useAddMangaMutation } from "../../../redux/services/mangaSlice";


const AddManga = () => {
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
            } catch (err) {
                console.error("Upload error:", err);
            }
        },
    });

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setImageFile(file);
        setPreview(URL.createObjectURL(file));
    };

    return (
        <div className="bg-[#00000050] mx-auto h-fit w-fit">
            <form
                className="p-8 rounded shadow-md w-full max-w-sm space-y-4 bg-[#00000050] text-text-75 text-text-75"
                onSubmit={formik.handleSubmit}>
                <h2 className="text-lg font-semibold text-primary-100">Add Manga</h2>

                <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="block w-[100%] border p-2 rounded-[5px]"
                />
                {preview && <img src={preview} alt="Preview" className="w-32 mt-2" />}

                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    onChange={formik.handleChange}
                    value={formik.values.title}
                    className="block border px-3 py-2 w-full"
                />
                {formik.touched.title && formik.errors.title && (
                    <p className="text-red-500 text-sm">{formik.errors.title}</p>
                )}

                <input
                    type="text"
                    name="author"
                    placeholder="Author"
                    onChange={formik.handleChange}
                    value={formik.values.author}
                    className="block border px-3 py-2 w-full"
                />
                {formik.touched.author && formik.errors.author && (
                    <p className="text-red-500 text-sm">{formik.errors.author}</p>
                )}

                <textarea
                    name="description"
                    placeholder="Description"
                    onChange={formik.handleChange}
                    value={formik.values.description}
                    className="block border px-3 py-2 w-full"
                />
                {formik.touched.description && formik.errors.description && (
                    <p className="text-red-500 text-sm">{formik.errors.description}</p>
                )}

                <button
                    type="submit"
                    className="bg-primary-100 text-white px-4 py-2 rounded"
                    disabled={isLoading}
                >
                    {isLoading ? "Submitting..." : "Submit"}
                </button>

                {error && <p className="text-red-500 mt-2">Error: {error.message}</p>}
                {isSuccess && <p className="text-green-500 mt-2">Manga added!</p>}
            </form>
        </div>
    );
};

export default AddManga;
