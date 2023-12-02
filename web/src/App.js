// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Intro from "./components/Intro";
import Menu from "./components/Menu";
import FadingVideo from "./components/FadingVideo";
// ... other imports
import Music from "./components/Music";
import Movies from "./components/Movies";
import About from "./components/About";
const App = () => {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <Router>
      <Intro onIntroComplete={() => setIntroComplete(true)} />
      <Menu />
      {introComplete && <FadingVideo startPlaying={introComplete} />}
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="music" element={<Music />} />
        <Route path="movies" element={<Movies />} />
        <Route path="about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
