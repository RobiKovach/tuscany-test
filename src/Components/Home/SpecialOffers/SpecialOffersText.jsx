import React from "react";
import { NavLink } from "react-router-dom";

export default function SpecialOffersText({ texts }) {
  return (
    <div className="special__info info-special">
      <h3 className="info-special__title">{texts.special_offers_title}</h3>
      <p className="info-special__description">
        {texts.special_offers_description}
      </p>
      <NavLink to="/contacts" className="info-special__button">
        {texts.contact_us}
      </NavLink>
    </div>
  );
}
