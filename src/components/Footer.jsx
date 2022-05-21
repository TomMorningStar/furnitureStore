import React from "react";
import logo from "../images/logo.png";

const Footer = () => {
  return (
    <footer className="d-flex justify-between align-center">
      <div className="d-flex align-center">
        <img width={32} height={38} src={logo} alt="" />
        <div className="furniking">Furniking</div>
      </div>

      <div>
        <ul className="clear d-flex justify-between">
          <li>Privacy</li>
          <li className="ml-20">Secutity</li>
          <li className="ml-20">Terms</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
