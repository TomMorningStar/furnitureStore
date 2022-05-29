import React from "react";
import { useDispatch } from "react-redux";
import { pullArmchairToBasket } from "../../../redux/features/basket";
import styles from "./Basket.module.scss";

const BasketItem = ({ basket, product }) => {
  const dispatch = useDispatch();

  const handlePullBasketProduct = () => {
    dispatch(pullArmchairToBasket(basket.basketId, product._id));
  };

  return (
    <div className={styles.info}>
      <ul className="clear d-flex justify-between align-center">
        <li className={styles.imgInfo}>
          <img width={70} height={70} src={product.img} alt="" />
        </li>
        <li className={styles.nameInfo}>{product.name}</li>
        <li className={styles.priceInfo}>{product.price} ₽</li>
        <li className={styles.amountInfo}>
          <div className={styles.amountBorder}>
            <button className={styles.increment}>-</button>
            <div className={styles.counter}>0</div>
            <button className={styles.decrement}>+</button>
          </div>
        </li>
        <li className={styles.sumInfo}>{product.price} ₽</li>
        <li></li>
      </ul>

      <div className={styles.clearItemButton}>
        <button onClick={handlePullBasketProduct}>×</button>
      </div>
    </div>
  );
};

export default BasketItem;
