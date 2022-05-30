import React from "react";
import styles from "./Basket.module.scss";
import BasketIcons from "./BasketIcons";
import BasketContant from "./BasketContant";
import { useSelector } from "react-redux";

const Basket = ({ token }) => {
  const [active, setActive] = React.useState(false);

  const { basket, liked } = useSelector((state) => ({
    basket: state.basket,
    liked: state.liked,
  }));

  if (!token) {
    setTimeout(() => {
      setActive(false);
    }, 500);
  }

  return (
    <div
      style={
        active
          ? { right: "0", transition: "0.4s" }
          : { right: "-805px", transition: "0.4s" }
      }
      className={`${styles.basketWrapper} d-flex`}
    >
      <BasketIcons
        likedItems={liked.items}
        basketItems={basket.items}
        token={token}
        active={active}
        setActive={setActive}
      />
      <BasketContant setActive={setActive} liked={liked} basket={basket} />
    </div>
  );
};

export default Basket;
