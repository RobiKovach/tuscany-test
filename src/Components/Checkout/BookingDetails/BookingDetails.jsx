import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import translations from "../../../data/translations.json";
import CheckNumbers from "../CheckNumbers/CheckNumbers";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import ResponsiveMove from "../../ResponsiveMove/ResponsiveMove";
import OverviewDetails from "../OverviewDetails/OverviewDetails";
import { useLanguage } from "../../LanguageContext/LanguageContext";
import "./BookingDetails.scss";

const BookingDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const texts = translations[language] ?? translations["en"] ?? {};

  const { product, selectedDate, selectedTime } = location.state || {};

  const [date, setDate] = useState(selectedDate || "");
  const [time, setTime] = useState(selectedTime || "");
  const [adultTickets, setAdultTickets] = useState(0);
  const [childTickets, setChildTickets] = useState(0);
  const [infantTickets, setInfantTickets] = useState(0);

  const availableTimes = [
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
  ];

  if (!product) {
    console.warn("No product data received, redirecting to home page...");
    navigate("/");
    return null;
  }

  const currentStep = location.pathname;

  const increaseTickets = (setter) => setter((prev) => prev + 1);
  const decreaseTickets = (setter) =>
    setter((prev) => (prev > 0 ? prev - 1 : 0));

  const infantPrice =
    product.infant === "Free"
      ? texts.free || "Free"
      : `${product.infant || texts.free || "Free"}`;

  const totalPrice =
    adultTickets * product?.adult + childTickets * product?.child;

  const goToNextStep = () => {
    navigate("/checkout/your-details", {
      state: {
        product,
        selectedDate: date,
        selectedTime: time,
        adultTickets,
        childTickets,
        infantTickets,
      },
    });
  };
  console.log("🔍 Product Data:", product);
  console.log("💰 Adult price:", product.adult);

  return (
    <>
      <Header />
      <section className="checkout">
        <div className="checkout__wrapper">
          <div className="booking-details">
            <CheckNumbers currentStep={currentStep} />
            <div className="booking-details__container">
              <div className="booking-details__info info-details">
                <div className="info-details__item">
                  <h3 className="info-details__title">
                    {texts.when_will_you_visit}
                  </h3>
                  <input
                    type="date"
                    className="info-details__date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
                <div className="info-details__item">
                  <h3 className="info-details__title">{texts.which_time}</h3>
                  <select
                    className="info-details__time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                  >
                    <option value="">{texts.choose_time}</option>
                    {availableTimes.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="info-details__item">
                  <h3 className="info-details__title">
                    {texts.select_your_tickets}
                  </h3>
                  <ul className="info-details__list">
                    <li className="info-details__li">{texts.free_for_kids}</li>
                    <li className="info-details__li">
                      {texts.priority_tickets}
                    </li>
                  </ul>
                </div>
                <div className="info-details__item item-details">
                  <div className="item-details__item">
                    <div className="item-details__info">
                      <div className="item-details__old">{texts.adult}</div>
                      <div className="item-details__price">
                        €{product.adult}
                      </div>
                    </div>
                    <div className="item-details__calc calc-details">
                      <button
                        className="calc-details__calc-button"
                        onClick={() => decreaseTickets(setAdultTickets)}
                      >
                        -
                      </button>
                      <span className="calc-details__ticket-count">
                        {adultTickets}
                      </span>
                      <button
                        className="calc-details__calc-button"
                        onClick={() => increaseTickets(setAdultTickets)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <div className="info-details__item item-details">
                  <div className="item-details__item">
                    <div className="item-details__info">
                      <div className="item-details__old">{texts.child}</div>
                      <div className="item-details__list">
                        <li className="item-details__li">
                          {texts.with_valid_id}
                        </li>
                        <li className="item-details__li">
                          {texts.only_with_adult}
                        </li>
                      </div>
                      <div className="item-details__price">
                        €{product.child || 22}
                      </div>
                    </div>
                    <div className="item-details__calc calc-details">
                      <button
                        className="calc-details__calc-button"
                        onClick={() => decreaseTickets(setChildTickets)}
                      >
                        -
                      </button>
                      <span className="calc-details__ticket-count">
                        {childTickets}
                      </span>
                      <button
                        className="calc-details__calc-button"
                        onClick={() => increaseTickets(setChildTickets)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <div className="info-details__item item-details">
                  <div className="item-details__item">
                    <div className="item-details__info">
                      <div className="item-details__old">{texts.infant}</div>
                      <div className="item-details__list">
                        <li className="item-details__li">
                          {texts.only_with_adult}
                        </li>
                      </div>
                      <div className="item-details__price">{infantPrice}</div>
                    </div>
                    <div className="item-details__calc calc-details">
                      <button
                        className="calc-details__calc-button"
                        onClick={() => decreaseTickets(setInfantTickets)}
                      >
                        -
                      </button>
                      <span className="calc-details__ticket-count">
                        {infantTickets}
                      </span>
                      <button
                        className="calc-details__calc-button"
                        onClick={() => increaseTickets(setInfantTickets)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <OverviewDetails
                totalPrice={totalPrice}
                onNextStep={goToNextStep}
                texts={texts}
                product={product}
                selectedDate={date}
                selectedTime={time}
                adultTickets={adultTickets}
                childTickets={childTickets}
                infantTickets={infantTickets}
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ResponsiveMove />
    </>
  );
};

export default BookingDetails;
