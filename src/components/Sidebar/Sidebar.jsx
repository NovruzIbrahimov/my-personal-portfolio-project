import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaDownload } from "react-icons/fa";
import "./Sidebar.css";
import Loading from "../Loading/Loading";

function Sidebar() {
  const { t } = useTranslation();
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 500);
  };

  if (loading) return <Loading />;

  const day = String(dateTime.getDate()).padStart(2, "0");
  const month = String(dateTime.getMonth() + 1).padStart(2, "0");
  const year = dateTime.getFullYear();
  const formattedDate = `${day}.${month}.${year}`;

  const formattedTime = dateTime.toLocaleTimeString("az-AZ", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

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
            onClick={handleClick}
          >
            {t(`header.${page}`)}
          </Link>
        ))}
      </nav>

      <div className="datetime-box d-flex justify-content-center gap-3 my-3 mt-5">
        <div className="calendar-box shadow-sm px-2 py-1">{formattedDate}</div>
        <div className="clock-box px-2 py-1">{formattedTime}</div>
      </div>

      <div className="text-center mt-5">
        <a
          href="/IbrahimovDeveloperResume.pdf"
          className="btn btn-outline-light download-btn"
          download
        >
          <FaDownload className="me-2" />
          {t("sidebar.button")}
        </a>
      </div>
    </aside>
  );
}

export default Sidebar;
