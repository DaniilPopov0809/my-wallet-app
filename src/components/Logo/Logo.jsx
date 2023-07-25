import React from "react";
import logo from "../../assets/logo.svg";
import { Image } from "react-bootstrap";

const Logo = () => {
  return <Image src={logo} alt="logo" fluid width={40} />;
};

export default Logo;
