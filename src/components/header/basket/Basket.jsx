import React from "react";
import styles from "./Basket.module.scss";
import BasketIcons from "./BasketIcons";
import BasketContant from "./BasketContant";

const Basket = ({ token }) => {
  const [active, setActive] = React.useState(false);

  return (
    <div
      style={
        active
          ? { right: "0", transition: "0.4s" }
          : { right: "-805px", transition: "0.4s" }
      }
      className={`${styles.basketWrapper} d-flex`}
    >
      <BasketIcons token={token} active={active} setActive={setActive} />
      <BasketContant />
    </div>
  );
};

export default Basket;
