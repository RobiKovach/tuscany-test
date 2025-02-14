import React from "react";
import "./YourDetails.scss";
import CheckNumbers from "../CheckNumbers/CheckNumbers";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import ResponsiveMove from "../../ResponsiveMove/ResponsiveMove";
import { useLocation, useNavigate } from "react-router-dom";
import translations from "../../../data/translations.json";
import OverviewDetails from "../OverviewDetails/OverviewDetails";
import { useLanguage } from "../../LanguageContext/LanguageContext";

export default function YourDetails() {
  const location = useLocation();
  const currentStep = location.pathname;
  const navigate = useNavigate();
  const { language } = useLanguage();
  const texts = translations[language] ?? translations["en"] ?? {};

  const {
    product,
    selectedDate,
    selectedTime,
    adultTickets = 0,
    childTickets = 0,
    infantTickets = 0,
  } = location.state || {};

  const totalPrice =
    adultTickets * (product?.adult || 0) + childTickets * (product?.child || 0);

  const goToNextStep = () => {
    navigate("/checkout/payment-method", {
      state: {
        product,
        selectedDate,
        selectedTime,
        adultTickets,
        childTickets,
        infantTickets,
        totalPrice,
      },
    });
  };

  return (
    <>
      <Header />
      <section className="checkout">
        <div className="checkout__wrapper">
          <CheckNumbers currentStep={currentStep} />
          <div className="your-details">
            <h3>{texts.your_details || "Your Details"}</h3>

            <OverviewDetails
              totalPrice={totalPrice}
              onNextStep={goToNextStep}
              texts={texts}
              product={product}
              selectedDate={selectedDate}
              selectedTime={selectedTime}
              adultTickets={adultTickets}
              childTickets={childTickets}
              infantTickets={infantTickets}
            />
          </div>
        </div>
      </section>
      <Footer />
      <ResponsiveMove />
    </>
  );
}
