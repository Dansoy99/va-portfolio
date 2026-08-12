import { useEffect, useState } from "react";
import { REDUCED } from "../../utils/prefersReducedMotion";
import "./BackToTop.css";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const fn = () => setShow(window.scrollY > 700);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <button
      className={`to-top ${show ? "show" : ""}`}
      onClick={() => window.scrollTo({ top: 0, behavior: REDUCED ? "auto" : "smooth" })}
      aria-label="Back to top"
    >
      ↑
    </button>
  );
}