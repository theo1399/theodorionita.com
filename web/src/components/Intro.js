// Intro.js
import React, { useState, useEffect } from "react";
import "./Intro.css"; // Ensure this CSS file is linked

const Intro = ({ onIntroComplete }) => {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
      if (onIntroComplete) {
        onIntroComplete(); // Notify parent component that intro is complete
      }
    }, 3000); // Duration for the intro

    return () => clearTimeout(timer);
  }, [onIntroComplete]);

  return (
    <div className={`intro ${showIntro ? "" : "move-to-menu"}`}>
      Theodor Ionita
    </div>
  );
};

export default Intro;
