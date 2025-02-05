import React from "react";
import SliderComponent from "../../SliderComponent/SliderComponent";
import translations from "../../../data/translations.json"; // 🔥 Додаємо переклади
import { useLanguage } from "../../../Components/LanguageContext/LanguageContext"; // 🔥 Отримуємо поточну мову
import "./Popular.scss";

export default function Popular() {
  const { language } = useLanguage(); // Отримуємо поточну мову

  return (
    <section className="popular">
      <div className="popular__wrapper">
        <h1 className="popular__title">
          {translations[language].explore_popular_destinations}
        </h1>
        <SliderComponent />
      </div>
    </section>
  );
}
