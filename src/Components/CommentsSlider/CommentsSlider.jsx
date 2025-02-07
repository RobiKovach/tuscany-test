import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CommentsSlider.scss"; // Стилі
import products from "../../data/products.json";

const PrevArrow = ({ onClick }) => {
  return (
    <button className="custom-prev-arrow comment-arrow" onClick={onClick}>
      ❮
    </button>
  );
};

const NextArrow = ({ onClick }) => {
  return (
    <button className="custom-next-arrow comment-arrow" onClick={onClick}>
      ❯
    </button>
  );
};

const CommentsSlider = ({ productId }) => {
  const product = products.find((p) => p.id === productId);

  if (!product || !product.comments || product.comments.length === 0) {
    return <p>No comments available for this product.</p>;
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          prevArrow: false,
          nextArrow: false,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="comments-slider">
      <Slider {...settings}>
        {product.comments.map((comment, index) => (
          <div key={index} className="comment-card">
            <div className="comment-content">
              <img
                className="comment-avatar"
                src={`${process.env.PUBLIC_URL}${comment.image}`}
                alt={comment.name}
              />
              <h3>{comment.name}</h3>
              <p>{comment.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CommentsSlider;
