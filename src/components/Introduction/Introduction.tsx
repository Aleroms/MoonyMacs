import React from "react";
import "./Introduction.css";
const Introduction: React.FC = () => {
  return (
    <section className="introduction">
      <div className="centered-text">
        <h2>to the moon and macs</h2>
        <h3>where every bite is a taste of perfection</h3>
        <p className="introduction-paragraph">
          Our family-owned bakery, nestled in the charming community of Apple
          Valley, CA, has been creating delectable macarons since 2021. Inspired
          by our grandmother’s traditional recipes and passion for baking, we
          set out to bring a piece of Paris to our hometown. Each macaron is
          handcrafted with the finest ingredients, ensuring a burst of flavor in
          every bite. Our commitment to quality and customer satisfaction has
          earned us a loyal following of macaron enthusiasts. We believe in the
          magic of small, local businesses and take pride in being a cherished
          part of the community. Join us and experience the warmth and love
          baked into every macaron.
        </p>
      </div>
    </section>
  );
};
export default Introduction;
