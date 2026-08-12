import { VA } from "../../data/content";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-in">
        <span>© 2026 {VA.name} — {VA.role}</span>
        <span className="mono">made with color-coded calendars & too much coffee</span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}