import React from "react";
import "./MissionStatement.css";
const MissionStatement: React.FC = () => {
  return (
    <section className="mission-statement">
      <div className="ms-item">
        <h2>My Story</h2>
        <p>
          <i>To the Moon and Macs</i> began its journey in May 2021, fueled by a
          love for baking and the desire to create affordable, delicious
          macarons for everyone. As a self-taught macaron baker, I was inspired
          to start this business after wanting to buy macarons for my daughter
          but finding them too expensive. Determined to make this delightful
          treat accessible, I honed my craft and launched{" "}
          <i>To the Moon and Macs</i>. Today, I am proud to share my creations
          with the community, delivering joy and sweetness one macaron at a
          time.
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
