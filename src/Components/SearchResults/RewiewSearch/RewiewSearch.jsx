import React from "react";
import { useLanguage } from "../../LanguageContext/LanguageContext"; // Імпортуємо хук мови
import translations from "../../../data/translations"; // Файл з усіма перекладами
import SearchInfo from "./SearchInfo";
import SearchDetails from "./SearchDetails";
import SearchActions from "./SearchActions";
import "./RewiewSearch.scss";

const RewiewSearch = ({ product }) => {
  const { language } = useLanguage();
  const texts = translations[language];

  return (
    <div className="search-results__item">
      <img
        className="search-results__image"
        src={product.image}
        alt={product.name}
      />
      <div className="search-results__conteiner">
        <h3 className="search-results__subtitle">
          {texts[product.name] || product.name}
        </h3>
        <div className="search-results__info info-results">
          <div className="info-results__itembox">
            <SearchInfo product={product} texts={texts} />
            <SearchDetails product={product} texts={texts} />
          </div>
          <SearchActions product={product} texts={texts} />
        </div>
      </div>
    </div>
  );
};

export default RewiewSearch;
