import React from "react";
import "./TourPackagesPage.scss";
import Header from "../Header/Header";
import BookBike from "../Home/BookBike/BookBike";
import Comments from "../Home/Comments/Comments";
import Footer from "../Footer/Footer";
import ResponsiveMove from "../ResponsiveMove/ResponsiveMove";
import TourPackages from "./TourPackages/TourPackages";
import TourServices from "./TourServices/TourServices";
import productsData from "../../data/products.json";
import packagesData from "../../data/packages.json";

export default function TourPackagesPage() {
  return (
    <>
      <Header />
      <TourPackages products={productsData} />
      <TourServices services={packagesData.services} />
      <BookBike />
      <Comments />
      <Footer />
      <ResponsiveMove />
    </>
  );
}
