import { useEffect, useState } from "react";
import useInView from "../../hooks/useInView";
import { REDUCED } from "../../utils/prefersReducedMotion";

export default function CountUp({ to, suffix = "" }) {
  const [ref, inView] = useInView();
  const [val, setVal] = useState(0);

  useEffect(() => {
    // No synchronous setState here — reduced motion is handled at render time below.
    if (!inView || REDUCED) return;

    const duration = 1400;
    let startTime = null;
    let frame = 0;

    const tick = (now) => {
      if (startTime === null) startTime = now;
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setVal(Math.round(to * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, to]);

  // Reduced motion → skip straight to the final number, no state needed.
  const display = REDUCED ? to : val;

  return (
    <span ref={ref}>
      {display.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}