import { useState, useEffect } from "react";
import hottestList from "../services/HottestList";
import bg_manag from "../assets/img/bg_manga.jpg"


function HottestCart({ title, author, image, rateing }) {
    return (
        <article className='flex items-center justify-start gap-6
        ps-4 p-2  h-[166px] w-full cursor-pointer
        transition-all duration-300 ease-in-out hover:bg-gradient-to-r from-black to-primary-75 to-40% ' >
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
    const [isOn, setIsOn] = useState(true);
    const [hovered, setHovered] = useState(null);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsOn(true);
            } else {
                setIsOn(false); // hide on mobile again
            }
        };

        // Initial check
        handleResize();

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);


    return (
        <div className="flex relative">
            {/* Floating Toggle Button (only visible on mobile) */}
            <button
                onClick={() => setIsOn(!isOn)}
                className="fixed right-5 top-30 z-30 flex justify-center items-center
                           h-[50px] w-[50px] rounded-2xl bg-primary-100 text-[12px] md:hidden"
            >
                <svg xmlns="http://www.w3.org/2000/svg"
                    width="16" height="16"
                    fill="currentColor"
                    class="bi bi-fire text-secondary-100" viewBox="0 0 16 16">
                    <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16m0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15" />
                </svg>
            </button>

            {/* Panel List */}
            <div
                className={`w-[80%] mx-auto md:w-full bg-gradient-to-t from-black to-primary-75 h-fit pb-[200px] z-20
                                        ${isOn ? "block" : "hidden"} md:block  rounded-t-[10px]
                                        fixed top-5 md:static transition-all duration-700 ease-in`}
            >
                {/*Socal Banner */}
                <div className="hidden md:flex justify-between items-center 
                rounded-t-[10px]
                h-[55px] text-text-100 text-[14px] bg-[#363A4C]">
                    {/*discord*/}
                    <div
                        className="transition-all duration-700 ease-in-out w-[124px] h-full p-2 flex justify-center items-center"
                        onMouseEnter={() => setHovered("discord")}
                        onMouseLeave={() => setHovered(null)}
                    >
                        {hovered === "discord" ?
                            (
                                <div className="bg-purple-500 w-full h-full flex justify-center items-center rounded-[10px]">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        width="25" height="25" fill="currentColor"
                                        class="bi bi-discord " viewBox="0 0 16 16"
                                    >
                                        <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612" />
                                    </svg>
                                </div>
                            ) : (<h4>Discord</h4>)
                        }
                    </div>
                    <div
                        className="transition-all duration-700 ease-in-out w-[124px] h-full p-2 flex justify-center items-center"
                        onMouseEnter={() => setHovered("x")}
                        onMouseLeave={() => setHovered(null)}
                    >
                        {hovered === "x" ?
                            (
                                <div className="bg-black w-full h-full flex justify-center items-center rounded-[10px]">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        width="25" height="25" fill="currentColor"
                                        class="bi bi-twitter-x" viewBox="0 0 16 16">
                                        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                                    </svg>
                                </div>
                            ) : (<h4>X</h4>)
                        }
                    </div>
                    <div
                        className="transition-all duration-700 ease-in-out w-[124px] h-full p-2 flex justify-center items-center"
                        onMouseEnter={() => setHovered("facebook")}
                        onMouseLeave={() => setHovered(null)}
                    >
                        {hovered === "facebook" ?
                            (
                                <div className="bg-blue-600 w-full h-full flex justify-center items-center rounded-[10px]">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        width="25" height="25" fill="currentColor"
                                        class="bi bi-facebook" viewBox="0 0 16 16">
                                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                                    </svg>
                                </div>
                            ) : (<h4>Facebook</h4>)
                        }
                    </div>
                </div>

                {/*Logo banner */}
                <div className="hidden md:flex relative justify-center items-center">
                    <img src={bg_manag} alt="manga pic" />
                    <span className="bg-primary-100 px-20 py-3 absolute text-text-100 text-[32px]">Logo</span>
                </div>

                {/*black space*/}
                <div className="hidden md:block bg-black w-full h-[277px]">

                </div>

                {/* Header */}
                <div className="w-full flex justify-between items-center gap-3 bg-primary-100 ps-5 py-5">
                    <div className="flex items-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" fill="currentColor"
                            className="bi bi-fire text-text-100"

                            viewBox="0 0 16 16"
                        >
                            <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16m0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15" />
                        </svg>
                        <h3 className="text-text-100 text-[24px] font-bold">Hottest</h3>
                    </div>

                    <span className="flex items-center gap-3 justify-between px-5 py-2 bg-secondary-100 rounded-s-[5px] cursor-pointer
                                     transition-all duration-300 ease-in-out hover:rounded-s-[20px] hover:px-[20px] hover:pe-10"
                    >
                        <button className="text-sm font-semibold">ALL VIEW</button>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16" height="16" fill="currentColor"
                            class="bi bi-caret-right" viewBox="0 0 16 16"
                        >
                            <path d="M6 12.796V3.204L11.481 8zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753"></path>
                        </svg>
                    </span>
                </div>

                {/* Cart List */}
                {hottestList.map((hottest) => (
                    <HottestCart
                        key={hottest.id}
                        title={hottest.title}
                        author={hottest.author}
                        image={hottest.image}
                        rateing={hottest.rateing}
                    />
                ))}

                {/* Footer Button */}
                <div className="w-full flex items-center justify-center mt-[30px]">
                    <div
                        className="border-2 border-primary-100 rounded-[11px] w-[253px] py-1
                                   flex items-center justify-center text-primary-100 font-bold
                                   transition-all duration-300 ease-in-out
                                   hover:border-secondary-100 hover:text-secondary-100 hover:w-[330px]
                                   cursor-pointer"
                    >
                        <button className="text-[16px]">VIEW ALL</button>
                        <svg xmlns="http://www.w3.org/2000/svg"
                            width="16" height="16" fill="currentColor"
                            className="bi bi-caret-right" viewBox="0 0 16 16"
                        >
                            <path d="M6 12.796V3.204L11.481 8..." />
                        </svg>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default HottestCart