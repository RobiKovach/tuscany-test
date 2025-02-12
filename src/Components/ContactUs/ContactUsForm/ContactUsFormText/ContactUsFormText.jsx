import React from "react";
import "./ContactUsFormText.scss";
import { useLanguage } from "../../../LanguageContext/LanguageContext";
import translations from "../../../../data/translations.json";
import { NavLink } from "react-router-dom";

export default function ContactUsFormText() {
  const { language } = useLanguage();
  const texts = translations[language];
  const contactsLinks = [
    {
      label: texts.address,
      path: "https://maps.app.goo.gl/2Hw4vB6EaSomC9Yk8",
      icon: `${process.env.PUBLIC_URL}/img/location.svg`,
      isExternal: true,
    },
    {
      label: "+39 346 368 5708",
      path: "tel:+393463685708",
      icon: `${process.env.PUBLIC_URL}/img/phone.svg`,
      isExternal: true,
    },
    {
      label: "italiainlimo@gmail.com",
      path: "mailto:italiainlimo@gmail.com",
      icon: `${process.env.PUBLIC_URL}/img/email.svg`,
      isExternal: true,
    },
  ];
  return (
    <div className="contact-us__text text-contact-us">
      <div className="text-contact-us__titles">
        <h3 className="text-contact-us__title">{texts.get_in_touch}</h3>
        <p className="text-contact-us__description">{texts.fill_form}</p>
      </div>
      <div className="text-contact-us__info info-contact-text">
        {contactsLinks.map((link, index) => (
          <NavLink
            key={index}
            to={link.path}
            className="info-contact-text__item"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={link.icon}
              alt={link.label}
              className="contacts-footer__icon"
            />
            {link.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
