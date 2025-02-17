import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "../../Header/Header";
import "./PaymentSuccess.scss";
import ResponsiveMove from "../../ResponsiveMove/ResponsiveMove";
import Footer from "../../Footer/Footer";

export default function PaymentSuccess() {
  const navigate = useNavigate();
  const location = useLocation();
  const paymentData = location.state?.paymentData || {};
  const bookingDetails = location.state?.bookingDetails || {};

  useEffect(() => {
    if (paymentData && paymentData.id) {
      const ticketData = {
        paymentId: paymentData.id,
        status: paymentData.status,
        amount: paymentData.amount / 100,
        currency: paymentData.currency,
        paymentMethod: paymentData.payment_method_types.includes("paypal")
          ? "PayPal"
          : "Credit Card",
        customer: {
          name: bookingDetails.name,
          email: bookingDetails.email,
          phone: bookingDetails.phone,
        },
        booking: {
          tourName: bookingDetails.tourName.name || "Назва не вказана",
          date: bookingDetails.date,
          time: bookingDetails.time,
          image: bookingDetails.tourName.image,
          tickets: {
            adults: bookingDetails.adultTickets,
            children: bookingDetails.childTickets,
            infants: bookingDetails.infantTickets,
          },
          totalPrice: bookingDetails.totalPrice,
        },
      };

      console.log("Booking details:", bookingDetails);
      console.log("Tour Image:", bookingDetails.image);

      let previousTickets = JSON.parse(localStorage.getItem("tickets")) || [];

      const isDuplicate = previousTickets.some(
        (ticket) => ticket.paymentId === ticketData.paymentId
      );

      if (!isDuplicate) {
        previousTickets = [...previousTickets, ticketData];
        localStorage.setItem("tickets", JSON.stringify(previousTickets));
        console.log("✅ Квиток додано в localStorage:", ticketData);
      } else {
        console.log("⚠️ Квиток вже існує у localStorage:", ticketData);
      }
    }
  }, [paymentData]);

  return (
    <>
      <Header />
      <div className="success">
        <div className="success__wrapper">
          <img
            src={`${process.env.PUBLIC_URL}/img/done.png`}
            alt="status done"
          />
          <h2 className="success__title">Your Order is complete!</h2>
          <p className="success__description">
            You will be receiving a confirmation email with order details.
          </p>

          <button className="success__btn" onClick={() => navigate("/")}>
            Go to the Home Page
          </button>
        </div>
      </div>
      <ResponsiveMove />
      <Footer />
    </>
  );
}
