import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useAddEpisodeMutation } from "../../../redux/services/episodeSlice";


export default function AddEpisode() {
    const [imageFile, setImageFile] = useState(null);
    const [preview, setPreview] = useState(null);

    const [addEpisode, { isLoading, isSuccess, error }] = useAddEpisodeMutation

    const formik = useFormik({
        initialValues: {
            chapter: "",
            title: "",
            mangaId: "", // mangald in Postman = mangaId here
        },
        validationSchema: Yup.object({
            chapter: Yup.string().required("Chapter is required"),
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
            formData.append("mangaId", values.mangaId); // must match backend key
            formData.append("imageFile", imageFile); // file input

            try {
                await addEpisode(formData).unwrap();
                alert("Episode created!");
                resetForm();
                setImageFile(null);
                setPreview(null);
            } catch (err) {
                console.error("Error:", err);
            }
        },
    });

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setImageFile(file);
        setPreview(URL.createObjectURL(file));
    };

    return (
        <form onSubmit={formik.handleSubmit} className="space-y-4 p-4">
            <h2 className="text-lg font-bold">Create Episode</h2>

            <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="block"
            />
            {preview && <img src={preview} alt="Preview" className="w-32 mt-2" />}

            <input
                type="text"
                name="chapter"
                placeholder="Chapter"
                onChange={formik.handleChange}
                value={formik.values.chapter}
                className="border px-3 py-2 w-full"
            />
            <input
                type="text"
                name="title"
                placeholder="Title"
                onChange={formik.handleChange}
                value={formik.values.title}
                className="border px-3 py-2 w-full"
            />
            <input
                type="text"
                name="mangaId"
                placeholder="Manga ID"
                onChange={formik.handleChange}
                value={formik.values.mangaId}
                className="border px-3 py-2 w-full"
            />

            <button
                type="submit"
                disabled={isLoading}
                className="bg-green-600 text-white px-4 py-2 rounded"
            >
                {isLoading ? "Submitting..." : "Create Episode"}
            </button>

            {error && <p className="text-red-500 mt-2">Error: {error.data?.message}</p>}
            {isSuccess && <p className="text-green-600 mt-2">Episode created!</p>}
        </form>
    );
}
