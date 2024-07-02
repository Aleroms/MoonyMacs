import React from "react";
import logo from "/logo/logoText.svg";

interface LogoParameters {
  width: number;
}

const Logo: React.FC<LogoParameters> = ({ width }) => {
  return (
    <img
      src={logo}
      alt="MoonyMacs"
      width={width}
      style={{ marginBottom: "1.625rem" }}
    />
  );
};
export default Logo;
