import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Logo from "../Logo/LogoText";
import Button from "../Button/Button";
import "./Banner.css";

interface BannerProps {
  page: "home" | "about" | "contact";
  title?: string;
  buttonLabel?: string;
  onButtonClick?: () => void;
  content?: React.ReactNode;
}

const Banner: React.FC<BannerProps> = ({ page, title, content }) => {
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
    navigate("/menu");
  };
  return (
    <div className={`banner banner-${page}`}>
      {page === "home" && (
        <>
          <Logo width={logoWidth} />
          <Button label="view our menu" onClick={buttonHandler} />
        </>
      )}
      {(page === "about" || page === "contact") && (
        <>
          <h1>{title}</h1>
          <div className="banner-content">{content}</div>
        </>
      )}
    </div>
  );
};
export default Banner;
// return (
//     <div className="banner-container">
//       <Logo width={500} />
//     </div>
//   );
