import React, { useState } from "react";
import { auth, googleProvider } from "./firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useLanguage } from "../LanguageContext/LanguageContext";
import translations from "../../data/translations.json";
import { useAuth } from "./AuthContext"; // Використовуємо глобальний контекст

const Login = ({ onClose, onOpenRegister }) => {
  const { language } = useLanguage();
  const [showPassword, setShowPassword] = useState(false);
  const texts = translations[language];
  const { setUser } = useAuth(); // Використовуємо `setUser`
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      setUser(userCredential.user); // Оновлюємо глобального користувача
      console.log("✅ Email login successful:", userCredential.user);
      onClose();
    } catch (error) {
      console.error("❌ Email login error:", error);
      setError(texts.invalid_credentials);
    }
  };

  const handleGoogleSignIn = async () => {
    setError("");
    try {
      const userCredential = await signInWithPopup(auth, googleProvider);
      setUser(userCredential.user); // Оновлюємо глобального користувача
      console.log("✅ Google login successful:", userCredential.user);
      onClose();
    } catch (error) {
      console.error("❌ Google login error:", error);
      setError(texts.google_login_failed);
    }
  };

  return (
    <div className="modal">
      <div className="modal__header">
        <h2 className="modal__title">{texts.login}</h2>
        <button className="modal-close" onClick={onClose}>
          ✖
        </button>
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form className="modal__form" onSubmit={handleLogin}>
        <div className="modal__input-group">
          <label htmlFor="email">{texts.email}</label>
          <input
            type="email"
            name="email"
            placeholder={texts.enter_email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="modal__input-group">
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
              onClick={() => setShowPassword((prev) => !prev)}
            >
              <img
                src={`${process.env.PUBLIC_URL}/img/account/eye.svg`}
                alt="Toggle Password"
              />
            </button>
          </div>
        </div>
        <div className="modal__actions">
          <button className="modal__submit" type="submit">
            {texts.login}
          </button>
          <span>or</span>
          <button
            className="modal__google"
            type="button"
            onClick={handleGoogleSignIn}
          >
            <img
              src={`${process.env.PUBLIC_URL}/img/account/icons_google.svg`}
              alt="Toggle Password"
            />
            <p>{texts.login_with_google}</p>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
