import { useEffect, useState } from "react";
import useInView from "../../hooks/useInView";
import { REDUCED } from "../../utils/prefersReducedMotion";

const GLYPHS = "✦*#%<>/=+";

/* Scramble-decode effect for mono eyebrow labels */
export default function Decode({ text, className = "" }) {
  const [ref, inView] = useInView();
  const [out, setOut] = useState(() =>
    REDUCED ? text : text.split("").map(c => (c === " " ? " " : GLYPHS[Math.floor(Math.random() * GLYPHS.length)])).join("")
  );

  useEffect(() => {
    if (!inView || REDUCED) return;
    let frame = 0;
    const id = setInterval(() => {
      frame++;
      const reveal = Math.floor(frame / 2.2);
      setOut(text.split("").map((c, i) => (c === " " ? " " : i < reveal ? c : GLYPHS[Math.floor(Math.random() * GLYPHS.length)])).join(""));
      if (reveal >= text.length) { clearInterval(id); setOut(text); }
    }, 30);
    return () => clearInterval(id);
  }, [inView, text]);

  return <span ref={ref} className={className}>{out}</span>;
}