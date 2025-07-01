import { useState, useEffect } from "react";
import { bgList } from "./bgList";
import Search from "./Search";
import List from "./List";
import { useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
    const [isMenuMobileOpen, setIsMenuMobileOpen] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    // Check auth status on mount and when storage changes
    useEffect(() => {
        const token = localStorage.getItem("accesstoken");
        console.log("check accesstoken in navbar: " + token);
        setIsAuthenticated(!!token);

        const handleStorageChange = () => {
            const token = localStorage.getItem("accesstoken");
            setIsAuthenticated(!!token);
        };

        window.addEventListener("storage", handleStorageChange);
        return () => window.removeEventListener("storage", handleStorageChange);
    }, []);

    const handleAuthAction = () => {
        if (isAuthenticated) {
            localStorage.removeItem("accesstoken");
            localStorage.removeItem("refreshToken");
            localStorage.removeItem("user");
            setIsAuthenticated(false);
            navigate("/");
        } else {
            navigate("/sign_in");
        }
    };

    const toggleMobileMenu = () => {
        setIsMenuMobileOpen(!isMenuMobileOpen);
    };

    return (
        <nav className="flex items-center justify-between shadow-md relative w-full h-fit z-50 bg-white/10 backdrop-blur-sm">
            {/* Mobile menu button */}
            <button
                onClick={toggleMobileMenu}
                className="lg:hidden p-4 focus:outline-none"
                aria-label="Toggle menu"
                aria-expanded={isMenuMobileOpen}
            >
                {isMenuMobileOpen ? (
                    <FaTimes className="text-2xl text-text-100" />
                ) : (
                    <FaBars className="text-2xl text-text-100" />
                )}
            </button>

            {/* Logo */}
            <div
                className="w-[100px] h-[100px] bg-primary-100 flex items-center justify-center cursor-pointer"
                onClick={() => navigate("/")}
            >
                <span className="text-xl font-bold">Logo</span>
            </div>

            {/* Desktop menu */}
            <ul className="hidden lg:flex items-center justify-center space-x-6 text-text-100">
                <List />
            </ul>

            {/* Search and auth button */}
            <div className="hidden lg:flex items-center gap-4">
                <Search />
                <button
                    onClick={handleAuthAction}
                    className={`py-3 px-6 rounded-full transition-colors ${isAuthenticated
                        ? "bg-red-500 hover:bg-red-600"
                        : "bg-secondary-100 hover:bg-secondary-75"
                        } text-white font-medium`}
                >
                    {isAuthenticated ? "Logout" : "Login"}
                </button>
            </div>

            {/* Mobile menu */}
            <div
                className={`fixed inset-0 bg-black/80 z-40 transition-opacity duration-300 lg:hidden ${isMenuMobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                onClick={toggleMobileMenu}
            >
                <div
                    className={`absolute top-0 left-0 h-full w-3/4 max-w-xs bg-primary-100 shadow-lg transform transition-transform duration-300 ${isMenuMobileOpen ? "translate-x-0" : "-translate-x-full"
                        }`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="flex flex-col h-full p-4">
                        <div className="flex justify-end mb-8">
                            <button
                                onClick={toggleMobileMenu}
                                className="p-2 focus:outline-none"
                                aria-label="Close menu"
                            >
                                <FaTimes className="text-2xl text-text-100" />
                            </button>
                        </div>

                        <ul className="flex flex-col space-y-4 text-text-100">
                            <List mobile />
                        </ul>

                        <div className="mt-auto pt-4 border-t border-white/20">
                            <Search mobile />
                            <button
                                onClick={handleAuthAction}
                                className={`w-full mt-4 py-3 px-4 rounded-md ${isAuthenticated ? "bg-red-500" : "bg-secondary-100"
                                    } text-white font-medium`}
                            >
                                {isAuthenticated ? "Logout" : "Login"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Background images */}
            <ul className="w-full h-full absolute top-0 right-0 z-[-1] flex justify-between overflow-hidden pointer-events-none">
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
        </nav>
    );
};

export default NavBar;