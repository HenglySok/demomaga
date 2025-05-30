import React from "react";


const NavBar = () => {
    return (
        <nav className="flex items-center justify-between px-6 py-4  shadow bg-black">
            {/* Logo */}
            <div className="flex justify-center items-center gap-20">
                <div className="w-[100px] h-[100px] bg-primary-100 flex items-center justify-center">
                    {/* Replace with actual logo SVG or img */}
                    <span className="text-xl font-bold">Logo</span>
                </div>

                {/* Menu List */}
                <ul className="flex space-x-8 text-[16px] text-text-100">
                    <li className="hover:text-text-75 cursor-pointer">Home</li>
                    <li className="hover:text-text-75 cursor-pointer">About</li>
                    <li className="hover:text-text-75 cursor-pointer">Contact</li>
                </ul>
            </div>

            {/* Search Box */}
            <div className="relative w-[210px] h-[30px] px-10 py-5 bg-black border-2 bg-rose-500 rounded-full flex items-center">
                <span className="absolute left-3 w-4 h-4 text-text-75" />
                <input
                    type="text"
                    placeholder="Search by title or author"
                    className="w-full h-full pl-8 pr-2 bg-transparent text-[14px] text-text-100 placeholder-text-75 outline-none"
                />
            </div>
        </nav>
    );
};

export default NavBar;
