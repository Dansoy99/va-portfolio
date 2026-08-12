import { STEPS } from "../../data/content";
import SectionHead from "../ui/SectionHead";
import "./Process.css";

export default function Process() {
  return (
    <section id="process" className="section">
      <div className="container">
        <SectionHead
          eyebrow="HOW WE WORK"
          title={<>From chaos to cadence <em>in four moves.</em></>}
          sub="The cards stack as you scroll — like a good week should."
        />
        <div className="stack">
          {STEPS.map((st, i) => (
            <article className="step-card" key={st.n} style={{ top: 96 + i * 18, background: st.bg }}>
              <span className="step-n">{st.n}</span>
              <div>
                <h3>{st.title}</h3>
                <p>{st.desc}</p>
                <span className="step-meta">{st.meta}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}