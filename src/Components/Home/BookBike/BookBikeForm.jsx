import React from "react";
import BookBikeInput from "./BookBikeInput";
import BookBikeSelect from "./BookBikeSelect";
import BookBikePhoneInput from "./BookBikePhoneInput";

export default function BookBikeForm({ texts }) {
  const inputFields = [
    {
      name: "name",
      label: texts.name_surname,
      placeholder: texts.enter_name,
      type: "text",
    },
    {
      name: "email",
      label: texts.email_address,
      placeholder: texts.enter_email,
      type: "email",
    },
    {
      name: "date",
      label: texts.date,
      placeholder: texts.select_date,
      type: "date",
    },
  ];

  return (
    <div className="bookbike__main main-bookbike">
      <h2 className="main-bookbike__title">{texts.book_now_bike}</h2>
      <form className="main-bookbike__form form-bookbike">
        {inputFields.map((field, index) => (
          <BookBikeInput
            key={index}
            label={field.label}
            placeholder={field.placeholder}
            type={field.type}
          />
        ))}
        <BookBikePhoneInput />

        <BookBikeSelect
          label={texts.service_type}
          options={texts.service_options}
        />

        <BookBikeSelect label={texts.time} options={texts.time_options} />

        <button className="item-bookbike__btn">{texts.book_now}</button>
      </form>
    </div>
  );
}
