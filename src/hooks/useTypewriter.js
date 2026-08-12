import { useEffect, useState } from "react";
import { REDUCED } from "../utils/prefersReducedMotion";

export default function useTypewriter(phrases) {
  const [text, setText] = useState(REDUCED ? phrases[0] : "");

  useEffect(() => {
    if (REDUCED) return;
    let i = 0, char = 0, deleting = false, timer;

    const tick = () => {
      const current = phrases[i];
      if (!deleting) {
        char++;
        setText(current.slice(0, char));
        if (char === current.length) { deleting = true; timer = setTimeout(tick, 1700); return; }
      } else {
        char--;
        setText(current.slice(0, char));
        if (char === 0) { deleting = false; i = (i + 1) % phrases.length; }
      }
      timer = setTimeout(tick, deleting ? 36 : 68);
    };

    timer = setTimeout(tick, 500);
    return () => clearTimeout(timer);
  }, [phrases]);

  return text;
}