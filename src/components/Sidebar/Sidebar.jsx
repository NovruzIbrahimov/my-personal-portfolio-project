import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Sidebar.css";

function Sidebar() {
  const { t } = useTranslation();
  const location = useLocation();

  return (
    <aside className="sidebar">
      <nav className="nav flex-column text-center">
        {["home", "about", "projects", "contact"].map((page) => (
          <Link
            key={page}
            to={page === "home" ? "/" : `/${page}`}
            className={`nav-link ${
              location.pathname === `/${page}` ? "active" : ""
            }`}
          >
            {t(`header.${page}`)}
          </Link>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
