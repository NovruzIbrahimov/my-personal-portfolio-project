import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <ThemeProvider>
      <div className="app d-flex flex-column min-vh-100">
        <Header />
        <Sidebar />
        <main className="main-content flex-grow-1 py-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;

