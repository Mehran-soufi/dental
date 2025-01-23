import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Banner from "./Banner";
import Nav from "./Nav";

function Header({ toggleMood, setToggleMood }) {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="w-full flex flex-col justify-center items-center mx-auto">
      <motion.div
        className={`w-11/12 p-4 rounded-es-xl rounded-ee-xl shadow-md transition-all duration-200 ease-in-out ${
          toggleMood == "light"
            ? "shadow-slate-300 bg-slate-100"
            : toggleMood == "dark"
            ? "shadow-slate-600 bg-gray-900"
            : null
        } ${isSticky ? "sticky-nav" : ""}`}
        initial={{ y: 0 }} 
        animate={{ y: isSticky ? 0 : 0 }} 
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
          duration: 0.3,
        }} 
      >
        {!isSticky && <Banner />}
        <Nav toggleMood={toggleMood} setToggleMood={setToggleMood} />
      </motion.div>
    </header>
  );
}

export default Header;
