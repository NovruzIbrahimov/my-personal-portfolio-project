import React, { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Loading from "../Loading/Loading";

function Header() {
  const { theme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => {
      const newState = !prev;
      document.body.classList.toggle("sidebar-open", newState);
      return newState;
    });
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.classList.remove("sidebar-open");
  };

  useEffect(() => {
    closeMenu();
  }, [location]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024 && menuOpen) {
        closeMenu();
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [menuOpen]);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 500);
  };

  if (loading) return <Loading />;

  return (
    <header className={`custom-header ${theme}`}>
      <div className="container d-flex justify-content-between align-items-center py-2">
        <Link to="/" className="header-left m-0" onClick={handleClick}>
          <h1 className="logo m-0">İbrahimov.dev</h1>
        </Link>
        <nav className="header-center">
          <Link to="/" className="nav-link" onClick={handleClick}>
            {t("header.home")}
          </Link>
          <Link to="/about" className="nav-link" onClick={handleClick}>
            {t("header.about")}
          </Link>
          <Link to="/projects" className="nav-link" onClick={handleClick}>
            {t("header.projects")}
          </Link>
          <Link to="/contact" className="nav-link" onClick={handleClick}>
            {t("header.contact")}
          </Link>
        </nav>
        <div className="header-right align-items-center">
          <div className="header-right-item language-switcher">
            <LanguageSwitcher />
          </div>
          <div className="header-right-item theme-toggle-wrapper">
            <ThemeToggle />
          </div>
          {/* <div className="header-right-item burger-wrapper">
            <button
              className={`burger-btn ${menuOpen ? "open" : ""}`}
              onClick={toggleMenu}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div> */}
        </div>
      </div>
    </header>
  );
}

export default Header;
