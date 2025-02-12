import React from "react";
import { NavLink } from "react-router-dom";
import { useLanguage } from "../LanguageContext/LanguageContext"; // Хук для вибору мови
import translations from "../../data/translations"; // Файл з перекладами

const footerLinks = [
  { key: "bike_rickshaw_rental", path: "/services/bike-rickshaw-rental" },
  { key: "guided_tours_lucca", path: "/services/coach-trip-packages" },
  { key: "guided_bike_tour_lucca", path: "/services/guided-tours-lucca" },
  { key: "trip_tuscan_hills", path: "/services/trip-tuscan-hills" },
  { key: "transport_luxury_cars", path: "/services/transport-luxury-cars" },
  { key: "wine_tours_bus_guide", path: "/services/wine_tours-bus-guide" },
];

export default function FooterServices() {
  const { language } = useLanguage();
  const texts = translations[language];

  return (
    <div className="content-footer__services services-footer">
      <h2 className="services-footer__title footer-title">
        {texts.services || "Services"}
      </h2>
      <nav className="services-footer__nav">
        {footerLinks.map((link, index) => (
          <NavLink key={index} to={link.path} className="services-footer__link">
            {texts[link.key] || link.key}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
