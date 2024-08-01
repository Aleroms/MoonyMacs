import React from "react";
import { useNavigate } from "react-router-dom";

import Banner from "../../components/Banner/Banner";
import MissionStatement from "../../components/MissionStatement/MissionStatement";
import ImagePanel from "../../components/ImagePanel/ImagePanel";
import Button from "../../components/Button/Button";

import "./About.css";
import { images } from "../../data/imagePanel.json";

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
      <div style={{backgroundColor: "white", display: "flex",justifyContent:"center"}}>
        <Button label="view gallery" onClick={buttonHandler} />
      </div>
      <section className="about-container">
        <article className="about-item">
          <h2>about me</h2>
          <p>
            I am a dedicated baker with a passion for creating beautiful and
            delicious macarons. From perfecting each macaron to welcoming you
            with a smile, I play a vital role in making Apple Valley Macarons a
            special place. My love for what I do shines through in every macaron
            I create.
          </p>
        </article>
        <article className="about-item">
          <h2>my mission</h2>
          <p>
            My mission is simple: to create the most exquisite macarons that
            bring joy to every bite. I strive to maintain the highest standards
            of quality in my ingredients and baking processes, ensuring that
            each macaron is a perfect blend of taste and texture. I am dedicated
            to providing exceptional customer service and creating a welcoming
            environment for all patrons. At To the Moon and Macs, I believe that
            every moment is a bit sweeter with a macaron in hand.
          </p>
        </article>
        <article className="about-item">
          <h2>my community</h2>
          <p>
            To the Moon and Macs is more than just a bakery; it’s a gathering
            place for our community. I am honored to be part of your
            celebrations, big and small, and I cherish the relationships I have
            built with my customers over the years. Whether it’s supporting
            local events, or collaborating with other small businesses, I am
            dedicated to being a positive force in the High Desert and
            surrounding areas.
          </p>
        </article>
        <article className="about-item">
          <h2>contact me</h2>
          <p>
            I love hearing from you! Whether you have a question, a special
            request, or just want to share your macaron experience, please don’t
            hesitate to reach out. Message me on Instagram, Facebook, or send me
            an email. I am always here to help and look forward to connecting
            with you.
          </p>
        </article>
      </section>
    </main>
  );
};

export default About;
