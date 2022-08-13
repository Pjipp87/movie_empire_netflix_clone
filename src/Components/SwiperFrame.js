import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { MovieDB as DB } from "../_data/MovieDB";
import { useState } from "react";
import { Image } from "primereact/image";
import { Carousel } from "primereact/carousel";

export const SwiperFrame = () => {
  const [movieDB, setMovieDB] = useState(DB);

  const itemTemplate = (product) => {
    <Image
      //src={require(element.cover)}
      src={require(product.cover)}
      alt="Cover"
      template="Preview Content"
    ></Image>;
  };

  return (
    <div>
      {/*  <Carousel value={movieDB} itemTemplate={itemTemplate}></Carousel> */}
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        //onSwiper={(swiper) => console.log(swiper)}
        onSwiper={() => console.log(movieDB[0].cover.toString())}
        onSlideChange={() => console.log("slide change")}
      >
        {movieDB.map((element, index) => {
          return (
            <SwiperSlide key={index}>
              <div style={{ backgroundColor: "green" }}>
                <Image
                  //src={require(element.cover)}
                  src={element.cover}
                  alt="Cover"
                  template="Preview Content"
                ></Image>
                <h1>{element.cover}</h1>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      {/* <img
        src={"Covers/Captain_America_The_First_Avenger.jpg"}
        width="100em"
        alt="test"
      /> */}
    </div>
  );
};
