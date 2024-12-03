"use client";
import React, { useRef } from "react";
import "./playerstyle.css";

const Videoplayer = ({ playState, setPlayState }) => {
  const player = useRef(null);

  const closePlayer = (e) => {
    if (e.target === player.current) {
      setPlayState(false);
    }
  };

  return (
    <div
      className={`video-player ${playState ? "" : "Hide"}`}
      ref={player}
      onClick={closePlayer}
    >
      <video src="/video.mp4" autoPlay muted controls></video>
    </div>
  );
};

export default Videoplayer;
