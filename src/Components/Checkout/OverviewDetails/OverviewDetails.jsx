import React from "react";
import "./OverviewDetails.scss";

const OverviewDetails = ({
  totalPrice,
  onNextStep,
  texts,
  product,
  selectedDate,
  selectedTime,
  adultTickets,
  childTickets,
  infantTickets,
}) => {
  const getPrice = (price) => {
    const parsedPrice = parseFloat(price);
    return !isNaN(parsedPrice) ? parsedPrice : 0;
  };

  return (
    <div className="booking-details__overview overview-details">
      <h3 className="overview-details__title">
        {texts?.your_tickets_overview || "Your Tickets Overview"}
      </h3>
      <div className="overview-details__info info-overview">
        <div className="info-overview__header header-overview">
          <img
            src={`${process.env.PUBLIC_URL}${product.image}`}
            alt={product?.name || "Tour Image"}
            className="header-overview__image"
          />
          <div className="header-overview__texts">
            <h5 className="header-overview__title">
              {texts.tour_names?.[product?.name] ||
                texts[product?.name] ||
                product?.name ||
                "Unknown Tour"}
            </h5>
            <div className="header-overview__item">
              <img
                src={`${process.env.PUBLIC_URL}/img/icon-date-orange.svg`}
                alt="icon-date"
              />
              {selectedDate || "Not selected"}
            </div>
            <div className="header-overview__item">
              <img
                src={`${process.env.PUBLIC_URL}/img/account/icon-clock-orange.svg`}
                alt="icon-time"
              />
              {selectedTime || "Not selected"}
            </div>
          </div>
        </div>

        <div className="info-overview__info">
          {adultTickets > 0 && (
            <div className="info-overview__item">
              <div className="info-overview__left">
                <span>{adultTickets}</span>
                <p>{texts.adult}</p>
              </div>
              <div className="info-overview__right">
                €{(adultTickets * getPrice(product.adult)).toFixed(2)}
              </div>
            </div>
          )}

          {childTickets > 0 && (
            <div className="info-overview__item">
              <div className="info-overview__left">
                <span>{childTickets}</span>
                <p>{texts.child}</p>
              </div>
              <div className="info-overview__right">
                €{(childTickets * getPrice(product.child)).toFixed(2)}
              </div>
            </div>
          )}

          {infantTickets > 0 && (
            <div className="info-overview__item">
              <div className="info-overview__left">
                <span>{infantTickets}</span>
                <p>{texts.infant}</p>
              </div>
              <div className="info-overview__right">{texts.free || "Free"}</div>
            </div>
          )}
        </div>

        <div className="info-overview__total-price">
          <strong>{texts?.total_price || "Total Price"}:</strong>{" "}
          <span>
            {totalPrice === 0
              ? texts?.free || "Free"
              : `€${totalPrice.toFixed(2)}`}
          </span>
        </div>
      </div>

      <button className="next-step-button" onClick={onNextStep}>
        {texts?.next || "Next"}
      </button>
    </div>
  );
};

export default OverviewDetails;
