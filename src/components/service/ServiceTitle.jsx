import React from "react";
import dentalServices from "../../assets/images/dentalServices.jpg";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

function ServiceTitle({swiperRef}) {
  
const handlePrev = () => {
  if (swiperRef.current) swiperRef.current.slidePrev();
  };
  
  const handleNext = () => {
  if (swiperRef.current) swiperRef.current.slideNext();
  };
  
  return (
    <div className="lg:w-1/5 w-2/5 h-full rounded-se-3xl rounded-es-3xl relative">
      <img
        src={dentalServices}
        alt="dentalServices"
        className="w-full h-full rounded-se-3xl rounded-es-3xl"
      />
      <div className="w-full h-full rounded-se-3xl rounded-es-3xl absolute top-0 left-0 bg-gradient-to-br from-cyan-500/40 to-teal-700/50 flex flex-col justify-center items-center gap-4">
        <p className="text-white lg:text-2xl sm:text-xl">برخی از خدمات ما</p>
        <div className="flex justify-center items-center gap-8">
            <button
            onClick={handleNext}
            className="outline-none border-none lg:text-2xl sm:text-xl text-slate-200 transition duration-300 hover:text-purple-600">
            <FaArrowRightLong />
            </button>
            <button
            onClick={handlePrev}
            className="outline-none border-none lg:text-2xl sm:text-xl text-slate-200 transition duration-300 hover:text-purple-600">
            <FaArrowLeftLong />
            </button>
        </div>
      </div>
    </div>
  );
}

export default ServiceTitle;
