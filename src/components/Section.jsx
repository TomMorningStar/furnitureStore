import React from "react";
import { useSelector } from "react-redux";
import Products from "./products/Products";

const Section = () => {
  const [value, setValue] = React.useState("");

  const armchairs = useSelector((state) => state.armchairs.armchairs);

  const handleGetValue = (e) => {
    setValue(e.target.value);
  };

  const filteredItems = armchairs.filter((item) => {
    return item.name.toLowerCase().includes(value.toLowerCase());
  });

  return (
    <section>
      <div className="search d-flex align-center">
        <div>
          <h1>Armchairs</h1>
        </div>
        <div>
          <input
            onChange={handleGetValue}
            value={value}
            placeholder="search..."
            type="text"
          />
        </div>
      </div>

      <Products filteredItems={filteredItems} />
    </section>
  );
};

export default Section;
