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
import { MovieDB } from "../_data/MovieDB";
import { useSelector, useDispatch } from "react-redux";
import { increaseMovieNumber, decreaseMovieNumber } from "../Context/DB_Slice";

export const Player = (props) => {
  const [isplaying, setIsplaying] = useState(false);
  const playerDiv = useRef(null);
  const playerRef = useRef(null);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [show, setShow] = useState(true);
  const [initialShow, setinitialShow] = useState(true);
  const fullscreenHandle = useFullScreenHandle();
  const [isMuted, setIsMuted] = useState(false);
  const [curserShown, setCurserShown] = useState("unset");
  const initialMovieNumber = useSelector((state) => state.movie.value);
  const movieDBLength = useSelector((state) => state.movie.DB_Length);
  //const [MovieDBArr, setMovieDBArr] = useState(MovieDB);

  const dispatch = useDispatch();

  useEffect(() => {
    setWidth(playerDiv.current.offsetWidth);
    setHeight(playerRef.current.offsetHeight);
    setIsplaying(true);

    console.log("Main:", props.width);
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
    setCurserShown("unset");
    const timer = setTimeout(() => {
      setShow(false);
      clearTimeout(timer);
      setCurserShown("none");
    }, 5000);
  };

  const _toggleFullscreenMode = () => {
    if (fullscreenHandle.active) {
      fullscreenHandle.exit();
      setCurserShown("unset");
    }
    if (!fullscreenHandle.active) {
      fullscreenHandle.enter();
      setCurserShown("none");
    }
  };

  const _increase = () => {
    if (initialMovieNumber < movieDBLength - 1) {
      dispatch(increaseMovieNumber());
    }
  };

  const _decrease = () => {
    if (initialMovieNumber > 0) {
      dispatch(decreaseMovieNumber());
    }
  };

  return (
    <div ref={playerDiv} className="player" style={{ cursor: curserShown }}>
      <div
        className="trailerContainer"
        onMouseEnter={_setShowInfo}
        onMouseLeave={_setHideInfo}
      >
        <FullScreen handle={fullscreenHandle}>
          <div className="containerFullscreen" onMouseMove={_showPlayerControl}>
            <ReactPlayer
              //muted={isMuted}
              // TODO: replace "muted"
              muted={true}
              ref={playerRef}
              height={fullscreenHandle.active ? "100%" : "fit-content"}
              width={fullscreenHandle.active ? "100%" : width}
              //width={fullscreenHandle.active ? "100%" : "100%"}
              className={`trailerPlayer`}
              playing={isplaying}
              controls={false}
              url={MovieDB[initialMovieNumber].trailer}
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
                    onClick={_toggleFullscreenMode}
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
          <h1>{MovieDB[initialMovieNumber].name}</h1>
          <p>{MovieDB[initialMovieNumber].description}</p>
          <p>
            Initial Number: {initialMovieNumber} | Länge: {movieDBLength}
          </p>
          <button onClick={() => _increase()}>+</button>
          <button onClick={() => _decrease()}>-</button>
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
            <div className="infoIconContainer" onClick={_toggleFullscreenMode}>
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
