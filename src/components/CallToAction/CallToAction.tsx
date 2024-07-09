import React from "react";
import "./CallToAction.css";
const CallToAction: React.FC = () => {
  return (
    <section className="call-to-action">
      <div className="cta-item">
        <h2>Get In Touch</h2>
        <h3>and buy some macrons :)</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex
          doloremque dolor officia iure molestias odio corrupti aliquid et fugit
          nemo.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
          asperiores aut magnam atque et, ipsa quod vero suscipit hic
          voluptatum.
        </p>
        {/* insert social media container here  */}
      </div>
      <div className="cta-item">
        <div className="img-wrapper">
          <img src="/logo/logoSvg.svg" alt="moonymacs" width={275} />
        </div>
      </div>
    </section>
  );
};
export default CallToAction;
