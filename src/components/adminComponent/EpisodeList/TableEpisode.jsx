import { useEffect } from "react"
import EpisodeRow from "./EpisodeRow"
import { useGetEpisodeByIDQuery } from "../../../redux/services/episodeSlice"


export const EpisodeList = [
    {
        id: 1,
        title: "Episode 1",
        imageFile: "",
    },
    {
        id: 2,
        title: "Episode 2",
        imageFile: "",
    },
    {
        id: 3,
        title: "Episode 3",
        imageFile: "",
    },
    {
        id: 4,
        title: "Episode 4",
        imageFile: "",
    },
    {
        id: 5,
        title: "Episode 5",
        imageFile: "",
    },
    {
        id: 6,
        title: "Episode 6",
        imageFile: "",
    },
]



function TableEpisode({ selectedManga }) {
    // const { data, isLoading, isError } = useGetEpisodeByIDQuery(selectedManga?._id, {
    //     skip: !selectedManga?._id, // avoid error on first render
    // });
    // console.log("data on eouside " + data);
    // console.log("on componet table episode: " + selectedManga);
    //const { data } = useGetEpisodeByIDQuery("686bedb2e9c9045bce757064");
    if (selectedManga == null) {
        return "Login..."
    }
    return (
        <div
            className="flex flex-col gap-[16px]"
        >
            <div className="flex justify-between items-end gap-[16px]
            bg-primary-75 p-5 text-text-75"
            >
                <span className="flex gap-[16px]">
                    <img src={selectedManga.coverImageUrl || ""}
                        alt=""
                        className="w-[130px] h-[130px]"
                    />
                    <span className="flex flex-col gap-2 justify-end">
                        <h6 className="text-[14px] font-light text-text-50">Episode</h6>
                        <h4 className="text-[18px] font-bold">{selectedManga.author || "Manga title"} </h4>
                        <p className="text-[12px] font-light">{selectedManga.description || "apple banana lorem"}</p>
                    </span>
                </span>
                <button
                    className='w-fit px-3 py-1 bg-secondary-75 rounded-[5px]'
                >
                    Add Episode
                </button>
            </div>
            <h3 className="text-text-75 text-[22px] mt-5">Episode List</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[16px]">
                {
                    EpisodeList.map((episode) => (
                        < EpisodeRow
                            key={episode.id}
                            title={episode.title}
                            imageFile={episode.imageFile}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default TableEpisode