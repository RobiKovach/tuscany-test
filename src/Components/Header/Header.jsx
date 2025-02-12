import React from "react";
import { useLocation } from "react-router-dom";
import Spoiler from "../Spoiler/Spoiler";
import Menu from "./Menu/Menu";
import "./Header.scss";

export default function Header() {
  const location = useLocation();
  const isNotHomePage = location.pathname !== "/";

  return (
    <header className={`header ${isNotHomePage ? "header--nohome" : ""}`}>
      <div className="header__wrapper">
        <div className="header__logo">
          <img src={`${process.env.PUBLIC_URL}/img/logo.png`} alt="Logo" />
        </div>
        <div className="header__other">
          <Menu className={isNotHomePage ? "menu--nohome" : ""} />
          <div className="header__actions action-header">
            <div className="action-header__language">
              <Spoiler />
            </div>
            <div id="header-container"></div>
          </div>
        </div>
      </div>
    </header>
  );
}
