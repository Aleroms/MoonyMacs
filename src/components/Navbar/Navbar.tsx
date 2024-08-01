import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

import Hamburger from "../Hamburger/Hamburger";
import Logo from "../Logo/Logo";
import NavbarLinks from "./NavbarLinks";

const Navbar: React.FC = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hidden, setHidden] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      // hide navbar when scrolling down and show
      // when scrolling up

      const scrollOffset = window.innerWidth > 600 ? 400 : 0;
      setHidden(window.scrollY > lastScrollY && lastScrollY > scrollOffset);

      // update last scroll position
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    // <nav className="navbar">
    <nav className={`navbar ${hidden && "scroll-down"}`}>
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
          <NavbarLinks />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
