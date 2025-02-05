import React from "react";
import { NavLink } from "react-router-dom";
import { useLanguage } from "../LanguageContext/LanguageContext"; // Хук для вибору мови
import translations from "../../data/translations"; // Файл з перекладами

// Масив із пунктів меню (ключі для перекладу)
const footerLinks = [
  { key: "terms_of_use", path: "/terms_of_use" },
  { key: "privacy_policy", path: "/privacy_policy" },
];

export default function FooterHelp() {
  const { language } = useLanguage();
  const texts = translations[language];

  return (
    <div className="content-footer__help help-footer">
      <h2 className="help-footer__title footer-title">
        {texts.help || "Help"}
      </h2>
      <nav className="help-footer__nav">
        {footerLinks.map((link, index) => (
          <NavLink key={index} to={link.path} className="help-footer__link">
            {texts[link.key] || link.key}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
