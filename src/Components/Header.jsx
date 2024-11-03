import { useState, useEffect, useRef } from "react";
import logo from "../assests/logo.png";
import { NavLink } from "react-router-dom";
import { FaBars, FaXmark } from "react-icons/fa6";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div className="md:w-full pl-6 h-32 bg-white flex items-center justify-between shadow-lg font-semibold">
        <div>
          <img
            src={logo}
            className="w-24 h-24 md:w-32 md:h-32 pt-3 pb-3"
            alt="Logo"
          />
        </div>
        <div className="hidden md:flex gap-6 md:gap-10 flex-wrap">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-orange-500 underline text-lg md:text-2xl duration-200"
                : "text-indigo-800 text-lg md:text-2xl"
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            to="/financial"
            className={({ isActive }) =>
              isActive
                ? "text-orange-500 underline text-lg md:text-2xl duration-200"
                : "text-indigo-800 text-lg md:text-2xl"
            }
          >
            Financial Info
          </NavLink>
        </div>
        <div className="pr-4 md:pr-9 ">
          <button className="text-sm md:text-md border-2 border-indigo-950 rounded-2xl w-28 md:w-32 font-semibold p-1 hidden">
            Contact Us
          </button>
          <div className="md:hidden">
            <button className="cursor-pointer" onClick={toggleMenu}>
              {isMenuOpen ? (
                <FaXmark className="w-5 h-5" />
              ) : (
                <FaBars className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="absolute bg-white shadow-lg rounded-lg p-4 mt-2 w-full max-w-full md:hidden flex flex-col gap-2 z-50"
        >
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-orange-500 underline text-lg duration-200"
                : "text-indigo-800 text-lg"
            }
            to="/"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/financial"
            className={({ isActive }) =>
              isActive
                ? "text-orange-500 underline text-lg duration-200"
                : "text-indigo-800 text-lg"
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Financial Info
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default Header;
