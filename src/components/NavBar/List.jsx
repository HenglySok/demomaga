import { useState } from "react";
import { menuList } from "./menuList";

export default function List() {
    const [onMenuList, setOnMenuList] = useState(null);
    const [currentSeleted, setCurrentSeleted] = useState(0);
    return (
        <>
            {menuList.map((item, index) => (
                <li key={index}
                    onMouseEnter={() => { setOnMenuList("onMenu"); setCurrentSeleted(index) }}
                    onMouseLeave={() => setOnMenuList(null)}
                    className="hover:text-black md:hover:text-[#ffffff75] cursor-pointer flex md:justify-center
                    md:ps-0 w-full md:w-fit py-3 md:py-0 rounded-[10px]
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
                    <a href={item.href} className='ps-2'>
                        {item.title}
                    </a>
                </li >
            ))
            }
        </>
    )
}
