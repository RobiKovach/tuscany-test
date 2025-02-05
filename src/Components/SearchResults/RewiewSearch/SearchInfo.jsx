import React from "react";

const SearchInfo = ({ product, texts }) => {
  return (
    <div className="info-results__items">
      <div className="info-results__item item-results">
        <img
          src="/img/products/icons/calendar-icon.svg"
          alt="Calendar Icon"
          className="item-results__icon"
        />
        <p className="item-results__description">
          <b className="bold">{texts.Date}:</b>{" "}
          <span>{texts[product.when] || product.when}</span>
        </p>
      </div>
      <div className="info-results__item item-results">
        <img
          src="/img/products/icons/icon_clock.svg"
          alt="Clock Icon"
          className="item-results__icon"
        />
        <p className="item-results__description">
          <b className="bold">{texts.Time}:</b>{" "}
          <span>
            {product.availableTimes
              .map((time) => texts[time] || time)
              .join(", ")}
          </span>
        </p>
      </div>
      <div className="info-results__item item-results">
        <img
          src="/img/products/icons/icon_private-tours.svg"
          alt="People Icon"
          className="item-results__icon"
        />
        <p className="item-results__description">
          <b className="bold">{texts.NumberOfPeople}:</b>{" "}
          <span>{texts[product.numberOfGroup] || product.numberOfGroup}</span>
        </p>
      </div>
      <div className="info-results__item item-results">
        <img
          src="/img/products/icons/icon_bus.svg"
          alt="Bus Icon"
          className="item-results__icon"
        />
        <p className="item-results__description">
          <b className="bold">{texts.transportation}:</b>{" "}
          <span>{texts[product.transportation] || product.transportation}</span>
        </p>
      </div>
    </div>
  );
};

export default SearchInfo;
