import React from "react";
import { NavLink } from "react-router-dom";
import { useLanguage } from "../LanguageContext/LanguageContext"; // Хук для вибору мови
import translations from "../../data/translations"; // Файл з перекладами

// Масив із пунктів меню (ключі для перекладу)
const footerLinks = [
  { key: "home", path: "/" },
  { key: "about_us", path: "/about_us" },
  { key: "tours", path: "/tours" },
];

export default function FooterHome() {
  const { language } = useLanguage();
  const texts = translations[language];

  return (
    <div className="content-footer__home home-footer">
      <h2 className="home-footer__title footer-title">
        {texts.home || "Home"}
      </h2>
      <nav className="home-footer__nav">
        {footerLinks.map((link, index) => (
          <NavLink key={index} to={link.path} className="home-footer__link">
            {texts[link.key] || link.key}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
