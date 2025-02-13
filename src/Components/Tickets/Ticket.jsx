import React from "react";

export default function Ticket() {
  return (
    <>
      <section className="ticket">
        <div className="ticket__wrapper">
          <h2 className="ticket__title title">My Tickets</h2>
          <div className="ticket__items items-ticket">
            <div className="items-ticket__header"></div>
            <div className="items-ticket__container"></div>
          </div>
        </div>
      </section>
    </>
  );
}
