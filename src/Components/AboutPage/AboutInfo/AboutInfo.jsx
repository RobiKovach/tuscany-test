import React from "react";
import WelcomeNumbers from "../../../Components/Home/Welcome/WelcomeNumbers";
import { useLanguage } from "../../LanguageContext/LanguageContext";
import translations from "../../../data/translations";

export default function AboutInfo() {
  const { language } = useLanguage();
  const texts = translations[language];

  return (
    <>
      <section className="info">
        <div className="info__wrapper">
          <img
            src={`${process.env.PUBLIC_URL}/img/about-page/info-image.png`}
            alt=""
            className="info__image"
          />
          <div className="info__content content-info">
            <div className="content-info__titles">
              <h3 className="content-info__subtitle">
                {texts["welcome_title"]}
              </h3>
              <h2 className="content-info__title">{texts["about_us_title"]}</h2>
            </div>
            <p className="content-info__description">
              {texts["about_us_description"]}
            </p>
            <WelcomeNumbers texts={texts} />
          </div>
        </div>
      </section>
    </>
  );
}
