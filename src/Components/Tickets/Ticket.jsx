import React, { useEffect, useState } from "react";

export default function Ticket() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const savedTickets = JSON.parse(localStorage.getItem("tickets")) || [];
    setTickets(savedTickets);
  }, []);

  return (
    <section className="ticket">
      <div className="ticket__wrapper">
        <h2 className="ticket__title title">🎟️ Мої квитки</h2>

        {tickets.length > 0 ? (
          tickets.map((ticket, index) => {
            const tourImage = ticket.booking.image;
            const today = new Date();
            const tourDate = new Date(ticket.booking.date);
            const isPast = tourDate < today;

            return (
              <div key={index} className="ticket__items items-ticket">
                <div className="ticket__image">
                  <img
                    src={`${process.env.PUBLIC_URL}${tourImage}`}
                    alt={ticket.booking.tourName}
                    className="ticket__tour-img"
                  />
                </div>

                <div className="items-ticket__header">
                  <h3>🚀 {ticket.booking.tourName}</h3>
                  <p>📅 Дата: {ticket.booking.date}</p>
                  <p>⏰ Час: {ticket.booking.time}</p>
                  <p>
                    💳 Оплачено: {ticket.amount} {ticket.currency.toUpperCase()}
                  </p>
                  <p>
                    <strong>🏷️ Статус туру:</strong>{" "}
                    <span className="ticket-status">
                      <img
                        src={`${process.env.PUBLIC_URL}/img/${
                          isPast ? "ended.svg" : "upcoming.svg"
                        }`}
                        alt="status done"
                      />
                      <span className="ticket-status-text">
                        {isPast ? "Ended" : "Upcoming"}
                      </span>
                    </span>
                  </p>

                  <p>
                    💰 <strong>Метод оплати:</strong>{" "}
                    {ticket.paymentMethod || "Credit Card"}
                  </p>
                </div>

                <div className="items-ticket__container">
                  <p>
                    <strong>👤 Ім'я:</strong> {ticket.customer.name}
                  </p>
                  <p>
                    <strong>✉️ Email:</strong> {ticket.customer.email}
                  </p>
                  <p>
                    <strong>📞 Телефон:</strong> {ticket.customer.phone}
                  </p>
                  <p>
                    <strong>🎫 Кількість квитків:</strong>
                  </p>
                  <ul>
                    {ticket.booking.tickets.adults > 0 && (
                      <li>👨 Дорослих: {ticket.booking.tickets.adults}</li>
                    )}
                    {ticket.booking.tickets.children > 0 && (
                      <li>👦 Дітей: {ticket.booking.tickets.children}</li>
                    )}
                    {ticket.booking.tickets.infants > 0 && (
                      <li>
                        👶 Малюків (до 5 років):{" "}
                        {ticket.booking.tickets.infants}
                      </li>
                    )}
                  </ul>
                  <p>
                    <strong>💰 Загальна сума:</strong>{" "}
                    {ticket.booking.totalPrice} EUR
                  </p>
                </div>
              </div>
            );
          })
        ) : (
          <p className="without-ticket">
            <img
              className="without-ticket__image"
              src={`${process.env.PUBLIC_URL}/img/without-ticket.png`}
              alt="Немає квитків"
            />
            <span className="without-ticket__text">
              У вас поки що немає квитків. Почніть планувати свою наступну
              подорож!
            </span>
          </p>
        )}
      </div>
    </section>
  );
}
