import React from "react";
import { useNavigate } from "react-router-dom";

import Banner from "../../components/Banner/Banner";

import "./About.css";
import MissionStatement from "../../components/MissionStatement/MissionStatement";
import ImagePanel from "../../components/ImagePanel/ImagePanel";
import Button from "../../components/Button/Button";

const About: React.FC = () => {
  const navigate = useNavigate();
  const buttonHandler = () => {
    navigate("/gallery");
  };
  return (
    <main>
      <Banner page="about" title="About" />
      <MissionStatement />
      <ImagePanel />
      <div className="mission-statement">
        <Button label="view gallery" onClick={buttonHandler} />
      </div>
    </main>
  );
};

export default About;
