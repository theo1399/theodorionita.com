// FadingVideo.js
import React, { useState, useEffect } from "react";
import "./FadingVideo.css"; // Make sure to create this CSS file

const FadingVideo = ({ startPlaying }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (startPlaying) {
      setTimeout(() => {
        setIsVisible(true);
      }, 3500); // Adjust the timing as necessary
    }
  }, [startPlaying]);

  return (
    <div className={`video-container ${isVisible ? "visible" : ""}`}>
      <video controls autoPlay loop muted={!isVisible}>
        <source src="video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default FadingVideo;
