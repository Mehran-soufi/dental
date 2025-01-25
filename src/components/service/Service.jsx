import React, { useRef } from "react";
import ServiceTitle from "./ServiceTitle";
import ServiceItems from "./ServiceItems";

function Service() {
  const swiperRef = useRef(null);
  return (
    <section className="w-full h-[30vh] my-4">
      <div className="w-11/12 h-full mx-auto flex gap-2">
        <ServiceTitle swiperRef={swiperRef} />
        <ServiceItems swiperRef={swiperRef} />
      </div>
    </section>
  );
}

export default Service;
