import React from "react";
import { useLanguage } from "../../LanguageContext/LanguageContext"; // Хук мови
import translations from "../../../data/translations"; // Файл перекладів
import "./Anons.scss";

export default function Anons() {
  const { language } = useLanguage();
  const texts = translations[language];

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

  return (
    <section className="anons">
      <div className="anons__wrapper">
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
      </div>
    </section>
  );
}
