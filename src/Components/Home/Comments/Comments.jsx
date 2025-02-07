import React from "react";
import "./Comments.scss";
import productsData from "../../../data/products.json";
import UniversalSlider from "../../UniversalSlider/UniversalSlider";
import { useLanguage } from "../../LanguageContext/LanguageContext"; // Імпортуємо хук мови
import translations from "../../../data/translations"; // Імпортуємо переклади

export default function Comments() {
  const { language } = useLanguage(); // Отримуємо поточну мову
  const texts = translations[language]; // Завантажуємо переклад для поточної мови

  const product = productsData.find((p) => p.id === 1);

  return (
    <section className="comments">
      <div className="comments__wrapper">
        <div className="comments__title title">
          {texts["happyCustomersSays"] || "Happy Customers Says"}
        </div>
        <UniversalSlider
          items={product.comments}
          slidesToShow={2}
          autoplay={true}
        />
      </div>
    </section>
  );
}
