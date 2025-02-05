import React from "react";

const SearchDetails = ({ product, texts }) => {
  return (
    <div className="info-results__items">
      <div className="info-results__item item-results">
        <img
          src="/img/products/icons/icon_duration.svg"
          alt="Duration Icon"
          className="item-results__icon"
        />
        <p className="item-results__description">
          <b className="bold">{texts.duration}:</b>{" "}
          <span>{texts[product.duration] || product.duration}</span>
        </p>
      </div>
      <div className="info-results__item item-results">
        <img
          src="/img/products/icons/icon_guide.svg"
          alt="Guide Icon"
          className="item-results__icon"
        />
        <p className="item-results__description">
          <b className="bold">{texts.guideService}:</b>{" "}
          <span>{texts[product.guideService] || product.guideService}</span>
        </p>
      </div>
      <div className="info-results__item item-results">
        <img
          src="/img/products/icons/icon_language.svg"
          alt="Language Icon"
          className="item-results__icon"
        />
        <p className="item-results__description">
          <b className="bold">{texts.languages}:</b>{" "}
          <span>
            {product.languages.map((lang) => texts[lang] || lang).join(", ")}
          </span>
        </p>
      </div>
      <div className="info-results__item item-results">
        <img
          src="/img/products/icons/icon_ticket.svg"
          alt="Ticket Icon"
          className="item-results__icon"
        />
        <p className="item-results__description">
          <b className="bold">{texts.entryFees}:</b>{" "}
          <span>{texts[product.entryFees] || product.entryFees}</span>
        </p>
      </div>
    </div>
  );
};

export default SearchDetails;
