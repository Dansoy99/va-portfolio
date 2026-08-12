import { WORK } from "../../data/content";
import SectionHead from "../ui/SectionHead";
import Reveal from "../ui/Reveal";
import "./Work.css";

const CAL = [
  "P", "R", "", "S", "P", "", "R",
  "", "S", "P", "", "R", "P", "",
  "R", "", "P", "S", "", "P", "S",
  "P", "R", "", "P", "", "S", "P",
];

function CalendarArtifact() {
  return (
    <>
      <div className="cal">{CAL.map((c, i) => <span key={i} className={c}>{c}</span>)}</div>
      <div className="cal-legend">
        <span><i style={{ background: "var(--pine)" }} />Post</span>
        <span><i style={{ background: "var(--tangerine)" }} />Reel</span>
        <span><i style={{ background: "var(--butter)" }} />Story</span>
      </div>
    </>
  );
}

function SheetArtifact() {
  return (
    <>
      <table className="sheet">
        <thead><tr><th>Client</th><th>Email</th><th>Status</th><th>✓</th></tr></thead>
        <tbody>
          <tr><td>Acme Co.</td><td>acme.co</td><td>Active</td><td className="ok">✓</td></tr>
          <tr><td>B. Cruz</td><td>b.cruz@…</td><td>Lead</td><td className="ok">✓</td></tr>
          <tr><td>C. Reyes</td><td>—</td><td>Active</td><td className="ok">✓</td></tr>
          <tr><td>D. Lim</td><td>d.lim@…</td><td>Won</td><td className="ok">✓</td></tr>
        </tbody>
      </table>
      <div className="sheet-chips"><span>1,842 rows</span><span>0 dupes</span><span>100% validated</span></div>
    </>
  );
}

function ItinArtifact() {
  return (
    <ul className="itin">
      <li><time>06:40</time><span>Flight MNL → CEB<small>Plan B: 09:10 backup flight</small></span></li>
      <li><time>10:30</time><span>Pitch — Acme Co.<small>Deck v3 already in shared folder</small></span></li>
      <li><time>13:00</time><span>Client lunch<small>Harbor Café — table booked</small></span></li>
      <li><time>16:20</time><span>Hotel check-in<small>30-min buffer kept free</small></span></li>
    </ul>
  );
}

const ARTIFACTS = { calendar: CalendarArtifact, sheet: SheetArtifact, itinerary: ItinArtifact };

export default function Work() {
  return (
    <section id="work" className="section">
      <div className="container">
        <SectionHead eyebrow="SAMPLE WORK" title={<>Real deliverables, <em>made by me.</em></>} sub="Anonymized samples of actual work — the kind of thing that lands in your inbox when we work together." />
        <div className="work-grid">
          {WORK.map((w, i) => {
            const A = ARTIFACTS[w.artifact];
            return (
              <Reveal key={w.title} delay={i * 100}>
                <article className="work-card">
                  <span className={`work-type ${w.kind}`}>{w.type}</span>
                  <h3>{w.title}</h3>
                  <div className="artifact"><A /></div>
                  <p className="work-desc">{w.desc}</p>
                  <div className="work-tools">{w.tools.map(t => <span className="chip" key={t}>{t}</span>)}</div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}