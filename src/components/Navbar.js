import "./NavbarStyle.css";
import logo from "../assets/logo/Victoria-Logo.png";

import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click)

  return (
    <div className="header">
      <Link to="/">
        <img className="logo" src={logo} alt="Victoria Logo" />
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Offices">Offices</Link>
        </li>
        <li>
          <Link to="/Job-Offers">Job Offers</Link>
        </li>
        <li>
          <Link to="/Entertainments">Entertainments</Link>
        </li>
        <li>
          <Link to="/About-Us">About Us</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (<FaTimes />) : (<FaBars />)}
      </div>
    </div>
  );
};

export default Navbar;
