import React from "react";
import { useNavigate } from "react-router-dom";
import "./ViewMenu.css";
import Button from "../Button/Button";

const ViewMenu: React.FC = () => {
  const temp = "300px";
  const navigate = useNavigate();
  const buttonHandler = () => {
    navigate("/menu");
  };
  return (
    <section className="menu-cta">
      <div className="menu-cta-item">
        <h2>View Menu</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi eius
          amet iste aliquid, ullam tenetur a corrupti. A error, quidem
          laboriosam laudantium atque aperiam incidunt corrupti, nihil
          perferendis numquam officiis.
        </p>
        <Button label="read more" onClick={buttonHandler} />
      </div>
      <div className="menu-cta-item">
        {/* eventually i'll add in the carousel here  */}
        <div
          style={{ width: temp, height: temp, backgroundColor: "#333" }}
        ></div>
      </div>
    </section>
  );
};

export default ViewMenu;
