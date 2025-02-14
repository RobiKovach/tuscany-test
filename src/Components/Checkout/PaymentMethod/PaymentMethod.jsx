import "./PaymentMethod.scss";
import React from "react";
import CheckNumbers from "../CheckNumbers/CheckNumbers";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import ResponsiveMove from "../../ResponsiveMove/ResponsiveMove";
import { useLocation } from "react-router-dom";
import OverviewDetails from "../OverviewDetails/OverviewDetails";
import translations from "../../../data/translations.json";

export default function PaymentMethod({ language }) {
  const location = useLocation();
  const currentStep = location.pathname;
  const texts = translations[language] ?? translations["en"] ?? {};

  const {
    product,
    selectedDate,
    selectedTime,
    adultTickets = 0,
    childTickets = 0,
    infantTickets = 0,
    totalPrice = 0,
  } = location.state || {};

  return (
    <>
      <Header />
      <section className="checkout">
        <div className="checkout__wrapper">
          <CheckNumbers currentStep={currentStep} />
          <div className="payment-method">
            <h3>{texts.payment || "Payment Method"}</h3>

            <OverviewDetails
              totalPrice={totalPrice}
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
