import { useState } from "react";
import { bgList } from "./bgList";
import Search from "./Search";
import List from "./List";
import { useNavigate } from "react-router";

const NavBarWithoutLogin = () => {
    const [isMenuMobileON, setIsMenuMobileON] = useState(false);
    const navigate = useNavigate();

    return (
        <nav className="flex items-center justify-between shadow relative w-full h-fit z-4">
            <button
                onClick={() => setIsMenuMobileON(!isMenuMobileON)}
                className="flex lg:hidden"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="70"
                    height="70"
                    fill="currentColor"
                    className="text-text-100 bi bi-list"
                    viewBox="0 0 16 16"
                >
                    <path
                        fillRule="evenodd"
                        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                    />
                </svg>
            </button>

            <div className="absolute top-25 left-3 bg-primary-100 w-[200px] z-3 rounded transition-all duration-500">
                <ul
                    className={`flex flex-col lg:hidden text-[16px] text-text-100 justify-start items-start rounded-[5px] transition-[max-height,opacity] duration-500 ease-in-out overflow-hidden ${isMenuMobileON ? "p-2 max-h-[500px] opacity-100" : "p-0 max-h-0 opacity-0"
                        }`}
                >
                    <List />
                </ul>
            </div>

            <ul className="w-full h-full absolute top-0 right-0 z-[-1] flex justify-between overflow-hidden">
                {bgList.map((bg) => (
                    <li key={bg.id} className="flex-1">
                        <img
                            className="opacity-15 object-cover w-full h-full"
                            src={bg.image}
                            alt=""
                        />
                    </li>
                ))}
            </ul>

            {/* Logo */}
            <div className="flex justify-center items-center gap-10">
                <div className="w-[100px] h-[100px] bg-primary-100 flex items-center justify-center flex-nowrap">
                    <span className="text-xl font-bold">Logo</span>
                </div>

                {/* Menu List */}
                <ul className="hidden items-center justify-center lg:flex lg:space-x-4 text-text-100 relative">
                    <List />
                </ul>
            </div>
            <span className="hidden lg:flex relative">
                <Search />
                <button
                    onClick={() => navigate('/')}
                    className="bg-secondary-100 py-3 px-1 rounded-2xl"
                >
                    log in</button>
            </span>
        </nav>
    );
};

export default NavBarWithoutLogin;