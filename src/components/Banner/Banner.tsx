import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Logo from "../Logo/LogoText";
import Button from "../Button/Button";
import "./Banner.css";

interface BannerProps {
  page: "home" | "about" | "contact" | "gallery" | "menu";
  title?: string;
}

const Banner: React.FC<BannerProps> = ({ page, title }) => {
  const [logoWidth, setLogoWidth] = useState(500);

  const updateLogoWidth = () => {
    if (window.innerWidth < 600) {
      setLogoWidth(250);
    } else if (window.innerWidth < 800) {
      setLogoWidth(300);
    } else if (window.innerWidth < 1000) {
      setLogoWidth(400);
    } else {
      setLogoWidth(500);
    }
  };

  useEffect(() => {
    updateLogoWidth();
    window.addEventListener("resize", updateLogoWidth);
    return () => {
      window.removeEventListener("resize", updateLogoWidth);
    };
  }, []);
  const navigate = useNavigate();
  const buttonHandler = () => {
    console.log("menu clicked");
    navigate("/menu");
  };
  return (
    <div className={`banner banner-${page}`}>
      {page === "home" && (
        <div className="banner-content">
          <Logo width={logoWidth} />
          <Button label="view our menu" onClick={buttonHandler} />
        </div>
      )}
      {(page === "about" ||
        page === "contact" ||
        page === "gallery" ||
        page === "menu") && (
        <div className="banner-content">
          <h1>{title}</h1>
        </div>
      )}
    </div>
  );
};
export default Banner;
