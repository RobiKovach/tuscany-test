import React, { useEffect, useRef } from "react";
import { useLanguage } from "../../LanguageContext/LanguageContext";
import { useLocation, NavLink } from "react-router-dom";
import translations from "../../../data/translations.json";
import "./Menu.scss";

export default function Menu() {
  const { language } = useLanguage();
  const iconMenuRef = useRef(null);
  const location = useLocation();

  // Перевіряємо, чи поточна сторінка не є головною
  const isNotHomePage = location.pathname !== "/";

  // Масив пунктів меню
  const menuItems = [
    { path: "/", key: "home" },
    { path: "/about", key: "about_us" },
    { path: "/tours", key: "tours" },
    { path: "/contacts", key: "contacts" },
  ];

  useEffect(() => {
    const iconMenu = iconMenuRef.current;
    if (!iconMenu) return;

    const toggleMenu = () => {
      document.body.classList.toggle("menu-open");
    };

    iconMenu.addEventListener("click", toggleMenu);

    return () => {
      iconMenu.removeEventListener("click", toggleMenu);
    };
  }, []);

  return (
    <div className="header__menu menu">
      {/* Іконка відкриття меню */}
      <button
        ref={iconMenuRef}
        type="button"
        className={`menu__icon icon-menu ${
          isNotHomePage ? "menu__icon--nohome" : ""
        }`}
      >
        <span></span>
      </button>

      <nav className="menu__body">
        <ul className="menu__list">
          {menuItems.map((item) => (
            <li key={item.key} className="menu__item">
              <NavLink
                to={item.path}
                className={`menu__link ${
                  isNotHomePage ? "menu__link--nohome" : ""
                }`}
              >
                {translations[language][item.key]}
              </NavLink>
            </li>
          ))}
        </ul>
        <div id="menu-container"></div>
      </nav>
    </div>
  );
}
