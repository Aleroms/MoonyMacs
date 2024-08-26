import React from "react";
import "./Introduction.css";
import SocialMedia from "../SocialMedia/SocialMedia";
const Introduction: React.FC = () => {
  return (
    <section className="introduction">
      <div className="centered-text">
        <h2>to the moon and macs</h2>
        <h3>where every bite is a taste of perfection</h3>
        <p className="introduction-paragraph">
          Welcome <i>To the Moon and Macs</i>, a stellar macaron bakery launched
          in May 2021 and proudly serving the High Desert and beyond. Built on a
          foundation of passion, creativity, and the drive to share delectable
          treats, we are dedicated to bringing joy to every corner of our
          galaxy. Each macaron is crafted with the finest ingredients, ensuring
          an out-of-this-world experience in every bite. We deliver these sweets
          straight to your taste-buds!
        </p>
        <p>
          Join us on this journey and experience the warmth and love that goes
          into every macaron.
        </p>
        <SocialMedia type="simple" size="md" />
      </div>
    </section>
  );
};
export default Introduction;
