import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import translations from "../../../data/translations.json";
import CheckNumbers from "../CheckNumbers/CheckNumbers";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import ResponsiveMove from "../../ResponsiveMove/ResponsiveMove";

const BookingDetails = ({ language }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { product, selectedDate, selectedTime } = location.state || {};

  if (!product) {
    console.warn("No product data received, redirecting to home page...");
    navigate("/");
    return null;
  }

  const currentStep = location.pathname;
  const productName = product.name || product.title || "Unknown Product";

  const goToNextStep = () => {
    navigate("/checkout/your-details", {
      state: { product, selectedDate, selectedTime },
    });
  };

  return (
    <>
      <Header />
      <section className="checkout">
        <div className="checkout__wrapper">
          <div className="booking-details">
            <CheckNumbers currentStep={currentStep} />
            <h1>
              {translations[language]?.booking_details || "Booking Details"}
            </h1>
            <p>
              <strong>
                {translations[language]?.product_name || "Product Name"}:
              </strong>{" "}
              {productName}
            </p>
            <p>
              <strong>{translations[language]?.price || "Price"}:</strong>{" "}
              {product.price}€
            </p>
            <p>
              <strong>
                {translations[language]?.selected_date || "Selected Date"}:
              </strong>{" "}
              {selectedDate || "Not selected"}
            </p>
            <p>
              <strong>
                {translations[language]?.selected_time || "Selected Time"}:
              </strong>{" "}
              {selectedTime || "Not selected"}
            </p>

            <button className="next-step-button" onClick={goToNextStep}>
              {translations[language]?.next || "Next"}
            </button>
          </div>
        </div>
      </section>

      <Footer />
      <ResponsiveMove />
    </>
  );
};

export default BookingDetails;
