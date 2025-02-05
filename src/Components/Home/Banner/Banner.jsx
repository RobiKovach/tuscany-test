import React from "react";
import "./Banner.scss";
import Tabs from "../../Tabs/Tabs";

export default function Banner() {
  return (
    <section
      className="banner"
      style={{ backgroundImage: `url("/img/banner.png")` }}
    >
      <img
        className="banner__title"
        src="/img/title-banner.svg"
        alt="Logo"
      ></img>
      <p className="banner__subtitle">
        Enjoy our services for your trip anytime
      </p>
      <Tabs />
    </section>
  );
}
