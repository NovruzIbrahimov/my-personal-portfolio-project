import React, { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Header() {
  const { theme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

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

  return (
    <header className={`custom-header ${theme}`}>
      <div className="container d-flex justify-content-between align-items-center py-2">
        <Link to="/" className="header-left m-0">
          <h1 className="logo m-0">İbrahimov.dev</h1>
        </Link>
        <nav className="header-center">
          <Link to="/" className="nav-link">
            {t("header.home")}
          </Link>
          <Link to="/about" className="nav-link">
            {t("header.about")}
          </Link>
          <Link to="/projects" className="nav-link">
            {t("header.projects")}
          </Link>
          <Link to="/contact" className="nav-link">
            {t("header.contact")}
          </Link>
        </nav>
        <div className="header-right d-flex align-items-center">
          <LanguageSwitcher />
          <ThemeToggle />
          <button
            className={`burger-btn ${menuOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
