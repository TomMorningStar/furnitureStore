import React from "react";
import logo from "../../images/logo.png";
import avatar from "../../images/avatar.png";
import Basket from "./basket/Basket";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const { user } = useSelector((state) => ({
    user: state.user,
  }));

  const dispatch = useDispatch();

  const handleExit = () => {
    dispatch({ type: "Exit" });
  };

  return (
    <header>
      <Basket token={user.token} />

      <div className={`${styles.headerNav} d-flex justify-between`}>
        <div>Welcome to our online shop</div>
        {!user.token && <Link to="/login">Login or Sing up</Link>}
      </div>

      <div className={`${styles.headerBottom} d-flex justify-between`}>
        <Link to="/" className="furniking d-flex align-center">
          <div>
            <img src={logo} alt="" />
          </div>
          <div>
            <strong className="ml-5">Furniking</strong>
          </div>
        </Link>

        <div className="d-flex align-center">
          <div className="mr-10">Login:</div>
          <div className={styles.login}>{user.login}</div>
          <button className="ml-20">
            <img src={avatar} alt="" />
          </button>

          {user.token && (
            <button
              onClick={handleExit}
              className={`${styles.exit} clear ml-10`}
            >
              Exit
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
