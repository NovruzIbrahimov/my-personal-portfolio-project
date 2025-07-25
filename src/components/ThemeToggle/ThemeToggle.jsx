import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";
import "./ThemeToggle.css";

function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      {theme === "light" ? <FaMoon /> : <FaSun />}
    </button>
  );
}

export default ThemeToggle;
