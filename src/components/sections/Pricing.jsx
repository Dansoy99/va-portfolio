import { PLANS } from "../../data/content";
import SectionHead from "../ui/SectionHead";
import Reveal from "../ui/Reveal";
import "./Pricing.css";

export default function Pricing() {
  const f = PLANS.featured;

  return (
    <section id="pricing" className="section">
      <div className="container">
        <SectionHead
          eyebrow="THE RATE CARD"
          title={<>Simple numbers, <em>no surprises.</em></>}
          sub="Simple hourly rates — pay only for the hours you use. Every hour includes an NDA, async updates, and a shared task board."
        />
        <div className="plans">
          <Reveal className="plan plan-feature">
            <span className="plan-tag">{f.tag}</span>
            <h3>{f.name}</h3>
            <p className="plan-price">{f.price}<small>{f.unit}</small></p>
            <div className="plan-lines">
              {f.lines.map(([k, v]) => (
                <div className="plan-line" key={k}><span>{k}</span><b>{v}</b></div>
              ))}
            </div>
            <ul>{f.includes.map(x => <li key={x}>✦ {x}</li>)}</ul>
            <a href="#contact" className="btn btn-butter">{f.cta} →</a>
          </Reveal>

          <div className="plans-side">
            {PLANS.side.map((p, i) => (
              <Reveal delay={i * 120} className="plan plan-small" key={p.name}>
                <div className="plan-small-head">
                  <h3>{p.name}</h3>
                  <p className="plan-price">{p.price}<small>{p.unit}</small></p>
                </div>
                <ul>{p.includes.map(x => <li key={x}>✓ {x}</li>)}</ul>
                <a href="#contact" className="btn btn-ghost">{p.cta}</a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}