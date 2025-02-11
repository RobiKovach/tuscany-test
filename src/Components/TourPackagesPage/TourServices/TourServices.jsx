import React from "react";
import { useLanguage } from "../../LanguageContext/LanguageContext";
import translations from "../../../data/translations";
import "./TourServices.scss";
import { useNavigate } from "react-router-dom";

export default function TourServices({ services }) {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const texts = translations[language];
  return (
    <>
      <section className="tour-services">
        <div className="tour-services__wrapper">
          <div className="tour-services__title title">{texts.services}</div>
          <div className="tour-services__items">
            {services.map((service) => (
              <div
                key={service.id}
                className="tour-services__item item-services"
              >
                <img
                  src={`${process.env.PUBLIC_URL}${service.image}`}
                  alt={texts[service.name] || service.name}
                  className="item-services__image"
                />
                <div className="item-services__text text-services">
                  <h3 className="text-services__title">
                    {texts[service.title] || service.title}
                  </h3>
                  <p className="text-services__description">
                    {texts[service.description] || service.description}
                  </p>
                  <button
                    onClick={() => navigate(service.url)}
                    className="text-services__btn read-more"
                  >
                    <p>{texts.read_more}</p>
                    <img
                      src={`${process.env.PUBLIC_URL}/img/arrow-next-orange.svg`}
                      alt="icon"
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
