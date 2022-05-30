import React from "react";
import navArrowLeft from "../images/navArrowLeft.png";
import navArrowRight from "../images/navArrowRight.png";

const Article = () => {
  const [review, setReview] = React.useState({
    img: "https://cdn-icons-png.flaticon.com/512/4329/4329449.png",
    review:
      "I like http://localhost:3000/ and as compared to other company it's polices and customers support is very good easy to reach., also manytime they unable to delivered. The ultricies are pregnant while the quisis suspended. Risus commodo viverra maecenas accumsan lacus velfacilisist amet.",
    name: "Angelina Joly",
  });

  const handleNextReview = () => {
    if (review.name === "Angelina Joly") {
      setReview({
        img: "https://cdn-icons.flaticon.com/png/512/2202/premium/2202112.png?token=exp=1653952984~hmac=1f610a40642adfd5223c9744e6cfa9f0",
        review:
          "  В 2021 году начал интересоваться программированием, HTML CSS JavaScript по самым верхам, уже через полгода принял важное решение об увольнении с прошлой работы и погрузился полностью в IT-сферу. Стек технологий: HTML, CSS, React, Redux, Thunk, NodeJs",
        name: "Tamerlan",
      });
    } else {
      setReview({
        img: "https://cdn-icons-png.flaticon.com/512/4329/4329449.png",
        review:
          "I like http://localhost:3000/ and as compared to other company it's polices and customers support is very good easy to reach., also manytime they unable to delivered. The ultricies are pregnant while the quisis suspended. Risus commodo viverra maecenas accumsan lacus velfacilisist amet.",
        name: "Angelina Joly",
      });
    }
  };

  return (
    <article>
      <h1>What Our Customer Says</h1>

      <div className="w100p m-auto">
        <img width={88} height={88} src={review.img} alt="" />
      </div>

      <p>{review.review}</p>

      <h4>{review.name}</h4>

      <img
        onClick={handleNextReview}
        className="navArrowLeft"
        src={navArrowLeft}
        alt=""
      />
      <img
        onClick={handleNextReview}
        className="navArrowRight"
        src={navArrowRight}
        alt=""
      />
    </article>
  );
};

export default Article;
