import React from "react";
import { Player } from "../Components/Player";
import { SwiperFrame } from "../Components/SwiperFrame";
import { useRef, useEffect, useState } from "react";

export const Movies = () => {
  const moviePageContainer = useRef(0);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(moviePageContainer.current.offsetWidth);
    console.log("Startpage: ", width);
  });
  return (
    <div ref={moviePageContainer} className="startPage">
      <Player width={width} />
      <SwiperFrame width={width} />
    </div>
  );
};
