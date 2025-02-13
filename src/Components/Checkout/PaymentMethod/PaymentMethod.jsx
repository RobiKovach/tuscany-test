import "./PaymentMethod.scss";
import React from "react";
import CheckNumbers from "../CheckNumbers/CheckNumbers";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import ResponsiveMove from "../../ResponsiveMove/ResponsiveMove";
import { useLocation } from "react-router-dom";

export default function PaymentMethod() {
  const location = useLocation();
  const currentStep = location.pathname;
  return (
    <>
      <Header />
      <section className="checkout">
        <div className="checkout__wrapper">
          <CheckNumbers currentStep={currentStep} />
          <div className="payment-method">payment-method</div>
        </div>
      </section>
      <Footer />
      <ResponsiveMove />
    </>
  );
}
