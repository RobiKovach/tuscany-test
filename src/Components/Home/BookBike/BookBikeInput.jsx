import React from "react";

export default function BookBikeInput({ label, placeholder, type }) {
  return (
    <div className="form-bookbike__item item-bookbike">
      <label className="item-bookbike__label">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="item-bookbike__fild"
      />
    </div>
  );
}
