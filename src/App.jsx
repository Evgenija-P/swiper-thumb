/* eslint-disable no-unused-expressions */
import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import data from "./data.json";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./index.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

export default function App() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  console.log(data);

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {data.map((el) => (
          <SwiperSlide key={el.id}>
            <img src={el.url} alt="swiper gallary" />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={() =>
          setTimeout(() => {
            setThumbsSwiper();
          }, 50)
        }
        spaceBetween={10}
        slidesPerView={3}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {data.map((el) => (
          <SwiperSlide key={el.id}>
            <img src={el.url} alt="swiper gallary" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
