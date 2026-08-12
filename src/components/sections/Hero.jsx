import useTypewriter from "../../hooks/useTypewriter";
import useClock from "../../hooks/useClock";
import { VA, PHRASES } from "../../data/content";
import InboxGame from "./InboxGame";
import "./Hero.css";

export default function Hero() {
  const typed = useTypewriter(PHRASES);
  const now = useClock();

  const dateLine = now.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" });
  const time = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });

  return (
    <header id="top" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="dateline">TODAY IS {dateLine.toUpperCase()} — A GOOD DAY TO DELEGATE</p>
          <p className="kicker">✦ {VA.name} — {VA.niches.toUpperCase()} · EST. {VA.since}</p>
          <h1>
            You grow the business.<br />
            <span className="h1-typed">I handle {typed}<span className="caret" /></span>
          </h1>
          <p className="lede">
            Six years of keeping founders, coaches and small teams three timezones ahead of
            their to-do list. Async-first, detail-obsessed, NDA-friendly.
          </p>
          <div className="hero-ctas">
            <a href="#contact" className="btn">Book a discovery call →</a>
            <a href="#services" className="btn btn-ghost">See what I take off your plate ↓</a>
          </div>
          <div className="hero-status">
            <span className="pulse-dot" /> <span>{VA.spots}</span>
            <span className="sep">/</span>
            <span className="mono">your time · {time}</span>
          </div>
        </div>
        <div className="hero-widget"><InboxGame /></div>
      </div>
    </header>
  );
}