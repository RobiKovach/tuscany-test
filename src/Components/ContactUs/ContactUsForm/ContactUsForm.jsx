import React from "react";
import "./ContactUsForm.scss";
import ContactUsFormText from "./ContactUsFormText/ContactUsFormText";
import ContactUsFormForm from "./ContactUsFormForm/ContactUsFormForm";

export default function ContactUsForm() {
  return (
    <>
      <section className="contact-us">
        <div className="contact-us__wrapper">
          <ContactUsFormText />
          <ContactUsFormForm />
        </div>
      </section>
    </>
  );
}
