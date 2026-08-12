import { useEffect, useState } from "react";

const KEY = "va-desk-theme";

function getInitialTheme() {
  if (typeof window === "undefined") return "day";
  try {
    const saved = window.localStorage.getItem(KEY);
    if (saved === "day" || saved === "night") return saved;
  } catch {
    /* storage blocked (private mode) — fall through to system pref */
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "night" : "day";
}

export default function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      window.localStorage.setItem(KEY, theme);
    } catch {
      /* ignore */
    }
  }, [theme]);

  const toggle = () => setTheme((t) => (t === "day" ? "night" : "day"));

  return { theme, toggle };
}