import React, { useEffect, useState } from "react";
import "./Tickets.scss";
import translations from "../../data/translations.json";
import { useLanguage } from "../LanguageContext/LanguageContext";

export default function Ticket() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const savedTickets = JSON.parse(localStorage.getItem("tickets")) || [];
    setTickets(savedTickets);
  }, []);

  const { language } = useLanguage();
  const texts = translations[language];

  return (
    <section className="ticket">
      <div className="ticket__wrapper">
        <h2 className="ticket__title title">
          {texts.my_tickets || "My Tickets"}
        </h2>

        {tickets.length > 0 ? (
          <div className="ticket__grid">
            <div className="ticket__header">
              <span className="text-left">
                {texts.tour_name || "Tour Name"}
              </span>
              <span>{texts.payment_method || "Payment Method"}</span>
              <span>{texts.price || "Price"}</span>
              <span>{texts.status || "Status"}</span>
            </div>

            {tickets.map((ticket, index) => {
              const today = new Date();
              const tourDate = new Date(ticket.booking.date);
              const isPast = tourDate < today;

              const formatDate = (dateString) => {
                if (!dateString) return texts.not_selected || "Not selected";
                const date = new Date(dateString);
                return new Intl.DateTimeFormat("en-GB", {
                  weekday: "short",
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })
                  .format(date)
                  .toUpperCase()
                  .replace(",", "");
              };

              return (
                <div key={index} className="ticket__row">
                  <div className="ticket__tour">
                    <img
                      src={`${process.env.PUBLIC_URL}${ticket.booking.image}`}
                      alt={ticket.booking.tourName}
                      className="ticket__tour-img"
                    />
                    <div className="ticket__tour-info">
                      <strong>{ticket.booking.tourName}</strong>
                      <p>
                        <img
                          src={`${process.env.PUBLIC_URL}/img/icon-date-orange.svg`}
                          alt="icon-date"
                        />
                        {formatDate(ticket.booking.date)}
                      </p>
                      <p>
                        <img
                          src={`${process.env.PUBLIC_URL}/img/account/icon-clock-orange.svg`}
                          alt="icon-time"
                        />
                        {ticket.booking.time}
                      </p>
                    </div>
                  </div>

                  <div className="ticket__payment">
                    {ticket.paymentMethod === "PayPal" ? (
                      <img
                        src={`${process.env.PUBLIC_URL}/img/PayPal.png`}
                        alt="PayPal"
                        className="payment-icon"
                      />
                    ) : (
                      <img
                        src={`${process.env.PUBLIC_URL}/img/Visa.png`}
                        alt="Credit Card"
                        className="payment-icon"
                      />
                    )}
                    {ticket.paymentMethod}
                  </div>

                  <div className="ticket__price">
                    €{ticket.booking.totalPrice.toFixed(2)}
                  </div>

                  <div className="ticket__status">
                    {isPast ? (
                      <span className="status ended">
                        <img
                          src={`${process.env.PUBLIC_URL}/img/ended.svg`}
                          alt="Ended"
                        />
                        <p>{texts.ended || "Ended"}</p>
                      </span>
                    ) : (
                      <span className="status upcoming">
                        <img
                          src={`${process.env.PUBLIC_URL}/img/upcoming.svg`}
                          alt="Upcoming"
                        />
                        <p>{texts.upcoming || "Upcoming"}</p>
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <p className="without-ticket">
            <img
              className="without-ticket__image"
              src={`${process.env.PUBLIC_URL}/img/without-ticket.png`}
              alt="No tickets"
            />
            <span className="without-ticket__text">
              {texts.no_tickets ||
                "You don't have any tickets yet. Start planning your next trip!"}
            </span>
          </p>
        )}
      </div>
    </section>
  );
}
