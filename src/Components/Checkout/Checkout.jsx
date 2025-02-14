import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import translations from "../../data/translations.json";
import BookingDetails from "./BookingDetails/BookingDetails";
import YourDetails from "./YourDetails/YourDetails";
import PaymentMethod from "./PaymentMethod/PaymentMethod";
import "./Checkout.scss";

const Checkout = ({ language }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const texts = translations[language] || translations["en"] || {};

  const { product, selectedDate, selectedTime } = location.state || {};

  useEffect(() => {
    if (location.pathname === "/checkout") {
      navigate("/checkout/booking-details", {
        state: { product, selectedDate, selectedTime },
      });
    }
  }, [location, navigate, product, selectedDate, selectedTime]);

  useEffect(() => {
    if (!product) {
      console.warn("No product data received, redirecting to home page...");
      navigate("/");
    } else {
      console.log("Received Checkout Data:", {
        product,
        selectedDate,
        selectedTime,
      });
    }
  }, [product, selectedDate, selectedTime, navigate]);

  if (!product) {
    return <p>{texts.no_product_selected || "No product selected"}</p>;
  }

  const currentStep = location.pathname;

  return (
    <>
      {currentStep === "/checkout/booking-details" && (
        <BookingDetails
          product={product}
          selectedDate={selectedDate}
          selectedTime={selectedTime}
        />
      )}
      {currentStep === "/checkout/your-details" && <YourDetails />}
      {currentStep === "/checkout/payment-method" && <PaymentMethod />}
    </>
  );
};

export default Checkout;
