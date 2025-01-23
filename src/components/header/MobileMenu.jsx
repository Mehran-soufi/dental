import React, { useEffect } from "react";
import { FaTooth } from "react-icons/fa";
import { IoClose, IoSearch } from "react-icons/io5";

function MobileMenu({ isOpen, setIsOpen, toggleMood }) {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);
  return (
    <div
      className={`fixed inset-0 ${
        toggleMood == "light"
          ? "bg-slate-100 text-black"
          : "bg-gray-900 text-white"
      }  bg-opacity-100 z-[10000] flex flex-col items-center justify-center transition-transform transform duration-500 ease-in-out ${
        isOpen ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="w-11/12 mx-auto h-4/5 flex flex-col justify-around">
        <div className="w-full flex justify-between items-center">
          <div className="flex justify-start items-center">
            <p className="text-lg font-bold flex items-center text-cyan-500 cursor-pointer gap-1">
              <FaTooth />
              <span className="bg-gradient-to-l from-cyan-600 to-sky-700 text-transparent bg-clip-text">
                دنتال
              </span>
            </p>
          </div>
          <div className="flex justify-end items-center">
            <button className="" onClick={() => setIsOpen(false)}>
              <IoClose size={30} />
            </button>
          </div>
        </div>

        <ul className="flex flex-col items-center justify-center gap-6 text-lg w-full">
          <li
            className="shadow-inner shadow-slate-400 w-11/12 mx-auto flex justify-center items-center py-1 rounded-md"
            onClick={() => setIsOpen(false)}
          >
            معرفی
          </li>
          <li
            className="shadow-inner shadow-slate-400 w-11/12 mx-auto flex justify-center items-center py-1 rounded-md"
            onClick={() => setIsOpen(false)}
          >
            خدمات
          </li>
          <li
            className="shadow-inner shadow-slate-400 w-11/12 mx-auto flex justify-center items-center py-1 rounded-md"
            onClick={() => setIsOpen(false)}
          >
            رزرو نوبت
          </li>
          <li
            className="shadow-inner shadow-slate-400 w-11/12 mx-auto flex justify-center items-center py-1 rounded-md"
            onClick={() => setIsOpen(false)}
          >
            مطالب
          </li>
          <li
            className="shadow-inner shadow-slate-400 w-11/12 mx-auto flex justify-center items-center py-1 rounded-md"
            onClick={() => setIsOpen(false)}
          >
            گالری تصاویر
          </li>
          <li
            className="shadow-inner shadow-slate-400 w-11/12 mx-auto flex justify-center items-center py-1 rounded-md"
            onClick={() => setIsOpen(false)}
          >
            جستجو
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MobileMenu;
