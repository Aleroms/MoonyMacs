import React from "react";
import NavbarLinks from "../Navbar/NavbarLinks";
import "./Footer.css";
import Logo from "../Logo/Logo";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer-item">
        <p>stay updated</p>
        {/* insert social media container here  */}
      </div>
      <div className="footer-item">
        <nav>
          <NavbarLinks />
        </nav>
      </div>
      <div className="footer-item">
        <div className="footer-stack">
          <div className="stack-item">
            <h4>Service Area</h4>
            <p>
              My current service area is the High Desert and surrounding areas.
            </p>
          </div>
          <div className="stack-item">
            <Logo width={100} />
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
