import React, { useState } from "react";
import Products from "./products/Products";

const Section = () => {
  const nav = ["All products", "Armchairs", "Sofas", "Tables"];

  const [select, setSelect] = useState(0);

  return (
    <section>
      <h1>PRODUCTS</h1>

      <nav>
        <ul className="clear d-flex justify-between">
          {nav.map((product, index) => {
            return (
              <li
                key={product}
                onClick={() => setSelect(index)}
                className={select === index ? "selected" : ""}
              >
                {product}
              </li>
            );
          })}
        </ul>
      </nav>

      <Products />
    </section>
  );
};

export default Section;
