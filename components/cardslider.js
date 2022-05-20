import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper";

export default function CardSlider() {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide className="bg-bluepotato p-12 h-52 w-80">Slide 1</SwiperSlide>
        <SwiperSlide className="bg-skyblue p-12 h-52 w-80">Slide 2</SwiperSlide>
        <SwiperSlide className="bg-bluepotato p-12 h-52 w-80">Slide 3</SwiperSlide>
        <SwiperSlide className="bg-skyblue p-12 h-52 w-80">Slide 4</SwiperSlide>
        <SwiperSlide className="bg-bluepotato p-12 h-52 w-80">Slide 5</SwiperSlide>
        <SwiperSlide className="bg-skyblue p-12 h-52 w-80">Slide 6</SwiperSlide>
        <SwiperSlide className="bg-bluepotato p-12 h-52 w-80">Slide 7</SwiperSlide>
        <SwiperSlide className="bg-skyblue p-12 h-52 w-80">Slide 8</SwiperSlide>
        <SwiperSlide className="bg-bluepotato p-12 h-52 w-80">Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}
