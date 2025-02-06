import React from "react";

export default function BookBikeImage() {
  return (
    <div className="bookbike__image">
      <img
        src={`${process.env.PUBLIC_URL}/img/bike-banner.png`}
        alt="bike-image"
        className="bookbike__img"
      />
    </div>
  );
}
