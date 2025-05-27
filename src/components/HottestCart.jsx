
import hottestList from "../services/HottestList";
function HottestCart({ title, author, image, rateing }) {
    return (
        <article className='flex items-center justify-start ps-4 gap-6 h-[166px] w-[457px] p-2 transition-all duration-300 ease-in-out hover:bg-gradient-to-r from-black to-primary-75 to-40% ' >
            <img
                className='h-[141px] w-[103px]'
                src={image} alt="" />
            <div className='flex flex-col gap-[15px]'>
                <div>
                    <h3 className='text-[16px] text-text-100 font-bold'>{title}</h3>
                    <p className='text-[16px] text-text-50'>{author}</p>
                </div>
                <div className='flex items-center justify-start text-[16px] text-text-100 gap-2'>
                    <svg xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-fire"
                        viewBox="0 0 16 16">
                        <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16m0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15" />
                    </svg>
                    <h4>{rateing}</h4>
                </div>
            </div>
        </article>
    )
}


export function HottestCartList() {
    return (
        <div className="w-[503px] bg-gradient-to-t from-black to-primary-75 h-fit pb-[200px]">
            <span className="flex gap-3 items-center bg-primary-100 ps-5 py-5 justify-between">
                <div className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        class="bi bi-fire  text-text-100" viewBox="0 0 16 16">
                        <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16m0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15" />
                    </svg>
                    <h3 className="text-text-100 text-[24px] font-bold">Hottest</h3>
                </div>
                <span className="flex items-center gap-3 justify-between px-5 py-2 bg-secondary-100 rounded-s-[5px] cursor-pointer transition-all duration-300 ease-in-out hover:rounded-s-[20px] hover:px-[20px] hover:pe-10">
                    <button className="cursor-pointer">
                        ALL VIEW
                    </button>
                    <svg xmlns="http://www.w3.org/2000/svg"
                        width="16" height="16"
                        fill="currentColor"
                        class="bi bi-caret-right" viewBox="0 0 16 16">
                        <path d="M6 12.796V3.204L11.481 8zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753" />
                    </svg>
                </span>
            </span>

            {hottestList.map(hottest => (
                <HottestCart
                    key={hottest.id}
                    title={hottest.title}
                    author={hottest.author}
                    image={hottest.image}
                    rateing={hottest.rateing}
                />
            ))}
            <div className="w-full flex items-center justify-center mt-[30px]">
                <div className="border-[2px] border-primary-100 rounded-[11px] w-[253px] py-1
                flex items-center justify-center text-primary-100 font-bold
                transition-all  duration-300 ease-in-out
                hover:border-secondary-100 hover:text-secondary-100 hover:w-[330px]">
                    <button
                        className="text-[16px]">
                        VIEW ALL
                    </button>
                    <svg xmlns="http://www.w3.org/2000/svg"
                        width="16" height="16"
                        fill="currentColor"
                        class="bi bi-caret-right" viewBox="0 0 16 16">
                        <path d="M6 12.796V3.204L11.481 8zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753" />
                    </svg>
                </div>

            </div>
        </div>

    );
}
export default HottestCart