import React from "react";
import heroImg from "../../assets/images/hero.jpg";

function Hero({ toggleMood }) {
  return (
    <section className="w-full flex justify-center items-center mx-auto my-8">
      <div className="w-4/5 h-[70vh] rounded-lg relative">
        <img src={heroImg} alt="" className="w-full h-full rounded-lg z-0 sm:object-fill object-cover" />
        <div className="w-full h-full absolute top-0 left-0 z-50 bg-black/50 rounded-lg">
          <div
            className={`w-48 absolute top-0 left-0 lg:py-6 py-5 transition-all duration-200 ease-in rounded-es-md flex justify-center items-center border-transparent ${
              toggleMood == "dark" ? "bg-black" : "bg-white"
            }`}
          >
            <p className="w-full justify-center items-center text-center text-cyan-500 sm:text-lg text-base">
              با بیش از 20 سال سابقه درخشان
            </p>
          </div>
          <div className="w-full h-full flex sm:justify-center justify-end items-start flex-col p-4 gap-4">
            <h1 className="text-white lg:text-6xl text-4xl lg:py-8">
              کلینیک دندانپزشکی دنتال
            </h1>
            <p className="text-slate-200 lg:text-2xl sm:text-xl text-lg">
              دارای کادر بسیار مجرب و متخصص{" "}
            </p>
            <p className="text-slate-200 lg:text-2xl sm:text-xl text-lg">تضمین قیمت و کیفیت</p>
            <p className="text-slate-200 lg:text-2xl sm:text-xl text-lg">دارای محیطی کاملا مناسب</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
