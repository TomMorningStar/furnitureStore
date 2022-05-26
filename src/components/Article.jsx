import React from "react";
import navArrowLeft from "../images/navArrowLeft.png";
import navArrowRight from "../images/navArrowRight.png";

const Article = () => {
  return (
    <article>
      <h1>What Our Customer Says</h1>

      <div className="w100p m-auto">
        <img
          width={88}
          height={88}
          src="https://cdn-icons-png.flaticon.com/512/1386/1386482.png"
          alt=""
        />
      </div>

      <p>
        I like http://localhost:3000/ and as compared to other company it's
        polices and customers support is very good easy to reach., also many
        time they unable to delivered. The ultricies are pregnant while the quis
        is suspended. Risus commodo viverra maecenas accumsan lacus vel
        facilisist amet.
      </p>

      <h4>Angelina Joly</h4>

      <img className="navArrowLeft" src={navArrowLeft} alt="" />
      <img className="navArrowRight" src={navArrowRight} alt="" />
    </article>
  );
};

export default Article;
