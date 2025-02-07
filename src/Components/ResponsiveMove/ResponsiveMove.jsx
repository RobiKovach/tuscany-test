import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useLocation } from "react-router-dom"; // 📌 Додаємо useLocation
import { useLanguage } from "../LanguageContext/LanguageContext";
import translations from "../../data/translations.json"; // 📌 Імпортуємо переклади

const ResponsiveMove = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 769);
  const [container, setContainer] = useState(null);
  const { language } = useLanguage();
  const location = useLocation(); // 📌 Відстежуємо зміну URL

  // 📌 Перевіряємо, чи ми на сторінці продукту
  const isNotHomePage =
    location.pathname !== "/" && location.pathname !== "/about";

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // 🔥 Оновлюємо контейнер при зміні сторінки
    const newContainer = isMobile
      ? document.getElementById("menu-container")
      : document.getElementById("header-container");

    setContainer(newContainer);
  }, [isMobile, location.pathname]); // 🔥 Додаємо location.pathname у залежності

  return (
    <>
      {container &&
        createPortal(
          <div className="moving-block">
            <a
              href="#"
              className={`action-header__login ${
                isNotHomePage ? "product-page-nohome" : ""
              }`}
            >
              {translations[language].login}
            </a>
            <a href="#" className="action-header__sign">
              {translations[language].sign_up}
            </a>
          </div>,
          container
        )}
    </>
  );
};

export default ResponsiveMove;
