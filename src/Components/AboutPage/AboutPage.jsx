import React from "react";
import "./AboutPage.scss";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Comments from "../../Components/Home/Comments/Comments";
import AboutHero from "./AboutHero/AboutHero";
import ResponsiveMove from "../../Components/ResponsiveMove/ResponsiveMove";
import AboutInfo from "./AboutInfo/AboutInfo";
import AboutItems from "./AboutItems/AboutItems";

export default function AboutPage() {
  return (
    <>
      <Header />
      <AboutHero />
      <AboutInfo />
      <AboutItems />
      <Comments />
      <Footer />
      <ResponsiveMove />
    </>
  );
}
