import React from "react";
import "./Footer.css";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="custom-footer mt-auto">
      <div className="container text-center py-3">
        <p className="mb-0">
          © {new Date().getFullYear()} Novruz.dev | {t("footer.footer")}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
