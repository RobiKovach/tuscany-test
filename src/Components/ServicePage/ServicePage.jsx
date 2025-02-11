import React from "react";
import "./ServicePage.scss";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import ResponsiveMove from "../../Components/ResponsiveMove/ResponsiveMove";
import { useLanguage } from "../../Components/LanguageContext/LanguageContext";
import servicesData from "../../data/packages.json";
import { useParams } from "react-router-dom";
import translations from "../../data/translations";
import BackButton from "../../Components/BackButton/BackButton";
import productsData from "../../data/products.json";
import UniversalSlider from "../UniversalSlider/UniversalSlider";

export default function ServicePage() {
  const product = productsData.find((p) => p.id === 1);
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
          <BackButton />
          <div className="service-details__info">
            <img
              src={`${process.env.PUBLIC_URL}${serviceData.image}`}
              alt={texts[serviceData.title]}
              className="service-details__image"
            />
            <div className="service-details__text">
              <h2 className="service-details__title">
                {texts[serviceData.title]}
              </h2>
              <p className="service-details__description">
                {texts[serviceData.description_full]}
              </p>
              <button className="service-details__button buy-button">
                {translations[language].buy_now}
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="service-comments">
        <div className="service-comments__wrapper">
          <div className="service-comments__title title">
            {texts["happyCustomersSays"] || "Happy Customers Says"}
          </div>
          <UniversalSlider
            items={product.comments}
            slidesToShow={2}
            autoplay={true}
          />
        </div>
      </section>
      <Footer />
    </>
  );
}
