import React from "react";
import styles from "./Basket.module.scss";
import basket from "../../images/shopping-bag.png";
import like from "../../images/like.png";

const BasketIcons = ({ active, setActive }) => {
  return (
    <div>
      <div onClick={() => setActive(!active)} className={styles.icons}>
        <img width={25} src={basket} alt="Иконка корзины" />
      </div>
      <div onClick={() => setActive(!active)} className={styles.icons}>
        <img width={25} src={like} alt="Иконка лайка" />
      </div>
    </div>
  );
};

export default BasketIcons;
