import React from "react";
//import { Player, LoadingSpinner } from "video-react";
import { useRef, useEffect, useState } from "react";
import ReactPlayer from "react-player";
import "../Styles/Player.css";
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

export const Player = () => {
  const [isplaying, setIsplaying] = useState(false);
  const playerDiv = useRef(null);
  const playerRef = useRef(null);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [show, setShow] = useState(true);
  const [initialShow, setinitialShow] = useState(true);
  const fullscreenHandle = useFullScreenHandle();
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    setWidth(playerDiv.current.offsetWidth);
    setHeight(playerRef.current.offsetHeight);
    setIsplaying(true);
    playerRef.current.seekTo(7, "seconds");
    const timer = setTimeout(() => {
      setinitialShow(false);
      setShow(false);
    }, 7000);
    return () => clearTimeout(timer);
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

  const _showPlayerControl = () => {
    setShow(true);
    const timer = setTimeout(() => {
      setShow(false);
      clearTimeout(timer);
    }, 2000);
  };

  return (
    <div ref={playerDiv} className="player">
      <div
        className="trailerContainer"
        onMouseEnter={_setShowInfo}
        onMouseLeave={_setHideInfo}
      >
        <FullScreen handle={fullscreenHandle}>
          <div className="containerFullscreen" onMouseMove={_showPlayerControl}>
            <ReactPlayer
              muted={isMuted}
              ref={playerRef}
              height={fullscreenHandle.active ? "100%" : "fit-content"}
              //width={fullscreenHandle.active ? "100%" : width}
              width={fullscreenHandle.active ? "100%" : "100%"}
              className={`trailerPlayer`}
              playing={isplaying}
              controls={false}
              url="https://archive.org/download/turner_video_391170/391170.mp4"
            ></ReactPlayer>
            {fullscreenHandle.active ? (
              <div
                className={`fullscreenPlayerContainer ${
                  show ? "fadeIn" : "fadeOut"
                }`}
              >
                {isplaying ? (
                  <div
                    className="fullscreenIconContainer"
                    onClick={() => setIsplaying(!isplaying)}
                  >
                    <BsPauseCircle size={"2em"} />
                  </div>
                ) : (
                  <div
                    className="fullscreenIconContainer"
                    onClick={() => setIsplaying(!isplaying)}
                  >
                    <BsPlayCircle size={"2em"} />
                  </div>
                )}
                {isMuted ? (
                  <div className="fullscreenIconContainer">
                    <BsVolumeMuteFill
                      size="2em"
                      onClick={() => setIsMuted(!isMuted)}
                    />
                  </div>
                ) : (
                  <div className="fullscreenIconContainer">
                    <BsVolumeUpFill
                      size="2em"
                      onClick={() => setIsMuted(!isMuted)}
                    />
                  </div>
                )}
                <div className="fullscreenIconContainer">
                  <BsFullscreenExit
                    size="2em"
                    onClick={fullscreenHandle.exit}
                  />
                </div>
              </div>
            ) : null}
          </div>
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
            <div className="infoIconContainer" onClick={fullscreenHandle.enter}>
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