import { MdDeleteOutline } from "react-icons/md"

const EpisodeRow = ({ title, imageFile }) => {
    return (
        <div className='w-full flex justify-between items-start p-5 bg-primary-75 text-text-75 rounded-[5px]'>
            <div className='flex gap-[16px]'>
                <img src={imageFile} alt=""
                    className='w-[70px] h-[70px] bg-text-75'
                />
                <h4>{title || "Episode Title"}</h4>
            </div>

            <div
                className='flex flex-col gap-[16px] justify-between items-end'
            >
                <button
                    className='w-fit px-3 py-1 bg-secondary-75 rounded-[5px]'
                >
                    Add Content
                </button>
                <MdDeleteOutline size={25} color='text-text-100' />
            </div>
        </div>
    )
}

export default EpisodeRow
