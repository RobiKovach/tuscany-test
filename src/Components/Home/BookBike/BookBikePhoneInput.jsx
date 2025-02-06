import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useLanguage } from "../../LanguageContext/LanguageContext";
import translations from "../../../data/translations";

export default function BookBikePhoneInput({ value, onChange }) {
  const { language } = useLanguage();
  const texts = translations[language];

  // Коди країн відповідно до мови
  const countryCodes = {
    en: "us",
    uk: "ua",
    de: "de",
    it: "it",
  };

  return (
    <div className="form-bookbike__item item-bookbike">
      <label className="item-bookbike__label">{texts.telephone_number}</label>
      <PhoneInput
        country={countryCodes[language] || "us"}
        value={value}
        onChange={onChange}
        inputClass="item-bookbike__fild"
        containerClass="phone-input-container"
      />
    </div>
  );
}
