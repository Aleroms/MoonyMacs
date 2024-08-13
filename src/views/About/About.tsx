import React from "react";
import { useNavigate } from "react-router-dom";

import Banner from "../../components/Banner/Banner";
import MissionStatement from "../../components/MissionStatement/MissionStatement";
import ImagePanel from "../../components/ImagePanel/ImagePanel";
import Button from "../../components/Button/Button";

import "./About.css";
import { images } from "../../data/imagePanel.json";
import { aboutme } from "../../data/aboutMe.json";

const About: React.FC = () => {
  const navigate = useNavigate();
  const buttonHandler = () => {
    navigate("/gallery");
  };
  return (
    <main>
      <Banner page="about" title="About" />
      <MissionStatement />
      <ImagePanel images={images} />
      <div
        style={{
          backgroundColor: "white",
          display: "flex",
          justifyContent: "center",
          paddingBottom: "3rem",
        }}
      >
        <Button label="view gallery" onClick={buttonHandler} />
      </div>
      <section className="about-container">
        {aboutme.map((item, idx) => (
          <article key={idx} className="about-item">
            <h2>{item.section}</h2>
            <p>{item.content}</p>
          </article>
        ))}
      </section>
    </main>
  );
};

export default About;
