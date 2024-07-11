import React from "react";
import "./MissionStatement.css";
const MissionStatement: React.FC = () => {
  return (
    <section className="mission-statement">
      <div className="ms-item">
        <h2>Mission Statement</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt,
          reprehenderit? Autem laudantium nihil quo eaque corrupti modi
          consectetur, ipsum sequi nesciunt corporis sed magni dolorem? Tempore
          necessitatibus omnis nemo officiis. Nesciunt, sequi neque. Aspernatur
          exercitationem tempora ab quis assumenda, eveniet ut excepturi vero
          cupiditate reprehenderit sapiente, error molestiae. Laudantium,
          numquam!
        </p>
      </div>
      <div className="ms-item">
        <div className="img-wrapper">
          <img src="profile_pic.png" alt="profile picture" />
        </div>
      </div>
    </section>
  );
};
export default MissionStatement;
