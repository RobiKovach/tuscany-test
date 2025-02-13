import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../LanguageContext/LanguageContext";
import { useAuth } from "../Authorization/AuthContext"; // Додаємо контекст авторизації
import translations from "../../data/translations";
import PackageInfo from "./PackageInfo";

const normalizeKey = (key) => key.toLowerCase().replace(/[^a-z0-9]/g, "_");

const PackageItem = ({ title, price, day, features, image, icons }) => {
  const { language } = useLanguage();
  const { isAuthenticated } = useAuth(); // Отримуємо статус авторизації
  const navigate = useNavigate();
  const texts = translations[language];
  const [showAuthMessage, setShowAuthMessage] = useState(false);

  const translatedTitle = texts[normalizeKey(title)] || title;
  const translatedDuration = texts.day || day;

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

  const handleBookNow = () => {
    const orderData = {
      product: { title, price, day, features, image, icons },
      selectedDate: null,
      selectedTime: null,
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
    <div className="popularpackages__item item-popularpackages">
      <div className="item-popularpackages__image">
        <img src={`${process.env.PUBLIC_URL}${image}`} alt={translatedTitle} />
      </div>
      <div className="item-popularpackages__text">
        <h3 className="item-popularpackages__title">{translatedTitle}</h3>
        <p className="item-popularpackages__price">
          <span className="orange price-orange">{price}</span> /{" "}
          <span className="text-day">{translatedDuration}</span>
        </p>
        <PackageInfo features={features} icons={icons} />
        {showAuthMessage && (
          <p className="auth-message">
            {texts.please_login || "Please log in or register to continue"}
          </p>
        )}
        <button className="item-popularpackages__btn" onClick={handleBookNow}>
          {texts["book_now"]}
        </button>
      </div>
    </div>
  );
};

export default PackageItem;
