import React, { useState } from "react";
import { FaSun, FaTooth } from "react-icons/fa";
import { IoMenu, IoMoon, IoSearch } from "react-icons/io5";
import { motion } from "framer-motion";
import MobileMenu from "./MobileMenu";

function Nav({ toggleMood, setToggleMood }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="w-full flex justify-between items-center py-2">
        <div className="flex justify-start items-center">
          <p className="text-lg font-bold flex items-center text-cyan-500 cursor-pointer gap-1">
            <FaTooth />
            <span className="bg-gradient-to-l from-cyan-600 to-sky-700 text-transparent bg-clip-text">
              دنتال
            </span>
          </p>
        </div>
        <div className="hidden sm:flex justify-center items-center">
          <ul className="flex items-center gap-4">
            <li className="header-menu">معرفی</li>
            <li className="header-menu">خدمات</li>
            <li className="header-menu">رزرو نوبت</li>
            <li className="header-menu">مطالب</li>
            <li className="header-menu">گالری تصاویر</li>
          </ul>
        </div>
        <div className="flex justify-end items-center gap-4">
          <div className="w-16 relative p-1 rounded-lg shadow-inner shadow-slate-400 flex justify-between items-center">
            <p
              onClick={() => setToggleMood("dark")}
              className="w-1/2 flex justify-center cursor-pointer text-slate-700"
            >
              <IoMoon />
            </p>
            <p
              onClick={() => setToggleMood("light")}
              className="w-1/2 flex justify-center cursor-pointer text-yellow-600"
            >
              <FaSun />
            </p>
            <motion.span
              animate={
                toggleMood == "light"
                  ? { left: 0 }
                  : toggleMood == "dark"
                  ? { right: 0 }
                  : null
              }
              className={`absolute top-0 left-0 bg-gradient-to-br from-cyan-500 to-purple-700 w-1/2 h-full ${
                toggleMood == "dark"
                  ? "rounded-s-lg"
                  : toggleMood == "light"
                  ? "rounded-e-lg"
                  : null
              }`}
            ></motion.span>
          </div>
          <div className="flex justify-center items-center sm:hidden">
            <button
              className="flex justify-center items-center w-7 h-7 rounded-full shadow-inner shadow-slate-400 outline-none border-none"
              onClick={() => setMenuOpen(true)}
            >
              <IoMenu />
            </button>
          </div>
          <div className="justify-center items-center sm:flex hidden">
            <button className="flex justify-center items-center w-7 h-7 rounded-full shadow-inner shadow-slate-400 outline-none border-none">
              <IoSearch />
            </button>
          </div>
        </div>
      </nav>
      <MobileMenu
        isOpen={menuOpen}
        setIsOpen={setMenuOpen}
        toggleMood={toggleMood}
      />
    </>
  );
}

export default Nav;
