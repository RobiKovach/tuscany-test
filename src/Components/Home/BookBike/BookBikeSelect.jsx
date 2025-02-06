import React from "react";

export default function BookBikeSelect({ label, options }) {
  return (
    <div className="form-bookbike__item item-bookbike">
      <label className="item-bookbike__label">{label}</label>
      <select className="item-bookbike__fild">
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
