import { useState } from "react";
import { bgList } from "./bgList";
import Search from "./Search";
import List from "./List";



const NavBar = () => {

    //Menu button mobile
    const [isMenuMobileON, setIsMenuMobileON] = useState(false);

    return (
        <nav className="flex items-center justify-between px-6 py-4 shadow relative w-full h-fit z-30 m-5">
            <button
                onClick={() => setIsMenuMobileON(!isMenuMobileON)}
                className="flex lg:hidden"
            >
                <svg xmlns="http://www.w3.org/2000/svg"
                    width="70" height="70" fill="currentColor"
                    className="text-text-100 bi bi-list" viewBox="0 0 16 16"
                >
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                </svg>
            </button>

            <div className="absolute top-25 left-3 bg-primary-100 w-[200px]  rounded  z-100 transition-all duration-500 overflow-hidden">
                <ul className={`flex flex-col lg:hidden text-[16px] text-text-100 justify-start items-start 
                 rounded-[5px]
                    overflow-hidden  transition-[max-height,opacity] 
                    duration-500 ease-in-out ${isMenuMobileON ? "p-2" : "p-0"}
                    ${isMenuMobileON ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                    <List />
                </ul>

            </div>

            <ul className="w-full h-full absolute top-0 right-0 z-[-1] flex justify-between overflow-hidden">
                {
                    bgList.map((bg) => (
                        <img
                            className=" opacity-15"
                            src={bg.image} key={bg.id} alt="" />
                    ))
                }
            </ul>


            {/* Logo */}
            <div className="flex justify-center items-center gap-10 ">
                <div className="w-[100px] h-[100px] bg-primary-100 flex items-center justify-center flex-nowrap ">
                    {/* Replace with actual logo SVG or img */}
                    <span className="text-xl font-bold">Logo</span>
                </div>

                {/* Menu List */}
                <ul className="hidden  items-center justify-center  lg:flex lg:space-x-4  text-text-100 relative">
                    <List />
                </ul>
            </div>
            <span className="hidden lg:flex relative" ><Search /></span>
        </nav >
    );
};

export default NavBar;