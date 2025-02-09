import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="./images/logo.png" alt="" />
      </div>
      <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>
      <ul className={isOpen ? "nav-links open" : "nav-links"}>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">Contact</a></li>
        <div className="nav-btn">
        <button className="fBtn"><span>2</span> My list</button>
        <button><i class="fa-solid fa-right-to-bracket"></i> Sign in</button>
      </div>
      </ul>
      
    </nav>
  );
};

export default Header;
