import React from "react";
import Banner from "./Banner";
import Nav from "./Nav";

function Header({ toggleMood ,setToggleMood}) {
  return (
    <header className="w-full flex justify-center items-center mx-auto">
      <div
        className={`w-11/12 p-4 rounded-es-xl rounded-ee-xl shadow-md ${
          toggleMood == "light"
            ? "shadow-slate-300"
            : toggleMood == "dark"
            ? "shadow-slate-600"
            : null
        }`}
      >
        <Banner />
        <Nav toggleMood={toggleMood} setToggleMood={setToggleMood}/>
      </div>
    </header>
  );
}

export default Header;
