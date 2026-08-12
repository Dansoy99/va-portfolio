import { useEffect, useState } from "react";
import { VA } from "../../data/content";
import "./Nav.css";

export default function Nav({ theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="container nav-in">
        <a href="#top" className="logo">
          <span className="logo-mark">{VA.initials}</span>
          <span className="logo-name">{VA.name}<em>— {VA.role}</em></span>
        </a>

        <div className="nav-links">
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#process">Process</a>
          <a href="#testimonials">Proof</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
        </div>

        <div className="nav-actions">
          <button
            className="theme-btn"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === "day" ? "night" : "day"} desk mode`}
            title="Toggle theme"
          >
            <span className="tb-icon" key={theme}>{theme === "day" ? "☾" : "☀"}</span>
            <span className="tb-label">{theme === "day" ? "night desk" : "day desk"}</span>
          </button>
          <a href="#contact" className="btn btn-sm">Book a call ✦</a>
        </div>
      </div>
    </nav>
  );
}