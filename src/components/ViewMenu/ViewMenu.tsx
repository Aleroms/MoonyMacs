import React from "react";
import { useNavigate } from "react-router-dom";
import "./ViewMenu.css";
import Button from "../Button/Button";
import Carousel from "../Carousel/Carousel";
import { slides } from "../../data/carouselData.json";

const ViewMenu: React.FC = () => {
  const navigate = useNavigate();
  const buttonHandler = () => {
    navigate("/menu");
  };
  return (
    <section className="menu-cta">
      <div className="menu-cta-item">
        <h2>Delightful Macs</h2>
        <p>
          Explore our delightful menu featuring a constellation of unique and
          classic macaron flavors. From the warm, cinnamon embrace of Churro to
          the playful sweetness of Birthday Cake and the comforting crunch of
          Cookies and Cream, there’s something for every taste bud in our
          galaxy. Discover your favorite flavor today and treat yourself to a
          celestial delight!
        </p>
        <Button label="view menu" onClick={buttonHandler} />
      </div>
      <div className="menu-cta-item">
        <Carousel slides={slides} />
      </div>
    </section>
  );
};

export default ViewMenu;
