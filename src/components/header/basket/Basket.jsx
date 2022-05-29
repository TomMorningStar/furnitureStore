import React, { useEffect } from "react";
import styles from "./Basket.module.scss";
import BasketIcons from "./BasketIcons";
import BasketContant from "./BasketContant";
import { useDispatch, useSelector } from "react-redux";
import { getBasket } from "../../../redux/features/basket";

const Basket = ({ token }) => {
  const [active, setActive] = React.useState(false);

  //   const dispatch = useDispatch();

  const basket = useSelector((state) => state.basket);

  //   useEffect(() => {
  //     dispatch(getBasket());
  //   }, []);

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
      <BasketContant basket={basket} />
    </div>
  );
};

export default Basket;
