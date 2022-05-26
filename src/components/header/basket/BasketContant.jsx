import React from "react";
import BasketNav from "./BasketNav";
import BasketTotalPrice from "./BasketTotalPrice";
import BasketItem from "./BasketItem";
import styles from "./Basket.module.scss";

const BasketContant = () => {
  const [selectedBasket, setSelectedBasket] = React.useState(true);
  const [selectedLike, setSelectedLike] = React.useState(false);

  const handleSelectedBasket = () => {
    setSelectedBasket(true);
    setSelectedLike(false);
  };
  const handleSelectedLike = () => {
    setSelectedBasket(false);
    setSelectedLike(true);
  };

  return (
    <div className={`${styles.basket}`}>
      <div
        className={`${styles.basketTitle} p-30 d-flex clear align-center justify-between`}
      >
        <h1>Basket</h1>

        <div className={styles.navBaskOrLike}>
          <button
            className={selectedBasket ? styles.active : ""}
            onClick={handleSelectedBasket}
          >
            ready to order{" "}
            <span className={selectedBasket ? styles.active : ""}>(1)</span>
          </button>
          {selectedBasket && <hr />}
        </div>

        <div className={styles.navBaskOrLike}>
          <button
            className={selectedLike ? styles.active : ""}
            onClick={handleSelectedLike}
          >
            Liked
            <span className={selectedLike ? styles.active : ""}>(1)</span>
          </button>
          {selectedLike && <hr />}
        </div>

        <div className={`${styles.clearBasket} d-flex align-center`}>
          <span className="pr-10">×</span> clear
        </div>
      </div>

      <BasketNav />

      <BasketItem />
      <BasketItem />
      <BasketItem />

      {selectedBasket && (
        <>
          <BasketTotalPrice />
          <div className={`${styles.totalInfo} d-flex`}>
            <button>go to cart</button>
          </div>
        </>
      )}
    </div>
  );
};

export default BasketContant;
