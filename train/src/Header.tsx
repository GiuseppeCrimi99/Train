import React, { useState } from "react";
import "./styles/Header.css";
import drinklogo from "./assets/images/drinkcolored.png";
function HeaderComponent() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={drinklogo} alt="logo" />
        <p>Drink 'n chill</p>
      </div>
      <div
        className={`burger-menu ${menuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
      <nav className={`navbar ${menuOpen ? "open" : ""}`}>
        <ul className={`nav-menu ${menuOpen ? "open" : ""}`}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default HeaderComponent;
