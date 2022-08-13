import React from "react";
//import { Player, LoadingSpinner } from "video-react";
import { Player } from "../Components/Player";
import { SwiperFrame } from "../Components/SwiperFrame";

export const Startpage = () => {
  return (
    <div className="startPage">
      <Player />
      <SwiperFrame />
    </div>
  );
};
