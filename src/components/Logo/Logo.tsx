import React from "react";
import logo from "/logo/logoSvg.svg";

interface LogoParameters {
  width: number;
}

const Logo: React.FC<LogoParameters> = ({ width }) => {
  return <img src={logo} alt="MoonyMacs" width={width} />;
};
export default Logo;
