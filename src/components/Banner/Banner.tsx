import React, { useState, useEffect } from "react";

import Logo from "../Logo/LogoText";
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
      setLogoWidth(400);
    } else if (window.innerWidth < 1000) {
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

  return (
    <div className={`banner banner-${page}`}>
      {page === "home" && (
        <div className="banner-content">
          <Logo width={logoWidth} />
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
