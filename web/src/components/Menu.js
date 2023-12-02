// Menu.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Menu.css"; // Ensure this CSS file is linked

const Menu = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 3000); // Delay the appearance of the menu
  }, []);

  return (
    <nav className={isVisible ? "visible" : ""}>
      <ul>
        <li>
          <Link to="/music">Music</Link>
        </li>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
