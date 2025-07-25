import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FaGlobe } from "react-icons/fa";
import "./LanguageSwitcher.css";

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const languages = [
    { code: "az", label: "AZ", flag: "/flags/az.png" },
    { code: "en", label: "EN", flag: "/flags/en.png" },
    { code: "tr", label: "TR", flag: "/flags/tr.png" },
    { code: "ru", label: "RU", flag: "/flags/ru.png" },
  ];

  const toggleDropdown = () => setOpen(!open);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="lang-switcher-wrapper" ref={dropdownRef}>
      <button className="globe-btn" onClick={toggleDropdown}>
        <FaGlobe size={20} />
      </button>
      {open && (
        <ul className="lang-dropdown">
          {languages.map(({ code, label, flag }) => (
            <li key={code} onClick={() => changeLanguage(code)}>
              <img src={flag} alt={`${label} flag`} className="flag-img" />
              {label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default LanguageSwitcher;
