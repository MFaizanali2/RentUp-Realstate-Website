import { useState } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";


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
        <li><NavLink to="/" className="a">Home</NavLink></li>
        <li><NavLink to="/about" className="a">About</NavLink></li>
        <li><NavLink to="/services" className="a">Services</NavLink></li>
        <li><NavLink to="/destination" className="a">Destination</NavLink></li>
        <li><NavLink to="/agent" className="a">Agent</NavLink></li>
        <li><NavLink to="/pricing" className="a">Pricing</NavLink></li>
        <li><NavLink to="/contact" className="a">Contact</NavLink></li>
        <div className="nav-btn">
        <button className="fBtn"><span>2</span> My list</button>
        <button><i className="fa-solid fa-right-to-bracket"></i> Sign in</button>
      </div>
      </ul>
      
    </nav>
  );
};

export default Header;
