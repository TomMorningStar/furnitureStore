import React from "react";
import styles from "./Basket.module.scss";
import basket from "../../../images/shopping-bag.png";
import like from "../../../images/like.png";

const BasketIcons = ({ token, active, setActive }) => {
  const handleGetBasket = () => {
    //  if (token) {
    setActive(!active);
    //  }
  };

  return (
    <div>
      <div onClick={handleGetBasket} className={styles.icons}>
        <img width={25} src={basket} alt="Иконка корзины" />
      </div>
      <div onClick={handleGetBasket} className={styles.icons}>
        <img width={25} src={like} alt="Иконка лайка" />
      </div>
    </div>
  );
};

export default BasketIcons;
