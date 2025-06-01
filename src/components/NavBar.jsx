import { useState } from "react";
import navbg from "../assets/img/nav/nav-bg.png"
import Test from "./Test";

const menuList = [
    { "title": "UPDATE", "herf": "#" },
    { "title": "FEATURE", "herf": "#" },
    { "title": "RANKING", "herf": "#" },
    { "title": "MANGA LIST", "herf": "#" },
    { "title": "CARTORS", "herf": "#" },
    { "title": "FAVORITED", "herf": "#" },
    { "title": "ABOUT US", "herf": "#" }
]

const bgList = [
    {
        "id": 1,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS20m0IhpQtHWkahi4-OBMb_r26-EcuknP7Q&s"
    },
    {
        "id": 2,
        "image": "https://www.sheknows.com/wp-content/uploads/2024/03/how-to-watch-demon-slayer-season-4-FI.jpg"
    },
    {
        "id": 3,
        "image": "https://static1.cbrimages.com/wordpress/wp-content/uploads/2024/08/naruto-amazon.jpg"
    },
    {
        "id": 4,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6QyRf7vQHgg7GF0hemhEASz8mQu8v_-9DIvPt7SUldiXcZ6oMmjMbSHjnu6MccMRh_oo&usqp=CAU"
    },
    {
        "id": 5,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqw5YSUu368oPh1leGUfcXgg9NkBM9wadGhg&s"
    },
    {
        "id": 6,
        "image": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQXruM_OPKCc6RL_JaJJ-Uew7inUm8NJQZV3q92jIDdR6Aqrc6z"
    },
]


const NavBar = () => {


    //Menu button mobile
    const [isMenuMobileON, setIsMenuMobileON] = useState(false);

    return (
        <nav className="flex items-center justify-between px-6 py-4 shadow md:overflow-hidden relative w-full z-30">
            <button
                onClick={() => setIsMenuMobileON(!isMenuMobileON)}
                className="flex md:hidden"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" className="text-text-100 bi bi-list" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                </svg>
            </button>

            <div className="absolute top-25 left-3 bg-primary-100 w-[200px] overflow-hidden rounded-md z-50 transition-all duration-500">
                <ul className={`flex flex-col md:hidden text-[16px] text-text-100 justify-start items-start 
                    overflow-hidden transition-[max-height,opacity] 
                    duration-500 ease-in-out 
                    ${isMenuMobileON ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                    <MenuList />
                </ul>

            </div>
            <ul className="w-full h-full absolute top-0 right-0 z-[-1] flex justify-between overflow-hidden ">
                {
                    bgList.map((bg) => (
                        <img
                            className=" opacity-15"
                            src={bg.image} key={bg.id} alt="" />
                    ))
                }
            </ul>
            {/* Logo */}
            <div className="flex justify-center items-center gap-20 overflow-hidden">
                <div className="w-[100px] h-[100px] bg-primary-100 flex items-center justify-center">
                    {/* Replace with actual logo SVG or img */}
                    <span className="text-xl font-bold">Logo</span>
                </div>

                {/* Menu List */}
                <ul className="hidden md:flex space-x-8 text-[16px] text-text-100 relative">
                    <MenuList />
                </ul>
            </div>
            <span className="hidden md:flex" ><Search /></span>
        </nav >
    );
};

export default NavBar;


export function Search() {
    const [onSearch, setOnSearch] = useState(null);
    const [searchValue, setSearchValue] = useState("");
    return (<>
        {/* Search Box */}
        <div
            className={`relative flex items-center justify-between h-[30px] transition-all duration-300 
                    px-4 py-1 rounded-[5px] border-b-2 border-b-red-500 
                    bg-[#1a1a1a] ${onSearch === "enter" ? "w-[420px]" : "w-[210px]"}`}
            onMouseEnter={() => setOnSearch("enter")}
            onMouseLeave={() => setOnSearch(null)}
        >
            <input
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Search by title or author"
                className="w-full h-full bg-transparent text-[14px] text-white placeholder:text-text-75 outline-none"
            />
            <svg xmlns="http://www.w3.org/2000/svg"
                width="16" height="16" fill="currentColor"
                class="bi bi-search text-text-100" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
        </div>
    </>)
}

export function MenuList() {
    const [onMenuList, setOnMenuList] = useState(null);
    const [currentSeleted, setCurrentSeleted] = useState(0);
    return (
        <>
            {menuList.map((item, index) => (
                <li key={index}
                    onMouseEnter={() => { setOnMenuList("onMenu"); setCurrentSeleted(index) }}
                    onMouseLeave={() => setOnMenuList(null)}
                    className="hover:text-black md:hover:text-[#ffffff75] cursor-pointer flex md:justify-center
                    ps-5 md:ps-0 w-full md:w-fit py-3 md:py-0 
                    hover:bg-secondary-100  md:hover:bg-transparent
                    md:hover:underline decoration-secondary-100">
                    {
                        onMenuList === "onMenu" && currentSeleted === index ? (
                            <svg xmlns="http://www.w3.org/2000/svg"
                                width="25" height="25" fill="currentColor"
                                className="hidden md:flex bi bi-caret-down absolute top-[-25px] text-secondary-100 animate-bounce" viewBox="0 0 16 16">
                                <path d="M3.204 5h9.592L8 10.481zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659" />
                            </svg>
                        ) : null
                    }
                    <a href={item.href}>
                        {item.title}
                    </a>
                </li>
            ))}
        </>
    )
}

