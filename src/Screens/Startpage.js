import React from "react";
//import { Player, LoadingSpinner } from "video-react";
import { useRef, useEffect, useState, useLayoutEffect } from "react";
import ReactPlayer from "react-player";
import "../Styles/Startpage.css";
import {
  BsPlayCircle,
  BsPlusLg,
  BsPauseCircle,
  BsArrowsFullscreen,
} from "react-icons/bs";
import { VscDebugRestart } from "react-icons/vsc";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

export const Startpage = () => {
  const [isplaying, setIsplaying] = useState(false);
  const startpage = useRef(null);
  const playerRef = useRef(null);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [show, setShow] = useState(true);
  const [initialShow, setinitialShow] = useState(true);
  const handle = useFullScreenHandle();

  useEffect(() => {
    setIsplaying(true);
    playerRef.current.seekTo(7, "seconds");
    const timer = setTimeout(() => {
      setinitialShow(false);
      setShow(false);
    }, 7000);
    return () => clearTimeout(timer);
  }, []);

  useLayoutEffect(() => {
    setWidth(startpage.current.offsetWidth);
    setHeight(playerRef.current.offsetHeight);
    console.log("Height: ", height);
  }, []);

  const _setShowInfo = () => {
    if (!initialShow) {
      setShow(true);
    }
  };

  const _setHideInfo = () => {
    if (!initialShow) {
      setShow(false);
    }
  };

  const _restart = () => {
    playerRef.current.seekTo(7, "seconds");
  };

  return (
    <div ref={startpage} className="startPage">
      <div
        className="trailerContainer"
        onMouseEnter={_setShowInfo}
        onMouseLeave={_setHideInfo}
      >
        <FullScreen handle={handle}>
          <ReactPlayer
            ref={playerRef}
            height={"fit-content"}
            width={width}
            className={`trailerPlayer`}
            playing={isplaying}
            controls={false}
            url="https://archive.org/download/turner_video_391170/391170.mp4"
          />
        </FullScreen>

        <div
          className={`trailerInfo ${show ? "fadeIn" : "fadeOut"}`}
          style={{ height: height }}
        >
          <h1>Iron Man</h1>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
          <div className="buttonRow">
            {isplaying ? (
              <div
                className="infoIconContainer"
                onClick={() => setIsplaying(!isplaying)}
              >
                {" "}
                <BsPauseCircle size={"2em"} />
                <b>Pause</b>
              </div>
            ) : (
              <div
                className="infoIconContainer"
                onClick={() => setIsplaying(!isplaying)}
              >
                <BsPlayCircle size={"2em"} />
                <b>Play</b>
              </div>
            )}
            <div className="infoIconContainer" onClick={() => _restart()}>
              <VscDebugRestart size={"2em"} />
              <b>Neustart</b>
            </div>
            <div className="infoIconContainer" onClick={handle.enter}>
              <BsArrowsFullscreen size={"2em"} />
              <b>Vollbild</b>
            </div>
            <div className="infoIconContainer">
              <BsPlusLg size={"2em"} />
              <b>Zur Liste</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
