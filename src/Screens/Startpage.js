import React from "react";
//import { Player, LoadingSpinner } from "video-react";
import { Player } from "../Components/Player";
import { SwiperFrame } from "../Components/SwiperFrame";
import { useRef, useEffect, useState } from "react";

export const Startpage = () => {
  const startpageContainer = useRef(0);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(startpageContainer.current.offsetWidth);
    console.log("Startpage: ", width);
  });

  return (
    <div ref={startpageContainer} className="startPage">
      <Player width={width} />
      <SwiperFrame width={width} />
    </div>
  );
};
