import { useState } from 'react'

function SocialMediaBanner() {
    const [hovered, setHovered] = useState(null);
    return (
        <>
            {/*Socal Banner */}
            <div className="hidden md:flex justify-between items-center 
                rounded-[10px]
                h-[55px] text-text-100 text-[14px] bg-[#363A4C]">
                {/*discord*/}
                <div
                    className="transition-all duration-700 ease-in-out w-[124px] h-full p-2 flex justify-center items-center cursor-pointer"
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
                        ) : (<h4 className="text-text-100 text-[16px]">Discord</h4>)
                    }
                </div>
                <div
                    className="transition-all duration-700 ease-in-out w-[124px] h-full p-2 flex justify-center items-center cursor-pointer"
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
                        ) : (<h4 className="text-text-100 text-[16px]">X</h4>)
                    }
                </div>
                <div
                    className="transition-all duration-700 ease-in-out w-[124px] h-full p-2 flex justify-center items-center cursor-pointer"
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
                        ) : (<h4 className="text-text-100 text-[16px]">Facebook</h4>)
                    }
                </div>
            </div>
        </>
    )
}

export default SocialMediaBanner