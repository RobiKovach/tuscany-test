import React, { useState, useEffect } from "react";
import { useLanguage } from "../../LanguageContext/LanguageContext"; // Хук мови
import translations from "../../../data/translations"; // Файл перекладів
import Slider from "react-slick"; // Імпортуємо слайдер
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Anons.scss";

export default function Anons() {
  const { language } = useLanguage();
  const texts = translations[language];

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    // Слідкуємо за зміною розміру екрану
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Масив з даними про айтеми
  const anonsItems = [
    {
      key: "bike_rental",
      img: "bike.png",
      title: "bike_rental_title",
      description: "bike_rental_description",
    },
    {
      key: "guided_tour",
      img: "guid.png",
      title: "guided_tour_title",
      description: "guided_tour_description",
    },
    {
      key: "taxi_service",
      img: "taxi.png",
      title: "taxi_service_title",
      description: "taxi_service_description",
    },
    {
      key: "bus_package",
      img: "bus.png",
      title: "bus_package_title",
      description: "bus_package_description",
    },
  ];

  // Налаштування слайдера
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <section className="anons">
      <div className="anons__wrapper">
        {isMobile ? (
          <Slider {...sliderSettings}>
            {anonsItems.map((item) => (
              <div key={item.key} className="anons__item item-anons">
                <img
                  src={`${process.env.PUBLIC_URL}/img/anons/${item.img}`}
                  alt={texts[item.title]}
                  className="item-anons__image"
                />
                <h2 className="item-anons__title">{texts[item.title]}</h2>
                <p className="item-anons__description">
                  {texts[item.description]}
                </p>
              </div>
            ))}
          </Slider>
        ) : (
          <div className="anons__items">
            {anonsItems.map((item) => (
              <div key={item.key} className="anons__item item-anons">
                <img
                  src={`${process.env.PUBLIC_URL}/img/anons/${item.img}`}
                  alt={texts[item.title]}
                  className="item-anons__image"
                />
                <h2 className="item-anons__title">{texts[item.title]}</h2>
                <p className="item-anons__description">
                  {texts[item.description]}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
