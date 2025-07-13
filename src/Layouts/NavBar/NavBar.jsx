import { useState, useEffect } from "react";
import { bgList } from "./bgList";
import Search from "./Search";
import List from "./List";
import { useNavigate } from "react-router-dom";
import { FaBars, FaTimes, FaUserCog } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";

const NavBar = () => {
  const [isMenuMobileOpen, setIsMenuMobileOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  // Check auth status on mount and when storage changes
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    const userData = localStorage.getItem("user");

    setIsAuthenticated(!!token);
    setUser(userData ? JSON.parse(userData) : null);

    const handleStorageChange = () => {
      const token = localStorage.getItem("accessToken");
      const userData = localStorage.getItem("user");
      setIsAuthenticated(!!token);
      setUser(userData ? JSON.parse(userData) : null);
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const handleAuthAction = () => {
    if (isAuthenticated) {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("user");
      localStorage.removeItem("email");
      localStorage.removeItem("verifyEmail");
      setIsAuthenticated(false);
      setUser(null);
      setIsDropdownOpen(false);
      navigate("/");
    } else {
      navigate("/sign_in");
    }
  };

  const toggleMobileMenu = () => {
    setIsMenuMobileOpen(!isMenuMobileOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isDropdownOpen && !event.target.closest('.dropdown-container')) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isDropdownOpen]);

  return (
    <nav className="flex items-center justify-between shadow-md relative w-full z-50 bg-black h-full">
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
        className="w-[100px] h-[100px] bg-primary-100 flex items-center justify-center cursor-pointer m-2 p-3 rounded-[50%]"
        onClick={() => navigate("/")}
      >
        <span className="text-sm font-bold text-nowrap text-text-75">Demo Manga</span>
      </div>

      {/* Desktop menu */}
      <ul className="hidden lg:flex items-center justify-center space-x-6 text-text-100">
        <List />
      </ul>

      {/* Search and auth button */}
      <div className="hidden lg:flex items-center gap-4">
        <Search />
        {isAuthenticated ? (
          <div className="relative dropdown-container">
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={toggleDropdown}
            >
              {user?.avatar ? (
                <img
                  src={user.avatar}
                  alt="User avatar"
                  className="w-10 h-10 rounded-full border-2 border-white/50 hover:border-white/80 transition-all"
                />
              ) : (
                <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-700 font-medium">
                    {user?.firstName?.charAt(0)}{user?.lastName?.charAt(0)}
                  </span>
                </div>
              )}
            </div>

            {/* Dropdown menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                <div className="px-4 py-2 border-b border-gray-100">
                  <p className="text-sm font-medium text-gray-900">
                    {user?.firstName} {user?.lastName}
                  </p>
                  <p className="text-xs text-gray-500">{user?.email}</p>
                </div>

                {user?.role === 'admin' && (
                  <button
                    onClick={() => {
                      navigate("/admin");
                      setIsDropdownOpen(false);
                    }}
                    className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <FaUserCog className="mr-2" />
                    Admin Dashboard
                  </button>
                )}

                <button
                  onClick={handleAuthAction}
                  className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  <FiLogOut className="mr-2" />
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <button
            onClick={handleAuthAction}
            className="py-3 px-6 rounded-full bg-secondary-100 hover:bg-secondary-75 text-white font-medium"
          >
            Login
          </button>
        )}
      </div>

      {/* Mobile menu (keep existing mobile menu code) */}
      <div
        className={`fixed inset-0 bg-black/80 z-40 transition-opacity duration-300 lg:hidden ${isMenuMobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        onClick={toggleMobileMenu}
      >
        <div
          className={`absolute top-0 left-0 h-full w-3/4 max-w-xs bg-primary-100 shadow-lg transform transition-transform duration-300 ${isMenuMobileOpen ? "translate-x-0 overflow-auto" : "-translate-x-full"
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
              {isAuthenticated ? (
                <div className="flex flex-col gap-4 mt-4">
                  <div className="flex items-center gap-4">
                    {user?.avatar ? (
                      <img
                        src={user.avatar}
                        alt="User avatar"
                        className="w-8 h-8 rounded-full"
                      />
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
                        <span className="text-gray-700 text-xs">
                          {user?.firstName?.charAt(0)}{user?.lastName?.charAt(0)}
                        </span>
                      </div>
                    )}
                    <div>
                      <p className="text-sm font-medium">
                        {user?.firstName} {user?.lastName}
                      </p>
                      <p className="text-xs text-gray-300">{user?.email}</p>
                    </div>
                  </div>

                  {user?.role === 'admin' && (
                    <button
                      onClick={() => {
                        navigate("/admin");
                        setIsMenuMobileOpen(false);
                      }}
                      className="w-full py-2 px-4 rounded-md bg-blue-500 text-white font-medium flex items-center gap-2"
                    >
                      <FaUserCog />
                      Admin Dashboard
                    </button>
                  )}

                  <button
                    onClick={handleAuthAction}
                    className="w-full py-2 px-4 rounded-md bg-red-500 text-white font-medium flex items-center gap-2"
                  >
                    <FiLogOut />
                    Logout
                  </button>
                </div>
              ) : (
                <button
                  onClick={handleAuthAction}
                  className="w-full mt-4 py-3 px-4 rounded-md bg-secondary-100 text-white font-medium"
                >
                  Login
                </button>
              )}
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