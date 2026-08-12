import { useState } from "react";
import { SERVICES } from "../../data/content";
import SectionHead from "../ui/SectionHead";
import "./Services.css";

export default function Services() {
  const [active, setActive] = useState(0);
  const s = SERVICES[active];

  return (
    <section id="services" className="section">
      <div className="container">
        <SectionHead eyebrow="SERVICES" title={<>Everything on your plate, <em>except the work only you can do.</em></>} sub="Hover the list — real samples of the work appear on the left." />
        <div className="svc-grid">
          <div className="svc-panel">
            <div className="svc-num">{String(active + 1).padStart(2, "0")}</div>
            <h3>{s.title}</h3>
            <p className="svc-tag">{s.tag}</p>
            <p className="svc-desc">{s.desc}</p>
            <div className="chips">{s.chips.map(c => <span key={c} className="chip">{c}</span>)}</div>

            <div className="svc-art" key={active}>
              {s.frame === "phone" && (
                <div className="frame-phone">
                  <div className="screen"><span className="notch" /><img src={s.img} alt={`${s.title} sample`} /></div>
                </div>
              )}
              {s.frame === "browser" && (
                <div className="frame-browser">
                  <div className="bar"><i /><i /><i /><span className="url">{s.url}</span></div>
                  <img src={s.img} alt={`${s.title} sample`} />
                </div>
              )}
              {s.frame === "paper" && (
                <div className="frame-paper"><img src={s.img} alt={`${s.title} sample`} /></div>
              )}
              <div className="art-cap"><span>SAMPLE ✦ {s.cap}</span><em>{s.tool}</em></div>
            </div>
          </div>

          <ul className="svc-list">
            {SERVICES.map((sv, i) => (
              <li key={sv.title}
                  className={`svc-row ${i === active ? "active" : ""}`}
                  onMouseEnter={() => setActive(i)}
                  onClick={() => setActive(i)}>
                <span className="svc-idx">{String(i + 1).padStart(2, "0")}</span>
                <div className="svc-row-main">
                  <h4>{sv.title} <span className="svc-arrow">→</span></h4>
                  <p className="svc-rowtag">{sv.tag}</p>
                  <p className="svc-rowdesc">{sv.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}