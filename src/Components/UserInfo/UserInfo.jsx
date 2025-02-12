import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import LogoutButton from "../Authorization/LogoutButton";
import { useLanguage } from "../LanguageContext/LanguageContext";
import translations from "../../data/translations.json";
import "./UserInfo.scss";

const UserInfo = () => {
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const { language } = useLanguage();
  const navigate = useNavigate();
  const menuRef = useRef(null);

  useEffect(() => {
    const storedUser = sessionStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const goToProfile = () => {
    navigate("/tickets");
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <div className="user-info">
      {user && (
        <div className="user-info__wrapper" ref={menuRef}>
          <img
            src={`${process.env.PUBLIC_URL}/img/account/profile.svg`}
            alt="profile"
            className="user-info__profile"
            onClick={toggleMenu}
          />

          {menuOpen && (
            <div className="user-info__menu">
              <button onClick={goToProfile} className="user-info__menu-item">
                <img
                  src={`${process.env.PUBLIC_URL}/img/account/icon_ticket.svg`}
                  alt="profile"
                  className="user-info__ticket"
                />
                {translations[language].profile}
              </button>
              <LogoutButton />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default UserInfo;
