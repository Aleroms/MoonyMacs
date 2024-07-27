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
        <h2>View Menu</h2>
        <p>
          Explore our delightful menu featuring a variety of unique and classic
          macaron flavors. From rich chocolate ganache to fresh, fruity
          fillings, there's something for every palate. Discover your favorite
          flavor today and treat yourself to a sweet delight!
        </p>
        <Button label="read more" onClick={buttonHandler} />
      </div>
      <div className="menu-cta-item">
        <Carousel slides={slides} />
      </div>
    </section>
  );
};

export default ViewMenu;
