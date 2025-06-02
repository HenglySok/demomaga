import { useState } from "react";
import './nav.css'

export default function Search() {
    const [onSearch, setOnSearch] = useState(null);
    const [searchValue, setSearchValue] = useState("");
    return (<>
        {/* Search Box */}
        <div
            className={` relative flex items-center justify-between h-[30px] transition-all duration-500t gap-2
                    px-4 py-1 rounded-[5px] border-b-2 border-b-red-500
                    bg-[#1a1a1a] ${onSearch === "enter" ? "lg:w-full xl:w-[420px] " : "w-fit"}`}
            onMouseEnter={() => setOnSearch("enter")}
            onMouseLeave={() => setOnSearch(null)}
        >
            <input
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Search by title or author"
                className={`w-full h-full bg-transparent text-[14px] transition-all duration-500
                 text-white placeholder:text-text-75 outline-none
                 ${onSearch === "enter" ? 'top-0 left-0 w-full' : 'search'}
                 `
                }
            />
            <svg xmlns="http://www.w3.org/2000/svg"
                width="16" height="16" fill="currentColor"
                class="bi bi-search text-text-100" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
        </div>
    </>)
}