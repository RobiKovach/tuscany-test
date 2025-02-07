import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./UniversalSlider.scss";

const PrevArrow = ({ onClick }) => (
  <button
    className="custom-prev-arrow slider-arrow universal-slider-arrow"
    onClick={onClick}
  >
    ❮
  </button>
);
const NextArrow = ({ onClick }) => (
  <button
    className="custom-next-arrow slider-arrow universal-slider-arrow"
    onClick={onClick}
  >
    ❯
  </button>
);

const UniversalSlider = ({
  items = [],
  slidesToShow = 2,
  autoplay = false,
  speed = 500,
}) => {
  if (!items.length) {
    return <p>No items available.</p>;
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: speed,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: autoplay,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          dots: true,
          prevArrow: false,
          nextArrow: false,
        },
      },
    ],
  };

  return (
    <div className="universal-slider">
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index} className="universal-slider__card">
            <div className="universal-slider__content">
              {item.image && (
                <img
                  className="universal-slider__image"
                  src={`${process.env.PUBLIC_URL}${item.image}`}
                  alt={item.name || "Image"}
                />
              )}
              {item.name && (
                <h3 className="universal-slider__name">{item.name}</h3>
              )}
              {item.description && (
                <p className="universal-slider__description">
                  {item.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default UniversalSlider;
