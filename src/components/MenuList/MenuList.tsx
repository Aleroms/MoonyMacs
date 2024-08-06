import React from "react";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import "./MenuList.css";
import { customMacarons } from "../../data/imagePanel.json";
import ImagePanel from "../ImagePanel/ImagePanel";

interface Image {
  path: string;
  alt: string;
}

interface Macaron {
  id: number;
  name: string;
  description: string;
  image: Image;
}

interface MacaronsProp {
  macrons: Macaron[];
}

const MenuList: React.FC<MacaronsProp> = ({ macrons }) => {
  const navigate = useNavigate();
  const NavigateTo = () => {
    navigate("/contact");
  };
  return (
    <section className="menu">
      {/* for template macarons  */}
      <div className="menu-list">
        {macrons.map((macron) => (
          <div
            className="menu-item"
            key={macron.id}
            style={{
              backgroundColor:
                macron.id % 2 === 0
                  ? "rgba(245, 209, 177, 0.3)"
                  : "rgba(255, 255, 255, 0.5)",
            }}
          >
            <img src={macron.image.path} alt={macron.image.alt} />
            <div className="menu-text">
              <h3>{macron.name}</h3>
              <p>{macron.description}</p>
            </div>
          </div>
        ))}
      </div>
      {/* for custom macarons */}
      <div className="custom-menu-items">
        <div className="circle-container">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
        <div className="custom-menu-contact">
          <h3>If you would like a special request filled, please reach out</h3>
          <Button label="contact" onClick={NavigateTo} />
        </div>
      </div>
      <ImagePanel images={customMacarons} />
    </section>
  );
};
export default MenuList;
