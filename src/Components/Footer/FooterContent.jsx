import React from "react";
import FooterServices from "./FooterServices";
import FooterHome from "./FooterHome";
import FooterHelp from "./FooterHelp";
import FooterContacts from "./FooterContacts";
import FooterSocial from "./FooterSocial";

export default function FooterContent() {
  return (
    <>
      <FooterServices />
      <FooterHome />
      <FooterHelp />
      <FooterContacts />
      <FooterSocial />
    </>
  );
}
