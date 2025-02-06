import React from "react";

export default function SpecialOffersImage() {
  return (
    <div className="special__image">
      <img
        src={`${process.env.PUBLIC_URL}/img/special-banner.png`}
        alt="special-banner"
      />
    </div>
  );
}
