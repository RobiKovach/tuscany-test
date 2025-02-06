import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./SearchResults.scss";
import { useLanguage } from "../LanguageContext/LanguageContext";
import translations from "../../data/translations.json";
import products from "../../data/products.json";
import FilterProducts from "./FilterProducts/FilterProducts";
import RewiewSearch from "./RewiewSearch/RewiewSearch";
import NoResults from "./NoResults/NoResults";
import ResponsiveMove from "../../Components/ResponsiveMove/ResponsiveMove";
import BackButton from "../BackButton/BackButton";

const SearchResults = () => {
  const { language } = useLanguage();
  const texts = translations[language];
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const isPrivateTour = searchParams.get("private") === "true";

  const getEnglishValue = (value) => {
    if (!value) return "";
    return translations.reverse?.[value] || value;
  };

  // 🔍 Оновлюємо фільтри
  const filters = {
    time: searchParams.get("time") || "",
    tour: getEnglishValue(searchParams.get("tour")),
    transportation: isPrivateTour
      ? ""
      : getEnglishValue(searchParams.get("transportation")),
    type: isPrivateTour ? getEnglishValue(searchParams.get("type")) : "",
  };

  const filteredProducts = FilterProducts(products, filters);

  return (
    <>
      <Header />
      <ResponsiveMove />
      <div className="search-results">
        <BackButton />
        <h2 className="search-results__title title">{texts.search_results}</h2>

        {filteredProducts.length > 0 ? (
          <div className="search-results__list">
            {filteredProducts.map((product) => (
              <RewiewSearch key={product.id} product={product} texts={texts} />
            ))}
          </div>
        ) : (
          <NoResults
            message={
              texts.no_results ||
              "Такого туру не існує. Спробуйте змінити параметри пошуку."
            }
          />
        )}
      </div>
      <Footer />
    </>
  );
};

export default SearchResults;
