import React from "react";
import arrowRight from "../images/vector.png";

const Aside = () => {
  return (
    <aside className="d-flex justify-between">
      <div className="modernFurniture">
        <h2>Modern Furniture Collections</h2>
        <div className="info">Starting From $500</div>
        <button className="d-flex">
          <div className="mr-5">Read more</div>
          <div>
            <img width={11} height={9} src={arrowRight} alt="" />
          </div>
        </button>
      </div>

      <div>
        <div className="geometricBookcase">
          <h3>Geometric Bookcase</h3>
          <div className="info">Up to 20% discount</div>
          <button className="d-flex align-center">
            <div className="mr-5">Read more</div>
            <img width={11} height={9} src={arrowRight} alt="" />
          </button>
        </div>

        <div className="minimalSofa">
          <h3>Minimal Sofa collections </h3>
          <div className="info">Sale upto 40% discount</div>
          <button className="d-flex">
            <div className="mr-5">Read more</div>
            <div>
              <img width={11} height={9} src={arrowRight} alt="" />
            </div>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Aside;
