import React from "react";
import translations from "../../data/translations.json";

const ProductInfo = ({ product, language }) => {
  return (
    <div className="product-info__mid mid-product">
      <h2 className="mid-product__title title">
        {translations[language].details}
      </h2>
      <div className="mid-product__items">
        {[
          {
            icon: "icon_private-tours.svg",
            label: "group_size",
            value: product.numberOfGroup,
          },
          {
            icon: "icon_duration.svg",
            label: "duration",
            value: product.duration,
          },
          {
            icon: "icons_location.svg",
            label: "departingAndArrivingAreas",
            value: product.departingAndArrivingAreas,
          },
          {
            icon: "icon_guide.svg",
            label: "guideService",
            value: product.guideService,
          },
          {
            icon: "icon_language.svg",
            label: "languages",
            value: product.languages.join(", "),
          },
          {
            icon: "icon_ticket.svg",
            label: "entryFees",
            value: product.entryFees,
          },
          {
            icon: "icon_bus.svg",
            label: "transportation",
            value: product.transportation,
          },
        ].map((item, index) => (
          <div key={index} className="mid-product__item">
            <img
              src={`${process.env.PUBLIC_URL}/img/products/icons/${item.icon}`}
              alt="icon"
            />
            <p>
              <b>{translations[language][item.label]}:</b> {item.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductInfo;
