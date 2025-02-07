import React from "react";
import { useLanguage } from "../../LanguageContext/LanguageContext";
import translations from "../../../data/translations";
import "./Welcome.scss";
import WelcomeHeader from "./WelcomeHeader";
import WelcomeNumbers from "./WelcomeNumbers";

export default function Welcome() {
  const { language } = useLanguage();
  const texts = translations[language];

  return (
    <section className="welcome">
      <div className="welcome__wrapper">
        <div className="welcome__image">
          <img
            src={`${process.env.PUBLIC_URL}/img/welcome-banner.png`}
            alt="welcome-banner"
          />
        </div>
        <div className="welcome__info info-welcome">
          <WelcomeHeader texts={texts} />
          <WelcomeNumbers texts={texts} />
        </div>
      </div>
    </section>
  );
}
