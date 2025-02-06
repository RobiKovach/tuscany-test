import React from "react";
import { useLanguage } from "../../LanguageContext/LanguageContext"; // Хук мови
import translations from "../../../data/translations"; // Файл перекладів
import BookBikeForm from "./BookBikeForm";
import BookBikeImage from "./BookBikeImage";
import "./BookBike.scss";

export default function BookBike() {
  const { language } = useLanguage();
  const texts = translations[language];

  return (
    <section className="bookbike">
      <div className="bookbike__wrapper">
        <BookBikeForm texts={texts} />
        <BookBikeImage />
      </div>
    </section>
  );
}
