import React from "react";
import styles from "./Basket.module.scss";
import basket from "../../../images/shopping-bag.png";
import like from "../../../images/like.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const BasketIcons = ({ active, setActive }) => {
  const token = useSelector((state) => state.user.token);

  const handleGetBasket = () => {
    if (token) {
      setActive(!active);
    }
  };

  return (
    <div>
      {token && (
        <>
          <div onClick={handleGetBasket} className={styles.icons}>
            <img width={25} src={basket} alt="Иконка корзины" />
          </div>
          <div onClick={handleGetBasket} className={styles.icons}>
            <img width={25} src={like} alt="Иконка лайка" />
          </div>
        </>
      )}
      {!token && (
        <>
          <Link to="/login" onClick={handleGetBasket}>
            <div className={styles.icons}>
              <img width={25} src={basket} alt="Иконка корзины" />
            </div>
          </Link>

          <Link to="/login" onClick={handleGetBasket} className={styles.icons}>
            <div className={styles.icons}>
              <img width={25} src={like} alt="Иконка лайка" />
            </div>
          </Link>
        </>
      )}
    </div>
  );
};

export default BasketIcons;
