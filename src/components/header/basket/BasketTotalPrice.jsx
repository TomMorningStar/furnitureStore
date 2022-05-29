import React from "react";
import styles from "./Basket.module.scss";

const BasketTotalPrice = () => {
  return (
    <div className={`${styles.totalInfo} d-flex`}>
      <div>
        <b>Total</b>
      </div>
      <div className="ml-40">
        <b>0 ₽</b>
      </div>
    </div>
  );
};

export default BasketTotalPrice;
