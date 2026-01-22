import "./Navbar.css";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    if (savedTheme === "light") {
      document.body.classList.add("light-mode");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.body.classList.toggle("light-mode");
  };

  return (
    <header>
      <div className="logo">&lt; Vihara Senindu /&gt;</div>

      <nav>
        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          {[
            "Skills",
            "Education",
            "Experiences",
            "Open Source",
            "Projects",
            "Achievements",
            "Blogs",
            "Contact",
          ].map((item) => (
            <li key={item}>
              <a
                href={`#${item.replace(/\s+/g, "").toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="header-right">
        <div className="theme-toggle" onClick={toggleTheme}>
          <i className={`fas ${theme === "light" ? "fa-sun" : "fa-moon"}`}></i>
          <div className="toggle-switch"></div>
        </div>

        <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"}`}></i>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
