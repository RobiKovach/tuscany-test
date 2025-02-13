import React, { useState, useEffect } from "react";
import "./ServicePage.scss";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import ResponsiveMove from "../../Components/ResponsiveMove/ResponsiveMove";
import { useLanguage } from "../../Components/LanguageContext/LanguageContext";
import servicesData from "../../data/packages.json";
import { useParams, useNavigate } from "react-router-dom";
import translations from "../../data/translations";
import BackButton from "../../Components/BackButton/BackButton";
import productsData from "../../data/products.json";
import UniversalSlider from "../UniversalSlider/UniversalSlider";
import { useAuth } from "../Authorization/AuthContext"; // Використання AuthContext

export default function ServicePage() {
  const product = productsData.find((p) => p.id === 1);
  const { servicesId } = useParams();
  const { isAuthenticated } = useAuth(); // Тепер ми отримуємо isAuthenticated з контексту
  const { language } = useLanguage();
  const navigate = useNavigate();
  const texts = translations[language];
  const [showAuthMessage, setShowAuthMessage] = useState(false);
  const [pendingOrder, setPendingOrder] = useState(null);

  const serviceData = servicesData.services.find(
    (service) => service.url === `/services/${servicesId}`
  );

  useEffect(() => {
    console.log("isAuthenticated changed:", isAuthenticated);
    console.log("pendingOrder:", pendingOrder);

    if (isAuthenticated && pendingOrder) {
      console.log("✅ User logged in, redirecting to checkout...");
      navigate("/checkout", { state: pendingOrder });
      setPendingOrder(null);
    }
  }, [isAuthenticated, pendingOrder, navigate]);

  if (!serviceData) {
    return <h2>{texts.product_not_found}</h2>;
  }

  const handleBuyNow = () => {
    if (!isAuthenticated) {
      console.log("🔴 User not logged in. Saving order and showing message.");
      setShowAuthMessage(true);
      setPendingOrder({
        product: serviceData,
        selectedDate: null,
        selectedTime: null,
      });
      return;
    }

    console.log("🟢 User is logged in, proceeding to checkout.");
    navigate("/checkout", {
      state: {
        product: serviceData,
        selectedDate: null,
        selectedTime: null,
      },
    });
  };

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
              {showAuthMessage && (
                <p className="auth-message">
                  {translations[language]?.please_login ||
                    "Please log in or register to continue"}
                </p>
              )}
              <button
                className="service-details__button buy-button"
                onClick={handleBuyNow}
              >
                {translations[language].buy_now}
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="service-comments">
        <div className="service-comments__wrapper">
          <div className="service-comments__title title">
            {texts["happyCustomersSays"] || "Happy Customers Say"}
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
