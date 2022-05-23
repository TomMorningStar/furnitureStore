import React from "react";
import styles from "./Basket.module.scss";

const BasketNav = () => {
  return (
    <div className={styles.nav}>
      <ul className="clear d-flex justify-between">
        <li className={styles.imgInfo}></li>
        <li className={styles.nameInfo}>name</li>
        <li className={styles.priceInfo}>price</li>
        <li className={`${styles.amountInfo}`}>amount</li>
        <li className={styles.sumInfo}>sum</li>
        <li></li>
      </ul>
    </div>
  );
};

export default BasketNav;
