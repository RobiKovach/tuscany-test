import React from "react";
import { useLanguage } from "../../LanguageContext/LanguageContext";
import translations from "../../../data/translations";

export default function AboutItems() {
  const { language } = useLanguage();
  const texts = translations[language];

  const aboutItems = [
    {
      key: "complete_packages",
      img: "icon_map.svg",
      text: "complete_packages_text",
    },
    {
      key: "experience",
      img: "icon_experience.svg",
      text: "experience_text",
    },
    {
      key: "expert_guides",
      img: "icon_guide.svg",
      text: "expert_guides_text",
    },
    {
      key: "best_price",
      img: "icon_best_price.svg",
      text: "best_price_text",
    },
  ];

  return (
    <section className="about-items">
      <div className="about-items__wrapper">
        <div className="about-items__box box-about">
          {aboutItems.map((item) => (
            <div key={item.key} className="box-about__item">
              <img
                src={`${process.env.PUBLIC_URL}/img/about-page/icons/${item.img}`}
                alt={texts[item.text]}
                className="box-about__image"
              />
              <div className="box-about__text">{texts[item.text]}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
