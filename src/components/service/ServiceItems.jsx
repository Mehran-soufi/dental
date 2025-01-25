import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// data import
import serviceData from "../../data/serviceData";

function ServiceItems({ swiperRef }) {
  return (
    <div className="lg:w-4/5 w-3/5 h-full">
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        slidesPerView={1.1}
        spaceBetween={5}
        breakpoints={{
          640: {
            slidesPerView: 1.1,
            spaceBetween: 5,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
        pagination={{
          clickable: true,
        }}
        className="mySwiper w-full h-full"
      >
        {serviceData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="w-full h-full gap-2 rounded-se-3xl rounded-es-3xl shadow-inner shadow-slate-400 flex flex-col justify-center items-center cursor-pointer transition duration-200 hover:shadow-slate-700">
              <img src={item.img} alt="" className="w-20 h-20" />
              <p>{item.name} </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ServiceItems;
