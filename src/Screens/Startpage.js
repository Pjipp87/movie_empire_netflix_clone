import React from "react";
//import { Player, LoadingSpinner } from "video-react";
import { useRef, useEffect, useState } from "react";
import ReactPlayer from "react-player";
import "../Styles/Startpage.css";
import {
  BsPlayCircle,
  BsPlusLg,
  BsPauseCircle,
  BsArrowsFullscreen,
  BsVolumeMuteFill,
  BsVolumeUpFill,
  BsFullscreenExit,
} from "react-icons/bs";
import { VscDebugRestart } from "react-icons/vsc";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { Player } from "../Components/Player";

export const Startpage = () => {
  return (
    <div className="startPage">
      <Player />
    </div>
  );
};
