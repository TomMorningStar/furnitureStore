import React from "react";
import BasketNav from "./BasketNav";
import BasketTotalPrice from "./BasketTotalPrice";
import BasketItem from "./BasketItem";
import styles from "./Basket.module.scss";
import LikedItem from "./LikedItem";

const BasketContant = ({ setActive, liked, basket }) => {
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
            ready to order
            <span className={selectedBasket ? styles.active : ""}>
              ({basket.items.length})
            </span>
          </button>
          {selectedBasket && <hr />}
        </div>

        <div className={styles.navBaskOrLike}>
          <button
            className={selectedLike ? styles.active : ""}
            onClick={handleSelectedLike}
          >
            Liked
            <span className={selectedLike ? styles.active : ""}>
              ({liked.items.length})
            </span>
          </button>
          {selectedLike && <hr />}
        </div>

        <div className={`${styles.clearBasket} d-flex align-center`}>
          <span className="pr-10">×</span> clear
        </div>
      </div>

      <BasketNav />

      {selectedBasket ? (
        <div
          className={
            basket.items.length >= 4 ? styles.basketContantWrapper : ""
          }
        >
          {basket.items.map((product) => {
            return (
              <BasketItem basket={basket} key={product._id} product={product} />
            );
          })}
        </div>
      ) : (
        liked && (
          <div
            className={
              liked.items.length >= 4 ? styles.basketContantWrapper : ""
            }
          >
            {liked.items.map((product) => {
              return (
                <LikedItem liked={liked} key={product._id} product={product} />
              );
            })}
          </div>
        )
      )}

      {selectedBasket && (
        <>
          <BasketTotalPrice setActive={setActive} basket={basket} />
          <div className={`${styles.totalInfo} d-flex`}>
            <button>go to cart</button>
          </div>
        </>
      )}
    </div>
  );
};

export default BasketContant;
