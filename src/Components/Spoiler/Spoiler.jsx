import React from "react";
import { useLanguage } from "../../Components/LanguageContext/LanguageContext";
import { useLocation } from "react-router-dom"; // 📌 Додаємо useLocation
import "./Spoiler.scss";

const Spoiler = () => {
  const { language, setLanguage } = useLanguage();
  const location = useLocation(); // Отримуємо поточний URL

  // 📌 Перевіряємо, чи відкрито сторінку товару
  const isNotHomePage =
    location.pathname !== "/" && location.pathname !== "/about";

  return (
    <div
      className={`select-language ${
        isNotHomePage ? "select-language--nohome" : ""
      }`}
    >
      <select
        id="language-select"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
      >
        <option value="en">EN</option>
        <option value="ua">UA</option>
        <option value="de">DE</option>
      </select>
    </div>
  );
};

export default Spoiler;
