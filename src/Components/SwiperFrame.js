import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { MovieDB as DB } from "../_data/MovieDB";
import { useState } from "react";

export const SwiperFrame = () => {
  const [movieDB, setMovieDB] = useState(DB);

  return (
    <div>
      {/* <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {movieDB.map((element, index) => {
          return (
            <SwiperSlide key={index}>
              <div style={{ backgroundColor: "green" }}>
                <img
                  //src={require(element.cover)}
                  require={{ uri: element.cover }}
                  alt="Cover"
                  width={"199em"}
                ></img>
                <h1>{element.name}</h1>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper> */}
      <img
        src={"Covers/Captain_America_The_First_Avenger.jpg"}
        width="100em"
        alt="test"
      />
    </div>
  );
};
