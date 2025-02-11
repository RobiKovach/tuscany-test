import React from "react";
import "./ServicePage.scss";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import ResponsiveMove from "../../Components/ResponsiveMove/ResponsiveMove";
import { useLanguage } from "../../Components/LanguageContext/LanguageContext";
import servicesData from "../../data/packages.json";
import { useParams } from "react-router-dom";
import translations from "../../data/translations";

export default function ServicePage() {
  const { servicesId } = useParams();
  const { language } = useLanguage();
  const texts = translations[language];

  const serviceData = servicesData.services.find(
    (service) => service.url === `/services/${servicesId}`
  );

  if (!serviceData) {
    return <h2>{texts.product_not_found}</h2>;
  }

  return (
    <>
      <Header />
      <ResponsiveMove />
      <section className="service-details">
        <div className="service-details__wrapper">
          <h2 className="service-details__title">{texts[serviceData.title]}</h2>
          <img
            src={serviceData.image}
            alt={texts[serviceData.title]}
            className="service-details__image"
          />
          <p className="service-details__description">
            {texts[serviceData.description]}
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}
