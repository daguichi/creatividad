"use client";
import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = () => {
  //video path
  let videosrc = "tachero.mp4";

  return (
    <div>
      {/* <h1>my custome player</h1> */}
      <ReactPlayer
        width="240px"
        height="320px"
        url={videosrc}
        controls={true}
        // light is usefull incase of dark mode
        light={false}
        // picture in picture
        pip={true}
      />
      <source src={videosrc} type="video/mp4" />
    </div>
  );
};

export default VideoPlayer;