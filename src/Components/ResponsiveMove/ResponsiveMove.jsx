import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useLocation, NavLink } from "react-router-dom";
import { useLanguage } from "../LanguageContext/LanguageContext";
import translations from "../../data/translations.json";
import LoginModal from "../Authorization/Modal/LoginModal";
import RegisterModal from "../Authorization/Modal/RegisterModal";
import UserInfo from "../UserInfo/UserInfo";
import { useAuth } from "../Authorization/AuthContext";

const ResponsiveMove = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 769);
  const [container, setContainer] = useState(null);
  const { language } = useLanguage();
  const location = useLocation();
  const { user } = useAuth();
  const isNotHomePage =
    location.pathname !== "/" && location.pathname !== "/about";

  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  useEffect(() => {
    const newContainer = isMobile
      ? document.getElementById("menu-container")
      : document.getElementById("header-container");

    setContainer(newContainer);
  }, [isMobile, location.pathname]);

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
        onClose={() => setIsLoginOpen(false)}
        onOpenRegister={() => setIsRegisterOpen(true)}
      />

      <RegisterModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
        onOpenLogin={() => setIsLoginOpen(true)}
      />
    </>
  );
};

export default ResponsiveMove;
