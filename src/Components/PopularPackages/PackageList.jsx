import React from "react";
import { useLanguage } from "../LanguageContext/LanguageContext";
import translations from "../../data/translations";
import PackageItem from "./PackageItem";

const normalizeKey = (key) => key.toLowerCase().replace(/[^a-z0-9]/g, "_");

const PackageList = ({ data }) => {
  const { language } = useLanguage();
  const texts = translations[language];

  return (
    <div className="popularpackages__items">
      {data.pricing.map((pkg) => {
        const translatedTitle = texts[pkg.title.trim()] || pkg.title;
        const translatedButton =
          texts[normalizeKey(pkg.button_text)] || pkg.button_text;
        const translatedFeatures = pkg.features.map(
          (feature) => texts[normalizeKey(feature)] || feature
        );

        return (
          <PackageItem
            key={pkg.id}
            {...pkg}
            title={translatedTitle}
            button_text={translatedButton}
            features={translatedFeatures}
          />
        );
      })}
    </div>
  );
};

export default PackageList;
