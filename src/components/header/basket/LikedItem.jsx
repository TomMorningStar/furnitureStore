import React from "react";
import { useDispatch } from "react-redux";
import { pullArmchairToLiked } from "../../../redux/features/liked";
import styles from "./Basket.module.scss";

const LikedItem = ({ liked, product }) => {
  const dispatch = useDispatch();

  const handlePullBasketProduct = () => {
    dispatch(pullArmchairToLiked(liked.likedId, product._id));
  };

  return (
    <div className={styles.info}>
      <ul className="clear d-flex justify-between align-center">
        <li className={styles.imgInfo}>
          <img width={70} height={70} src={product.img} alt="" />
        </li>
        <li className={styles.nameInfo}>{product.name}</li>
        <li className={styles.priceInfo}>{product.price} ₽</li>
        <li className={styles.amountInfo}>{product.amount}</li>
        <li className={styles.sumInfo}>{product.price * product.amount} ₽</li>
        <li></li>
      </ul>

      <div className={styles.clearItemButton}>
        <button onClick={handlePullBasketProduct}>×</button>
      </div>
    </div>
  );
};

export default LikedItem;
