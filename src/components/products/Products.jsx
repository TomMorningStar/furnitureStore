import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArmchairs } from "../../redux/features/armchairs";
import { getSofas } from "../../redux/features/sofas";
import Armchairs from "./Armchairs";

const Products = () => {
  const dispatch = useDispatch();

  const { armchairs, sofas } = useSelector((state) => ({
    armchairs: state.armchairs.armchairs,
    sofas: state.sofas.sofas,
  }));

  useEffect(() => {
    dispatch(getArmchairs());
    dispatch(getSofas());
  }, []);

  //   console.log(sofas, armchairs);

  return (
    <div className="productsWrapper d-flex justify-between">
      {armchairs.map((product) => {
        return <Armchairs key={product._id} product={product} />;
      })}
    </div>
  );
};

export default Products;
