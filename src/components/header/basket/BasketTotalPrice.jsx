import React from "react";
import styles from "./Basket.module.scss";

const BasketTotalPrice = ({ setActive, basket }) => {
  let sum = basket.items.reduce(function (sum, elem) {
    return sum + elem.price * elem.amount;
  }, 0);

  return (
    <>
      <div
        className={`${styles.totalInfo} d-flex align-center justify-between`}
      >
        <div className={styles.onSelectToBasket}>
          <button onClick={() => setActive(false)}>Продолжить покупки</button>
        </div>

        <div className="d-flex align-center">
          <div>
            <b>Total</b>
          </div>
          <div className="ml-40">
            <b>{sum} ₽</b>
          </div>
        </div>
      </div>
    </>
  );
};

export default BasketTotalPrice;
