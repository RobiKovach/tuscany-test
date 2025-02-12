import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useLocation, NavLink } from "react-router-dom";
import { useLanguage } from "../LanguageContext/LanguageContext";
import translations from "../../data/translations.json";
import LoginModal from "../Authorization/Modal/LoginModal";
import RegisterModal from "../Authorization/Modal/RegisterModal";
import UserInfo from "../UserInfo/UserInfo";

const ResponsiveMove = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 769);
  const [container, setContainer] = useState(null);
  const { language } = useLanguage();
  const location = useLocation();

  const isNotHomePage =
    location.pathname !== "/" && location.pathname !== "/about";

  const [user, setUser] = useState(null);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  useEffect(() => {
    const storedUser = sessionStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  useEffect(() => {
    const newContainer = isMobile
      ? document.getElementById("menu-container")
      : document.getElementById("header-container");

    setContainer(newContainer);
  }, [isMobile, location.pathname]);

  const handleAuthSuccess = () => {
    setIsLoginOpen(false);
    setIsRegisterOpen(false);
    const storedUser = sessionStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  };

  return (
    <>
      {container &&
        createPortal(
          <div className="moving-block">
            {!user ? (
              <>
                <NavLink
                  to="#"
                  className={`action-header__login ${
                    isNotHomePage ? "product-page-nohome" : ""
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsLoginOpen(true);
                  }}
                >
                  {translations[language].login}
                </NavLink>
                <NavLink
                  to="#"
                  className="action-header__sign"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsRegisterOpen(true);
                  }}
                >
                  {translations[language].sign_up}
                </NavLink>
              </>
            ) : (
              <UserInfo />
            )}
          </div>,
          container
        )}

      <LoginModal
        isOpen={isLoginOpen}
        onClose={handleAuthSuccess}
        onOpenRegister={() => setIsRegisterOpen(true)}
      />

      <RegisterModal
        isOpen={isRegisterOpen}
        onClose={handleAuthSuccess}
        onOpenLogin={() => setIsLoginOpen(true)}
      />
    </>
  );
};

export default ResponsiveMove;
