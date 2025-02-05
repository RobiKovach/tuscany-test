import React from "react";
import { useLanguage } from "../../LanguageContext/LanguageContext";
import translations from "../../../data/translations.json";

const TabButtons = ({ activeTab, setActiveTab }) => {
  const { language } = useLanguage();
  const texts = translations[language];

  return (
    <div className="tab-buttons">
      {[
        {
          label: texts.PublicTours, // Переклад "Public Tours"
          activeIcon: "/img/public-search-active.svg",
          inactiveIcon: "/img/public-search-inactive.svg",
        },
        {
          label: texts.PrivateTours, // Переклад "Private Tours"
          activeIcon: "/img/private-search-active.svg",
          inactiveIcon: "/img/private-search-inactive.svg",
        },
      ].map((tab, index) => (
        <button
          key={index}
          className={activeTab === index ? "active" : ""}
          onClick={() => setActiveTab(index)}
        >
          <img
            className="tab__icon"
            src={activeTab === index ? tab.activeIcon : tab.inactiveIcon}
            alt="Tab Icon"
          />
          <span className="tab__title">{tab.label}</span>
        </button>
      ))}
    </div>
  );
};

export default TabButtons;
