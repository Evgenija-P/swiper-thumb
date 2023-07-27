import React, { useLayoutEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import data from "./data.json";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs, Controller } from "swiper/modules";

export default function Gallery() {
  const [thumbsSwiper, setThumbsSwiper] = useState();
  const [firstSwiper, setFirstSwiper] = useState();
  const [secondSwiper, setSecondSwiper] = useState();
  const swiper1Ref = useRef(null);
  const swiper2Ref = useRef();

  useLayoutEffect(() => {
    if (swiper1Ref.current !== null) {
      swiper1Ref.current.controller.control = swiper2Ref.current;
    }
  }, []);

  return (
    <div>
      <Swiper
        onSwiper={(swiper) => {
          if (swiper1Ref.current !== null) {
            swiper1Ref.current = swiper;
          }
        }}
        // preloadImages={false}
        controller={{ control: secondSwiper }}
        spaceBetween={10}
        slidesPerView={1}
        grabCursor={true}
        navigation={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs, Controller]}
        className="mySwiper2"
      >
        {data.map((el) => (
          <SwiperSlide key={el.id}>
            <img src={el.url} alt="swiper gallary" />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        controller={{ control: firstSwiper }}
        loop={false}
        spaceBetween={10}
        slidesPerView={3}
        watchSlidesProgress
        touchRatio={0.2}
        // preloadImages={false}
        slideToClickedSlide={true}
        onSwiper={setThumbsSwiper}
        modules={[Navigation, Thumbs, Controller]}
        className="mySwiper"
      >
        {data.map((el) => (
          <SwiperSlide key={el.id}>
            <img src={el.url} alt="swiper gallary" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
