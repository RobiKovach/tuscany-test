import React from "react";
import "./YourDetails.scss";
import CheckNumbers from "../CheckNumbers/CheckNumbers";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import ResponsiveMove from "../../ResponsiveMove/ResponsiveMove";
import { useLocation, useNavigate } from "react-router-dom";
import translations from "../../../data/translations.json";

export default function YourDetails({ language }) {
  const location = useLocation();
  const currentStep = location.pathname;
  const navigate = useNavigate();
  const { product, selectedDate, selectedTime } = location.state || {};

  const goToNextStep = () => {
    navigate("/checkout/payment-method", {
      state: { product, selectedDate, selectedTime },
    });
  };
  return (
    <>
      <Header />
      <section className="checkout">
        <div className="checkout__wrapper">
          <CheckNumbers currentStep={currentStep} />
          <div className="your-details">
            your-details
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
}
