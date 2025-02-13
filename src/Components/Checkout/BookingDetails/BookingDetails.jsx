import React from "react";
import translations from "../../../data/translations.json";
import "./BookingDetails.scss";

const BookingDetails = ({ product, selectedDate, selectedTime, language }) => {
  const productName = product.name || product.title || "Unnamed Product";
  const texts = translations[language];

  return (
    <div className="booking-details">
      <h2>{texts?.checkout || "Checkout"}</h2>
      <p>
        <strong>{texts?.product_name || "Product Name"}:</strong> {productName}
      </p>
      <p>
        <strong>{texts?.price || "Price"}:</strong> {product.price}€
      </p>
      <p>
        <strong>{texts?.selected_date || "Selected Date"}:</strong>{" "}
        {selectedDate || texts?.no_date_selected || "Not selected"}
      </p>
      <p>
        <strong>{texts?.selected_time || "Selected Time"}:</strong>{" "}
        {selectedTime || texts?.no_time_selected || "Not selected"}
      </p>
      <button className="booking-details__button">
        {texts?.confirm_purchase || "Confirm Purchase"}
      </button>
    </div>
  );
};

export default BookingDetails;
