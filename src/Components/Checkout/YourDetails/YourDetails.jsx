import React, { useState } from "react";
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

  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
        formData,
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
            <div className="your-details__content">
              <h3 className="your-details__title">
                {texts.who_shall_tickets ||
                  "Who shall we send these tickets to?"}
              </h3>

              <div className="your-details__form form-details">
                <div className="form-details__input-group">
                  <label>{texts.name || "Name"}</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={texts.enter_name || "Enter your name"}
                    required
                  />
                </div>

                <div className="form-details__input-group">
                  <label>{texts.surname || "Surname"}</label>
                  <input
                    type="text"
                    name="surname"
                    value={formData.surname}
                    onChange={handleChange}
                    placeholder={texts.enter_surname || "Enter your surname"}
                    required
                  />
                </div>

                <div className="form-details__input-group">
                  <label>{texts.phone || "Telephone Number"}</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={
                      texts.enter_phone || "Enter your telephone number"
                    }
                    required
                  />
                </div>

                <div className="form-details__input-group">
                  <label>{texts.email || "Email Address"}</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={
                      texts.enter_email || "Enter your email address"
                    }
                    required
                  />
                </div>
              </div>
            </div>

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
