import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

function Banner() {
  return (
    <section className="w-full flex justify-between items-center border-b py-1">
      <div className="w-1/2 flex justify-start items-center gap-1">
        <p className="text-cyan-500 sm:text-base text-sm">
        <FaLocationDot />
        </p>
      <p>ایران - تهران</p>
      </div>
      <div className="w-1/2 flex justify-end items-center gap-1">
        <p>021-111213</p>
        <p className="text-cyan-500 sm:text-base text-sm">
          <FaPhoneAlt />
        </p>
      </div>
    </section>
  );
}

export default Banner;
