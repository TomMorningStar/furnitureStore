import React from "react";
import logo from "../images/logo.png";
import basket from "../images/basket.png";
import avatar from "../images/avatar.png";

const Header = () => {
  return (
    <header>
      <div className="header-nav d-flex justify-between">
        <div>Welcome to our online shop</div>
        <button>Login or Sing up</button>
      </div>

      <div className="header-bottom d-flex justify-between">
        <div className="furniking d-flex align-center">
          <div>
            <img src={logo} alt="" />
          </div>
          <div>
            <strong className="ml-5">Furniking</strong>
          </div>
        </div>
        <div className="d-flex">
          <button>
            <img src={basket} alt="" />
          </button>
          <button className="ml-20">
            <img src={avatar} alt="" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
