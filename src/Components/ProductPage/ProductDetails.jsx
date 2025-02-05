import React, { useState } from "react";
import translations from "../../data/translations.json";

const ProductDetails = ({ product, language }) => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const tourKey = product.name.toLowerCase().replace(/[\s&-]+/g, "_");
  const translatedName =
    translations[language]?.tour_names?.[tourKey] || product.name;

  return (
    <section>
      <div className="product__details product-details">
        <h1 className="product-details__title">{translatedName}</h1>
        <p className="product-details__price">
          {translations[language].from}:{" "}
          <span className="orange">{product.price}€</span>
        </p>
        <p className="product-details__description">
          {translations[language].description}: {product.description}
        </p>
        <p className="product-details__group">
          {translations[language].group_size}: {product.numberOfGroup} PP
        </p>
      </div>
      <div className="product__book book-product">
        <div className="book-product__date">
          <label>{translations[language].select_date}</label>
          <input
            type="date"
            className="date-picker"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
        </div>

        <div className="book-product__time">
          <label>{translations[language].select_time}</label>
          <select
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
          >
            <option value="">{translations[language].choose_time}</option>
            {product.availableTimes.length > 0 ? (
              product.availableTimes.map((time, index) => (
                <option key={index} value={time}>
                  {time}
                </option>
              ))
            ) : (
              <option value="">
                {translations[language].no_times_available}
              </option>
            )}
          </select>
        </div>

        <button className="product-details__button buy-button">
          {translations[language].buy_now}
        </button>
      </div>
    </section>
  );
};

export default ProductDetails;
