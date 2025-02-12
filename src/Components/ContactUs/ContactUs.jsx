import React from "react";
import "./ContactUs.scss";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import ResponsiveMove from "../../Components/ResponsiveMove/ResponsiveMove";
import ContactUsForm from "./ContactUsForm/ContactUsForm";
import ContactUsMap from "./ContactUsMap/ContactUsMap";

export default function ContactUs() {
  return (
    <>
      <Header />
      <ContactUsForm />
      <ContactUsMap />
      <Footer />
      <ResponsiveMove />
    </>
  );
}
