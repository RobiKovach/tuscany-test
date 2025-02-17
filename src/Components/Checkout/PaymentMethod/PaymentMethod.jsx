import "./PaymentMethod.scss";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CheckNumbers from "../CheckNumbers/CheckNumbers";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import ResponsiveMove from "../../ResponsiveMove/ResponsiveMove";
import { useLocation } from "react-router-dom";
import OverviewDetails from "../OverviewDetails/OverviewDetails";
import translations from "../../../data/translations.json";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PayPalCheckout from "../PayPalCheckout/PayPalCheckout";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

export default function PaymentMethod({ language }) {
  const location = useLocation();
  const navigate = useNavigate();
  const currentStep = location.pathname;
  const texts = translations[language] ?? translations["en"] ?? {};
  const [paymentData, setPaymentData] = useState(null);

  const handlePaymentSuccess = (paymentData) => {
    console.log("✅ Успішна оплата:", paymentData);

    navigate("/payment-success", {
      state: {
        paymentData,
        bookingDetails: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          tourName: product,
          date: selectedDate,
          time: selectedTime,
          adultTickets,
          childTickets,
          infantTickets,
          totalPrice,
        },
      },
    });
  };

  const {
    product,
    selectedDate,
    selectedTime,
    adultTickets = 0,
    childTickets = 0,
    infantTickets = 0,
    totalPrice = 0,
    formData,
  } = location.state || {};

  return (
    <>
      <Header />
      <section className="checkout">
        <div className="checkout__wrapper">
          <CheckNumbers currentStep={currentStep} />
          <div className="payment-method">
            <div className="payment-method__option">
              <h3 className="payment-method__title">
                {texts.payment || "Payment Method"}
              </h3>
              <Elements stripe={stripePromise}>
                <CheckoutForm
                  totalPrice={totalPrice}
                  onPaymentSuccess={handlePaymentSuccess}
                />
              </Elements>

              <PayPalCheckout
                totalPrice={totalPrice}
                onPaymentSuccess={handlePaymentSuccess}
              />
            </div>

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
