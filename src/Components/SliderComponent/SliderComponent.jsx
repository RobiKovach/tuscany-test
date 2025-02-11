import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import products from "../../data/products.json";
import translations from "../../data/translations.json";
import { useLanguage } from "../../Components/LanguageContext/LanguageContext";
import "./SliderComponent.scss";

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-prev-arrow`}
      style={{ ...style }}
      onClick={onClick}
    >
      ❮
    </div>
  );
};

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-next-arrow`}
      style={{ ...style }}
      onClick={onClick}
    >
      ❯
    </div>
  );
};

const SliderComponent = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: "1px",
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "15px",
          nextArrow: false,
          prevArrow: false,
          dots: true,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          centerPadding: "1px",
          nextArrow: false,
          prevArrow: false,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="slider-container__popular">
      <Slider {...settings}>
        {products.map((product) => {
          const tourKey = product.name.toLowerCase().replace(/[\s&-]+/g, "_");
          const translatedName =
            translations[language]?.tour_names?.[tourKey] || product.name;

          const whenKey = product.when.toLowerCase().replace(/\s/g, "_");
          const translatedWhen =
            translations[language]?.[whenKey] || product.when;

          return (
            <div
              key={product.id}
              className="slide__popular"
              onClick={() => navigate(product.url)}
              style={{ cursor: "pointer" }}
            >
              <img
                className="popular__image"
                src={`${process.env.PUBLIC_URL}${product.image}`}
                alt={translatedName}
              />
              <h3>{translations[language][product.name] || product.name}</h3>
              <p className="price__popular">
                {translations[language].from}{" "}
                <span className="orange">{product.price}€</span>
              </p>
              <div className="descriptions__popular popular-description">
                <div className="popular-description__item">
                  <img
                    src={`${process.env.PUBLIC_URL}/img/icon-date-orange.svg`}
                    alt="icon"
                    className="popular__icon"
                  />
                  <span className="popular__text">{translatedWhen}</span>
                </div>
                <div className="popular-description__item">
                  <img
                    src={`${process.env.PUBLIC_URL}/img/icon-people-orange.svg`}
                    alt="icon"
                    className="popular__icon"
                  />
                  <span className="popular__text">
                    {product.numberOfGroup} {translations[language].people}
                  </span>
                </div>
              </div>
              <p className="popular__context">{product.description}</p>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default SliderComponent;
