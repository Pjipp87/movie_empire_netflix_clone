import React from "react";
import { Navigation, Pagination, A11y, Zoom, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/zoom";
import "swiper/css/a11y";
import "swiper/css/effect-fade";
import { setMovieNumber } from "../Context/DB_Slice";
import { useDispatch } from "react-redux";

import { MovieDB as DB } from "../_data/MovieDB";
import { useState, useRef } from "react";

import "../Styles/SwiperFrame.css";

export const MovieSwiper = (props) => {
  const [movieDB, setMovieDB] = useState(DB);
  const swipeContainer = useRef(0);
  const dispatch = useDispatch();

  return (
    <div ref={swipeContainer}>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, A11y, Zoom, EffectFade]}
        spaceBetween={50}
        slidesPerView={5}
        navigation
        pagination={{ clickable: true }}
        //onSwiper={(swiper) => console.log(swiper)}
        onSwiper={() => console.log(movieDB[0].cover.toString())}
        onSlideChange={() => console.log("slide change")}
        style={{ width: props.width }}
      >
        {movieDB.map((element, index) => {
          return (
            <SwiperSlide key={index}>
              <div
                className="swiperElement"
                onClick={() => dispatch(setMovieNumber(element.id - 1))}
              >
                <img
                  //src={require(element.cover)}
                  src={element.cover}
                  alt="Cover"
                  width={"350px"}
                  height={"500px"}
                ></img>
                <p>{element.name}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
