import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import translations from "../../data/translations.json";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import BookingDetails from "./BookingDetails/BookingDetails";
import "./Checkout.scss";
import ResponsiveMove from "../ResponsiveMove/ResponsiveMove";

const Checkout = ({ language }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { product, selectedDate, selectedTime } = location.state || {};

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
    return (
      <p>
        {translations[language]?.no_product_selected || "No product selected"}
      </p>
    );
  }

  return (
    <>
      <Header />
      <section className="checkout">
        <div className="checkout__wrapper">
          <BookingDetails
            product={product}
            selectedDate={selectedDate}
            selectedTime={selectedTime}
            language={language}
          />
        </div>
      </section>
      <ResponsiveMove />
      <Footer />
    </>
  );
};

export default Checkout;
