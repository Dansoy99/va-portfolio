import { TOOLS_A, TOOLS_B } from "../../data/content";
import SectionHead from "../ui/SectionHead";
import "./Tools.css";

export default function Tools() {
  return (
    <section id="tools" className="section tools">
      <SectionHead eyebrow="THE TOOLKIT" title={<>Fluent in <em>your stack</em> before kickoff.</>} />
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track slow">{[...TOOLS_A, ...TOOLS_A].map((t, i) => <span className="tool" key={i}>{t}</span>)}</div>
      </div>
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track slow-rev">{[...TOOLS_B, ...TOOLS_B].map((t, i) => <span className="tool tool-alt" key={i}>{t}</span>)}</div>
      </div>
    </section>
  );
}