import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import "./About.css";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaBootstrap,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();
  return (
    <div className="about container py-5">
      <motion.h2
        className="text-center mb-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {t("about.about")}
      </motion.h2>

      <motion.div
        className="row align-items-center mb-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <div className="col-lg-8 col-md-6 col-sm-12">
          <p className="intro-text">
            {t("about.intro-text-one")} <strong>Novruz</strong>,{" "}
            {t("about.intro-text-two")}
          </p>
          <p className="intro-text-second">{t("about.intro-text-second")}</p>
          <p className="intro-text-third">
            {t("about.intro-text-third-one")} <strong>React.js</strong>,{" "}
            <strong>JavaScript</strong>, {t("about.intro-text-third-two")}
          </p>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 text-center mt-4 mt-md-0">
          <img
            src="/cv.jpg"
            alt="Profile"
            className="about-img d-block mx-auto mx-lg-0 ms-lg-auto"
          />
        </div>
      </motion.div>
      
      {/* Bacarıqlar */}
      <motion.div
        className="skills"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        <h3 className="text-center mb-4">{t("about.skills")}</h3>
        <div className="row text-center skill-area">
          <div className="col-6 col-md-4 col-lg-2 mb-4">
            <FaHtml5 className="skill-icon html" />
            <p>HTML5</p>
          </div>
          <div className="col-6 col-md-4 col-lg-2 mb-4">
            <FaCss3Alt className="skill-icon css" />
            <p>CSS3</p>
          </div>
          <div className="col-6 col-md-4 col-lg-2 mb-4">
            <FaJs className="skill-icon js" />
            <p>JavaScript</p>
          </div>
          <div className="col-6 col-md-4 col-lg-2 mb-4">
            <FaReact className="skill-icon react" />
            <p>React</p>
          </div>
          <div className="col-6 col-md-4 col-lg-2 mb-4">
            <FaGitAlt className="skill-icon git" />
            <p>Git</p>
          </div>
          <div className="col-6 col-md-4 col-lg-2 mb-4">
            <FaBootstrap className="skill-icon bootstrap" />
            <p>Bootstrap</p>
          </div>
        </div>
      </motion.div>

      {/* Təhsil */}
      <motion.div
        className="education mt-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <h3 className="text-center mb-4">{t("about.education")}</h3>
        <ul className="list-unstyled px-3">
          <li>
            <strong className="strong-text">{t("about.university")}</strong>-
            <span className="prefix-text">{t("about.specialty")}</span>{" "}
            <span className="date-range">(2011–2015)</span>
          </li>
          <li>
            <strong className="strong-text">{t("about.academy")}</strong>-
            <span className="prefix-text">{t("about.specialty-two")}</span>{" "}
            <span className="date-range">(2023–2024)</span>
          </li>
        </ul>
      </motion.div>

      {/* İş Təcrübəsi */}
      <motion.div
        className="experience mt-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <h3 className="text-center mb-4">{t("about.experience")}</h3>
        <ul className="list-unstyled px-3">
          <li>
            <span className="company-name">Freelancer</span> -
            <span className="job-title">Freelance Frontend Developer</span> –
            <span className="date-range">10/2024–Present</span>
          </li>
          <li>
            <span className="company-name">UP TECH</span> -
            <span className="job-title">Frontend Developer</span> –
            <span className="date-range">09/2023-07/2024</span>
          </li>
          <li>
            <span className="company-name">Green Apple Travel Agency</span> -
            <span className="job-title">Frontend Developer</span> –
            <span className="date-range">01/2023-06/2024</span>
          </li>
        </ul>
      </motion.div>
    </div>
  );
}

export default About;
