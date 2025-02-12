import React from "react";
import "./Tickets.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ResponsiveMove from "../ResponsiveMove/ResponsiveMove";
import Popular from "../Home/Popular/Popular";
import Ticket from "./Ticket";

export default function Tickets() {
  return (
    <>
      <Header />
      <Ticket />
      <Popular />
      <Footer />
      <ResponsiveMove />
    </>
  );
}
