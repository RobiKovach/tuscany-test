import React from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../LanguageContext/LanguageContext";
import translations from "../../data/translations.json";

const LogoutButton = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();

  const handleLogout = () => {
    sessionStorage.removeItem("user");
    window.location.reload();
  };

  return (
    <button onClick={handleLogout} className="logout-button">
      <img
        src={`${process.env.PUBLIC_URL}/img/account/logout-icon.svg`}
        alt="profile"
        className="user-info__ticket"
      />
      {translations[language].logout}
    </button>
  );
};

export default LogoutButton;
