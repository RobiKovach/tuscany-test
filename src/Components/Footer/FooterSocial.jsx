import React from "react";
import { useLanguage } from "../LanguageContext/LanguageContext"; // Імпортуємо хук для мови
import translations from "../../data/translations.json"; // Файл з перекладами

const FooterSocial = () => {
  const { language } = useLanguage();
  const texts = translations[language];

  const socialLinks = [
    {
      label: "Twitter",
      path: "https://twitter.com/example",
      icon: `${process.env.PUBLIC_URL}/img/twitter.svg`,
    },
    {
      label: "Facebook",
      path: "https://facebook.com/example",
      icon: `${process.env.PUBLIC_URL}/img/facebook.svg`,
    },
    {
      label: "Instagram",
      path: "https://instagram.com/example",
      icon: `${process.env.PUBLIC_URL}/img/instagram.svg`,
    },
  ];

  return (
    <div className="content-footer__social social-footer">
      <h2 className="social-footer__title footer-title">
        {texts.social_media}
      </h2>
      <nav className="social-footer__nav">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.path}
            className="social-footer__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={link.icon}
              alt={link.label}
              className="social-footer__icon"
            />
          </a>
        ))}
      </nav>
    </div>
  );
};

export default FooterSocial;
