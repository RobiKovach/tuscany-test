import React from "react";
import { NavLink } from "react-router-dom";
import { useLanguage } from "../../LanguageContext/LanguageContext";
import translations from "../../../data/translations";
import "./TourPackages.scss";

export default function TourPackages({ products }) {
  const { language } = useLanguage();
  const texts = translations[language];

  return (
    <section className="tour-packages">
      <div className="tour-packages__wrapper">
        <div className="tour-packages__title title">{texts.tour_packages}</div>
        <div className="tour-packages__items">
          {products.map((product) => (
            <div key={product.id} className="tour-packages__item item-packages">
              <div className="item-packages__img">
                <img
                  src={`${process.env.PUBLIC_URL}${product.image}`}
                  alt={texts[product.name] || product.name}
                />
              </div>
              <div className="item-packages__info">
                <div className="item-packages__text text-packages">
                  <h3 className="text-packages__title">
                    {texts[product.name] || product.name}
                  </h3>
                  <div className="text-packages__price">
                    {texts.from}{" "}
                    <span className="orange">
                      <b>{product.price} €</b>
                    </span>
                  </div>
                  <div className="text-packages__date">
                    <div className="text-packages__when when-packages">
                      <img
                        src={`${process.env.PUBLIC_URL}/img/icon-date-orange.svg`}
                        alt="icon"
                        className="when-packages__icon"
                      />
                      <p className="when-packages__text">
                        {texts[product.when] || product.when}
                      </p>
                    </div>
                    <div className="text-packages__people people-packages">
                      <img
                        src={`${process.env.PUBLIC_URL}/img/icon-people-orange.svg`}
                        alt="icon"
                        className="people-packages__icon"
                      />
                      <p className="people-packages__text">
                        {product.numberOfGroup} {texts.people}
                      </p>
                    </div>
                  </div>
                  <div className="text-packages__description">
                    {texts[product.description] || product.description}
                  </div>
                </div>
                <NavLink
                  to={`${product.url}`}
                  className="item-packages__btn read-more"
                >
                  <p>{texts.read_more}</p>
                  <img
                    src={`${process.env.PUBLIC_URL}/img/arrow-next-orange.svg`}
                    alt="icon"
                  />
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
