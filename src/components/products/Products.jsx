import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArmchairs } from "../../redux/features/armchairs";
import { getSofas } from "../../redux/features/sofas";
import Armchairs from "./Armchairs";
import { getUser } from "../../redux/features/user";
import { getBasket } from "../../redux/features/basket";
import { getLiked } from "../../redux/features/liked";

const Products = ({ filteredItems }) => {
  const dispatch = useDispatch();

  const { armchairs, sofas, token } = useSelector((state) => ({
    armchairs: state.armchairs.armchairs,
    sofas: state.sofas.sofas,
    token: state.user.token,
  }));

  useEffect(() => {
    dispatch(getArmchairs());
    dispatch(getSofas());
    dispatch(getUser());
    dispatch(getBasket());
    dispatch(getLiked());
  }, [dispatch]);

  return (
    <div className="productsWrapper d-flex">
      {filteredItems.map((product) => {
        return <Armchairs token={token} key={product._id} product={product} />;
      })}
    </div>
  );
};

export default Products;
