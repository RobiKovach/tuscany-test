import React from "react";
import { NavLink } from "react-router-dom";

const SearchActions = ({ product, texts }) => {
  return (
    <div className="info-results__actives actives-results">
      <div className="actives-results__price">
        {texts.from} <b>{product.price}€</b>
      </div>
      <NavLink to={product.url} className="actives-results__view">
        {texts.view_details}
      </NavLink>
      <button className="actives-results__buy">{texts.buy_now}</button>
    </div>
  );
};

export default SearchActions;
