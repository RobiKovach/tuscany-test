import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useLanguage } from "../LanguageContext/LanguageContext";
import translations from "../../data/translations.json";

const LogoutButton = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { language } = useLanguage();

  const handleLogout = () => {
    sessionStorage.removeItem("user");
    navigate("/");
    setTimeout(() => window.location.reload(), 100);
  };

  useEffect(() => {
    const checkUser = () => {
      const user = sessionStorage.getItem("user");
      if (!user && location.pathname === "/tickets") {
        navigate("/");
      }
    };

    window.addEventListener("storage", checkUser);
    checkUser();

    return () => {
      window.removeEventListener("storage", checkUser);
    };
  }, [location, navigate]);

  return (
    <button onClick={handleLogout} className="logout-button">
      <img
        src={`${process.env.PUBLIC_URL}/img/account/logout-icon.svg`}
        alt="logout"
        className="user-info__ticket"
      />
      {translations[language].logout}
    </button>
  );
};

export default LogoutButton;
