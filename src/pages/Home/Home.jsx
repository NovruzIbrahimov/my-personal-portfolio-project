import React from "react";
import { useTranslation } from "react-i18next";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import "./Home.css";
import heroImg from "../../assets/images/myphoto.jpg";
import frontendGif from "../../assets/animations/homee1.gif";
import frontendGif1 from "../../assets/animations/homee.gif";
import frontendGif2 from "../../assets/animations/home2.gif";
import { FaDownload } from "react-icons/fa";

function Home() {
  const { t } = useTranslation();

  return (
    <div className="home-page container">
      <div className="row align-items-center text-center text-md-start">
        <div className="col-md-6 mb-4">
          <motion.div
            className="profile-img-wrapper"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img src={heroImg} alt="My Profile" className="profile-img" />
          </motion.div>
        </div>
        <div className="col-md-6">
          <motion.div
            className="intro-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="greeting">
              {t("home.greeting")} <span className="highlight">Novruz</span>
            </h1>
            <h2 className="title">Frontend Developer</h2>
            <p className="subtitle">{t("home.subtitle")}</p>

            <div className="btn-group mt-4">
              <a
                href="/IbrahimovDeveloperResume.pdf"
                download
                className="cv-btn"
              >
                <FaDownload className="me-2" />
                {t("home.download")}
              </a>
              <a href="/contact" className="contact-btn">
                {t("home.contact")}
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="gif-section mt-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <div className="gif-row">
          <img src={frontendGif1} alt="Frontend Gif 1" className="gif-img" />
          <img src={frontendGif2} alt="Frontend Gif 3" className="gif-img" />
          <img src={frontendGif} alt="Frontend Gif 2" className="gif-img" />
        </div>
      </motion.div>
    </div>
  );
}

export default Home;
