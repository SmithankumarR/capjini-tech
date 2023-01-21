import React from "react";
import { Brands } from "../constants/data";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

const Brand = () => {
  return (
    <div className="relative w-full flex gap-4 py-2 overflow-x-auto mx-auto">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {Brands.map(({ src }) => (
          <SwiperSlide>
            <img
              key={src}
              className="object-cover mx-auto  max-w-full"
              src={src}
              alt="a1"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Brand;
