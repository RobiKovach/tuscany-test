import React from "react";
import FooterContent from "./FooterContent";
import { useLanguage } from "../LanguageContext/LanguageContext"; // Імпортуємо хук мови
import translations from "../../data/translations.json"; // Файл з перекладами
import "./Footer.scss";

export default function Footer() {
  const { language } = useLanguage();
  const texts = translations[language];

  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__top">
          <img src="/img/logo.png" alt="Logo" />
        </div>
        <div className="footer__content content-footer">
          <FooterContent />
        </div>
        <div className="footer__bottom">
          {texts.copyright} © 2025. {texts.all_rights_reserved}
        </div>
      </div>
    </footer>
  );
}
