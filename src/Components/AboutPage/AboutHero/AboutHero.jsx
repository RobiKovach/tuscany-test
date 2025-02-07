import React from "react";
import { useLanguage } from "../../LanguageContext/LanguageContext";
import translations from "../../../data/translations";
import { NavLink } from "react-router-dom";

export default function AboutHero() {
  const { language } = useLanguage();
  const texts = translations[language];

  const backgroundStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/img/about-page/hero-banner.png)`,
  };

  return (
    <section className="hero" style={backgroundStyle}>
      <div className="hero__wrapper">
        <div className="hero__container container-hero">
          <img
            src={`${process.env.PUBLIC_URL}/img/about-page/banner-title.png`}
            alt={texts.about_hero_title || ""}
            className="container-hero__image"
          />
          <p className="container-hero__description">
            {texts.about_hero_description}
          </p>
          <NavLink to="/tours" className="container-hero__btn">
            {texts.view_our_tour_packages}
          </NavLink>
        </div>
      </div>
    </section>
  );
}
