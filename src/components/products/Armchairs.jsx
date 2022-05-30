import React from "react";
import BasketIcon from "./svgIcons/BasketIcon";
import LikeIcon from "./svgIcons/LikeIcon";

const Armchairs = ({ token, product }) => {
  return (
    <div className="product">
      <div
        className="productImg"
        style={{ backgroundImage: `url(${product.img})` }}
      >
        <LikeIcon product={product} token={token} />
        <BasketIcon token={token} product={product} />
      </div>

      <div className="type mt-10">{product.type.name}</div>
      <div className="productName mt-10 mb-10">{product.name}</div>
      <div className="price">
        <b>₽ {product.price}</b>
      </div>
    </div>
  );
};

export default Armchairs;
