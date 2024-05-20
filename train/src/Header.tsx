import React from 'react';
import './styles/Header.css'
function HeaderComponent() {
  return (
    <header className="header">
      <div className="logo">Logo</div>
      <nav className="navbar">
        <ul className="nav-menu">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default HeaderComponent;
