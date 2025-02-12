import React, { useState } from "react";
import { auth, googleProvider } from "./firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { NavLink } from "react-router-dom";
import { useLanguage } from "../LanguageContext/LanguageContext";
import translations from "../../data/translations.json";

const Register = ({ onClose, onOpenLogin }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { language } = useLanguage();
  const texts = translations[language];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!isChecked) {
      setError(texts.agree_terms);
      return;
    }

    setError("");
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      sessionStorage.setItem("user", JSON.stringify(userCredential.user));
      onClose();
    } catch (error) {
      setError(texts.registration_failed);
    }
  };

  const handleGoogleSignUp = async () => {
    setError("");
    try {
      const userCredential = await signInWithPopup(auth, googleProvider);
      sessionStorage.setItem("user", JSON.stringify(userCredential.user));
      onClose();
    } catch (error) {
      setError(texts.google_signup_failed);
    }
  };

  return (
    <>
      <div className="modal">
        <div className="modal__header">
          <h2 className="modal__title">{texts.create_account}</h2>
          <button className="modal-close" onClick={onClose}>
            ✖
          </button>
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}

        <form className="modal__form" onSubmit={handleRegister}>
          <div className="modal__input-group">
            <label htmlFor="email">{texts.email}</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder={texts.enter_email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="modal__input-group password-group">
            <label htmlFor="password">{texts.password}</label>
            <div className="modal__password-wrapper">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder={texts.enter_password}
                onChange={handleChange}
                required
              />
              <button
                type="button"
                className="toggle-password modal__show-pass"
                onClick={togglePasswordVisibility}
              >
                <img
                  src={`${process.env.PUBLIC_URL}/img/account/eye.svg`}
                  alt="Toggle Password"
                />
              </button>
            </div>
          </div>

          <div className="modal__terms">
            <input
              type="checkbox"
              id="terms"
              checked={isChecked}
              onChange={handleCheckboxChange}
              required
            />
            <label htmlFor="terms">
              {texts.agree_with}{" "}
              <NavLink
                to="/terms"
                target="_blank"
                className="modal__terms-link"
              >
                {texts.terms}
              </NavLink>{" "}
              {texts.and}{" "}
              <NavLink
                to="/privacy_policy"
                target="_blank"
                className="modal__terms-link"
              >
                {texts.privacy_policy}
              </NavLink>
            </label>
          </div>
          <div className="modal__actions">
            <button
              className="modal__submit"
              type="submit"
              disabled={!isChecked}
            >
              {texts.sign_up}
            </button>
            <span>or</span>
            <button
              className="modal__google"
              disabled={!isChecked}
              onClick={handleGoogleSignUp}
            >
              <img
                src={`${process.env.PUBLIC_URL}/img/account/icons_google.svg`}
                alt="Toggle Password"
              />
              <p>{texts.sign_up_google}</p>
            </button>
          </div>
        </form>

        <p className="modal__switch">
          {texts.already_have_account}{" "}
          <button
            className="modal__switch-btn"
            onClick={() => {
              onClose();
              onOpenLogin();
            }}
          >
            {texts.login}
          </button>
        </p>
      </div>
    </>
  );
};

export default Register;
