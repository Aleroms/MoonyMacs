import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

import Hamburger from "../Hamburger/Hamburger";
import Logo from "../Logo/Logo";
import NavbarLinks from "./NavbarLinks";

const Navbar: React.FC = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <NavLink to="/">
            <Logo width={70} />
          </NavLink>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <Hamburger />
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <NavbarLinks/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
