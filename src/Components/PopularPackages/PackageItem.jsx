import React from "react";
import { useLanguage } from "../LanguageContext/LanguageContext";
import translations from "../../data/translations";
import PackageInfo from "./PackageInfo";

const normalizeKey = (key) => key.toLowerCase().replace(/[^a-z0-9]/g, "_");

const PackageItem = ({ title, price, day, features, image, icons }) => {
  const { language } = useLanguage();
  const texts = translations[language];

  const translatedTitle = texts[normalizeKey(title)] || title;
  const translatedDuration = texts.day || day; // Виправлення тут

  return (
    <div className="popularpackages__item item-popularpackages">
      <div className="item-popularpackages__image">
        <img src={`${process.env.PUBLIC_URL}${image}`} alt={translatedTitle} />
      </div>
      <div className="item-popularpackages__text">
        <h3 className="item-popularpackages__title">{translatedTitle}</h3>
        <p className="item-popularpackages__price">
          <span className="orange price-orange">{price}</span> /{" "}
          <span className="text-day">{translatedDuration}</span>
        </p>
        <PackageInfo features={features} icons={icons} />
        <div className="item-popularpackages__btn">{texts["book_now"]}</div>
      </div>
    </div>
  );
};

export default PackageItem;
