import React from "react";
import "./MissionStatement.css";
const MissionStatement: React.FC = () => {
  return (
    <section className="mission-statement">
      <div className="ms-item">
        <h2>My Story</h2>
        <p>
          At To the Moon and Macs, my journey began in 2021, driven by a love
          for baking and a passion for bringing people together through
          delightful treats. Inspired by my grandmother’s cherished recipes and
          a dream to share my creations, I started this bakery in the heart of
          Apple Valley, CA. Over the years, I have grown from a small kitchen
          operation to a beloved local business, all thanks to the wonderful
          community and dedicated customers. Every macaron I create is a
          testament to my commitment to quality, tradition, and innovation.
        </p>
      </div>
      <div className="ms-item">
        <div className="img-wrapper">
          <img src="profile_pic.png" alt="profile picture" loading="lazy" />
        </div>
      </div>
    </section>
  );
};
export default MissionStatement;
