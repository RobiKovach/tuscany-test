import React from "react";
import { useLanguage } from "../LanguageContext/LanguageContext"; // Імпортуємо хук для мови
import translations from "../../data/translations.json"; // Файл з перекладами

const FooterContacts = () => {
  const { language } = useLanguage();
  const texts = translations[language];

  const footerLinks = [
    {
      label: texts.address, // Переклад адреси
      path: "https://maps.app.goo.gl/2Hw4vB6EaSomC9Yk8",
      icon: "/img/location.svg",
      isExternal: true,
    },
    {
      label: "+39 346 368 5708",
      path: "tel:+393463685708",
      icon: "/img/phone.svg",
      isExternal: true,
    },
    {
      label: "italiainlimo@gmail.com",
      path: "mailto:italiainlimo@gmail.com",
      icon: "/img/email.svg",
      isExternal: true,
    },
  ];

  return (
    <div className="content-footer__contacts contacts-footer">
      <h2 className="contacts-footer__title footer-title">{texts.contacts}</h2>
      <nav className="contacts-footer__nav">
        {footerLinks.map((link, index) => (
          <a
            key={index}
            href={link.path}
            className="contacts-footer__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={link.icon}
              alt={link.label}
              className="contacts-footer__icon"
            />
            {link.label}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default FooterContacts;
