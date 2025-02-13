import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../Authorization/AuthContext";

const SearchActions = ({ product, texts }) => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth(); // Отримуємо статус авторизації
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
    if (!isAuthenticated) {
      console.log("🔴 User not logged in. Saving order and showing message.");
      setShowAuthMessage(true);
      const orderData = {
        product,
        selectedDate: null,
        selectedTime: null,
      };
      localStorage.setItem("pendingOrder", JSON.stringify(orderData));
      return;
    }

    console.log("🟢 User is logged in, proceeding to checkout.");
    navigate("/checkout", {
      state: {
        product,
        selectedDate: null,
        selectedTime: null,
      },
    });
  };

  return (
    <div className="info-results__actives actives-results">
      <div className="actives-results__price">
        {texts.from} <b>{product.price}€</b>
      </div>
      <NavLink to={product.url} className="actives-results__view">
        {texts.view_details}
      </NavLink>
      {showAuthMessage && (
        <p className="auth-message">
          {texts.please_login || "Please log in or register to continue"}
        </p>
      )}
      <button className="actives-results__buy" onClick={handleBuyNow}>
        {texts.buy_now}
      </button>
    </div>
  );
};

export default SearchActions;
