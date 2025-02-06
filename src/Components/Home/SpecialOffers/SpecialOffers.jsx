import React from "react";
import { useLanguage } from "../../LanguageContext/LanguageContext"; // Хук для вибору мови
import translations from "../../../data/translations"; // Файл перекладів
import SpecialOffersText from "./SpecialOffersText";
import SpecialOffersImage from "./SpecialOffersImage";
import "./SpecialOffers.scss";

export default function SpecialOffers() {
  const { language } = useLanguage();
  const texts = translations[language];

  return (
    <section className="special">
      <div className="special__wrapper">
        <SpecialOffersText texts={texts} />
        <SpecialOffersImage />
      </div>
    </section>
  );
}
