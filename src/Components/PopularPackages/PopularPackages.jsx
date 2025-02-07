import React from "react";
import "./PopularPackages.scss";
import packagesData from "../../data/packages.json";
import PackageList from "./PackageList";
import { useLanguage } from "../LanguageContext/LanguageContext"; // Хук мови
import translations from "../../data/translations"; // Файл перекладів

const PopularPackages = () => {
  const { language } = useLanguage();
  const texts = translations[language];

  return (
    <section className="popularpackages">
      <div className="popularpackages__wrapper">
        <h2 className="popularpackages__title title">
          {texts.popular_packages_title}
        </h2>
        <PackageList data={packagesData} />
      </div>
    </section>
  );
};

export default PopularPackages;
