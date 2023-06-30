import React from 'react'
import "./Slider.css"

import bg1 from "../../assets/slider/bg1.png"
import bg2 from "../../assets/slider/bg2.png"
import bg3 from "../../assets/slider/bg3.png"
import bg4 from "../../assets/slider/bg4.png"
import bg5 from "../../assets/slider/bg5.png"
import bg6 from "../../assets/slider/bg6.png"



// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

function Slider() {
  return (
    <div className='container'>
        <div className="slider__container">
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
        <SwiperSlide><img src={bg1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={bg2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={bg3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={bg4} alt="" /></SwiperSlide>
        <SwiperSlide><img src={bg5} alt="" /></SwiperSlide>
        <SwiperSlide><img src={bg6} alt="" /></SwiperSlide>
      </Swiper>
        </div>
<br /> <br />
    </div>
  )
}

export default Slider