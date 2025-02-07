import React from "react";
import { useLanguage } from "../LanguageContext/LanguageContext";
import translations from "../../data/translations";

const PackageInfo = ({ features, icons }) => {
  const { language } = useLanguage();
  const texts = translations[language];

  return (
    <div className="item-popularpackages__info info-popularpackages">
      {features.map((feature, index) => {
        const iconPath = icons && icons[index] ? icons[index] : "";
        const featureKey = feature.toLowerCase().replaceAll(" ", "_"); // Нормалізація ключа
        const translatedFeature = texts[featureKey] || feature;

        return (
          <div className="info-popularpackages__item" key={index}>
            {iconPath && (
              <img
                src={`${process.env.PUBLIC_URL}${iconPath}`}
                alt="feature-icon"
                className="info-popularpackages__icon"
              />
            )}
            <p className="info-popularpackages__text">{translatedFeature}</p>
          </div>
        );
      })}
    </div>
  );
};

export default PackageInfo;
