import React from "react";
import "./ContactUsMap.scss";

export default function ContactUsMap() {
  return (
    <>
      <section className="contact-us-map">
        <img
          src={`${process.env.PUBLIC_URL}/img/contact-us/map.png`}
          alt="map"
          className="contact-us-map"
        />
      </section>
    </>
  );
}
