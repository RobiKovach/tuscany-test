import React from "react";

export default function WelcomeHeader({ texts }) {
  return (
    <>
      <div className="info-welcome__titles">
        <h3 className="info-welcome__subtitle">{texts.welcome_title}</h3>
        <h2 className="info-welcome__title">{texts.welcome_subtitle}</h2>
      </div>
      <p className="info-welcome__description">{texts.welcome_text}</p>
    </>
  );
}
