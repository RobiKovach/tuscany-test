import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Authorization/AuthContext"; // Додаємо контекст авторизації
import translations from "../../data/translations.json";

const ProductDetails = ({ product, language }) => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const { isAuthenticated } = useAuth(); // Отримуємо статус авторизації
  const navigate = useNavigate();
  const texts = translations[language];
  const [showAuthMessage, setShowAuthMessage] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      const storedOrder = localStorage.getItem("pendingOrder");
      if (storedOrder) {
        console.log("✅ User logged in, restoring pending order...");
        navigate("/checkout", { state: JSON.parse(storedOrder) });
        localStorage.removeItem("pendingOrder");
      }
    }
  }, [isAuthenticated, navigate]);

  const handleBuyNow = () => {
    if (!selectedDate || !selectedTime) {
      alert(texts.please_select_date_time);
      return;
    }

    const orderData = {
      product,
      selectedDate,
      selectedTime,
    };

    if (!isAuthenticated) {
      console.log("🔴 User not logged in. Saving order and showing message.");
      setShowAuthMessage(true);
      localStorage.setItem("pendingOrder", JSON.stringify(orderData));
      return;
    }

    console.log("🟢 User is logged in, proceeding to checkout.");
    navigate("/checkout", { state: orderData });
  };

  return (
    <div className="product__details product-details">
      <h1 className="product-details__title">
        {texts[product.name] || product.name}
      </h1>
      <p className="product-details__price">
        {texts.from}: <span className="orange">{product.price}€</span>
      </p>
      <p className="product-details__description">
        {texts.description}: {product.description}
      </p>
      <div className="product__book book-product">
        <div className="book-product__date">
          <label>{texts.select_date}</label>
          <input
            type="date"
            className="date-picker"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
        </div>
        <div className="book-product__time">
          <label>{texts.select_time}</label>
          <select
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
          >
            <option value="">{texts.choose_time}</option>
            {product.availableTimes.length > 0 ? (
              product.availableTimes.map((time, index) => (
                <option key={index} value={time}>
                  {time}
                </option>
              ))
            ) : (
              <option value="">{texts.no_times_available}</option>
            )}
          </select>
        </div>
        {showAuthMessage && (
          <p className="auth-message">
            {texts.please_login || "Please log in or register to continue"}
          </p>
        )}
        <button
          className="product-details__button buy-button"
          onClick={handleBuyNow}
        >
          {texts.buy_now}
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
