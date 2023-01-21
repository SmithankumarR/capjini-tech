import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { MyTeamImages } from "../constants/data";

export default function MyTeam() {
  return (
    <>
      <div className="flex justify-center items-center bg-white">
        <p className="text-4xl font-bold inline border-b-4 border-cyan-500 my-6 ">
          My Team
        </p>
      </div>
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
        {MyTeamImages.map(({ src }) => (
          <SwiperSlide>
            <img
              key={src}
              className="object-contain mx-auto  max-w-full h-[40vh]"
              src={src}
              alt="a1"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-center items-center bg-white">
        <p className="text-2xl font-bold inline border-b-4 border-cyan-500 m-8">
          "None of us, including me, ever do great things. But we can all do
          small things,
          <br /> with great love, and together we can do something wonderful." –{" "}
          <span className="text-red-400"> Mother Teresa </span>
        </p>
      </div>
    </>
  );
}
