import React from "react";
import Slider from "react-slick";
import { useLanguage } from "../LanguageContext/LanguageContext";
import translations from "../../data/translations";
import PackageItem from "./PackageItem";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react";

const normalizeKey = (key) =>
  key ? key.toLowerCase().replace(/[^a-z0-9]/g, "_") : "";

const PackageList = ({ data }) => {
  const { language } = useLanguage();
  const texts = translations[language];
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Відстеження зміни розміру екрану
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const content = data.pricing.map((pkg) => {
    const titleKey = normalizeKey(pkg.title);
    const buttonTextKey = normalizeKey(pkg.button_text);

    const translatedTitle = texts[titleKey] || pkg.title;
    const translatedButton = texts[buttonTextKey] || pkg.button_text;

    const translatedFeatures = pkg.features.map((feature) => {
      const featureKey = normalizeKey(feature);
      return texts[featureKey] || feature;
    });

    return (
      <PackageItem
        key={pkg.id}
        {...pkg}
        title={translatedTitle}
        button_text={translatedButton}
        features={translatedFeatures}
      />
    );
  });

  // Налаштування слайдера
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="popularpackages__items">
      {isMobile ? (
        <Slider {...sliderSettings}>{content}</Slider>
      ) : (
        <>{content}</>
      )}
    </div>
  );
};

export default PackageList;
