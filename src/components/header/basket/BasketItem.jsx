import React from "react";
import styles from "./Basket.module.scss";

const BasketItem = () => {
  return (
    <div className={styles.info}>
      <ul className="clear d-flex justify-between align-center">
        <li className={styles.imgInfo}>
          <img
            width={70}
            height={70}
            src="https://meb-online.ru/upload/resize_cache/iblock/d8a/70_70_1/shkaf_dlya_odezhdy_senday_s_21_dub_sonoma.png"
            alt=""
          />
        </li>
        <li className={styles.nameInfo}>Шкаф для одежды Сэндай С-21</li>
        <li className={styles.priceInfo}>19531 ₽</li>
        <li className={styles.amountInfo}>
          <div className={styles.amountBorder}>
            <button className={styles.increment}>-</button>
            <div className={styles.counter}>0</div>
            <button className={styles.decrement}>+</button>
          </div>
        </li>
        <li className={styles.sumInfo}>19531 ₽</li>
        <li></li>
      </ul>

      <div className={styles.clearItemButton}>
        <button>×</button>
      </div>
    </div>
  );
};

export default BasketItem;
