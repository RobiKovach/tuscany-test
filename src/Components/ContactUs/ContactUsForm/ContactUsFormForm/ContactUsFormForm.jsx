import React, { useState } from "react";
import { useLanguage } from "../../../LanguageContext/LanguageContext"; // Хук мови
import translations from "../../../../data/translations"; // Файл перекладів
import "./ContactUsFormForm.scss";

const ContactUsFormForm = () => {
  const { language } = useLanguage();
  const texts = translations[language];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="contact-form">
      <form onSubmit={handleSubmit}>
        <div className="contact-form__group">
          <label>{texts.name_surname}</label>
          <input
            type="text"
            name="name"
            placeholder={texts.enter_name}
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="contact-form__group">
          <label>{texts.email_address}</label>
          <input
            type="email"
            name="email"
            placeholder={texts.enter_email}
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="contact-form__group">
          <label>{texts.message}</label>
          <textarea
            name="message"
            placeholder={texts.enter_message}
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="contact-form__btn">
          {texts.send_message}
        </button>
      </form>
    </div>
  );
};

export default ContactUsFormForm;
