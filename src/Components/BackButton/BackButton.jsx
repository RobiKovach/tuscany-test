import React from "react";
import { useNavigate } from "react-router-dom";
import "./BackButton.scss"; // Стилі для кнопки

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(-1)} className="back-button-container">
      <img
        src={`${process.env.PUBLIC_URL}/img/arrow-back.svg`}
        alt="Back"
        className="back-button__icon"
      />
      <button className="back-button">Назад</button>
    </div>
  );
};

export default BackButton;
