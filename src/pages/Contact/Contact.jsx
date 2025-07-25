import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import "./Contact.css";
import contactGif from "../../assets/animations/contact.gif";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};
    if (!formData.name) newErrors.name = t("contact.error-name");
    if (!formData.email) newErrors.email = t("contact.error-email");
    if (!formData.message) newErrors.message = t("contact.error-message");

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      console.log("Form data:", formData);
    }
  };

  return (
    <div className="contact container py-5">
      <motion.h2
        className="text-center mb-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {t("contact.contact")}
      </motion.h2>

      <motion.div
        className="contact-info-box text-center mb-5"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <p>
          <FaPhone className="me-2 contact-icon phone-icon" /> +994 51 858 58 00
        </p>
        <p>
          <FaMapMarkerAlt className="me-2 contact-icon map-icon" />{" "}
          {t("contact.map")}
        </p>
        <p>
          <FaEnvelope className="me-2 contact-icon envelope-icon" />{" "}
          novruz.ibrahimov56@gmail.com
        </p>
      </motion.div>

      <div className="row align-items-center">
        <motion.div
          className="col-lg-6 col-md-12"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              name="name"
              type="text"
              placeholder={t("contact.form-name")}
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <span className="text-danger">{errors.name}</span>}
            <input
              name="email"
              type="email"
              placeholder={t("contact.form-email")}
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <span className="text-danger">{errors.email}</span>
            )}
            <textarea
              name="message"
              placeholder={t("contact.form-message")}
              rows="5"
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && (
              <span className="text-danger">{errors.message}</span>
            )}
            <button type="submit">{t("contact.send-button")}</button>
          </form>
        </motion.div>

        <motion.div
          className="col-lg-6 col-md-12 mt-5  text-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="gif-wrapper">
            <img
              src={contactGif}
              alt="Contact Animation"
              className="contact-gif"
            />
          </div>
          <div className="social-icons mt-4">
            <a
              href="https://github.com/NovruzIbrahimov"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/nvrzibrahimov/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
            <a href="mailto:novruz.ibrahimov56@gmail.com">
              <FaEnvelope />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
