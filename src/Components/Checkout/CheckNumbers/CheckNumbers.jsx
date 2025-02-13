import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLanguage } from "../../LanguageContext/LanguageContext";
import translations from "../../../data/translations.json";
import "./CheckNumbers.scss";

export default function CheckNumbers({ currentStep }) {
  const { language } = useLanguage();
  const texts = translations[language];
  const location = useLocation();

  const steps = [
    { id: 1, key: "booking_details", path: "/checkout/booking-details" },
    { id: 2, key: "your_details", path: "/checkout/your-details" },
    { id: 3, key: "payment", path: "/checkout/payment-method" },
  ];

  const currentIndex = steps.findIndex((step) => step.path === currentStep);

  const [completedSteps, setCompletedSteps] = useState(() => {
    return JSON.parse(localStorage.getItem("completedSteps")) || [];
  });

  useEffect(() => {
    if (currentIndex >= 0) {
      const newSteps = steps
        .slice(0, currentIndex + 1)
        .map((step) => step.path);
      setCompletedSteps(newSteps);
      localStorage.setItem("completedSteps", JSON.stringify(newSteps));
    }
  }, [currentIndex]);

  useEffect(() => {
    const handleBackNavigation = () => {
      if (currentIndex > 0) {
        setCompletedSteps((prevSteps) => {
          const updatedSteps = prevSteps.slice(0, -1);
          localStorage.setItem("completedSteps", JSON.stringify(updatedSteps));
          return updatedSteps;
        });
      }
    };

    window.addEventListener("popstate", handleBackNavigation);
    return () => {
      window.removeEventListener("popstate", handleBackNavigation);
    };
  }, [currentIndex]);

  useEffect(() => {
    if (!location.pathname.startsWith("/checkout")) {
      setCompletedSteps([]);
      localStorage.removeItem("completedSteps");
    }
  }, [location.pathname]);

  return (
    <div className="check-numbers">
      <div className="check-numbers__items">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className={`check-numbers__item item-check ${
              completedSteps.includes(step.path) ? "active" : ""
            }`}
          >
            <span className="item-check__number">{step.id}</span>
            <p className="item-check__text">{texts[step.key] || step.key}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
