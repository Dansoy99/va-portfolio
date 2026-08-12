import { useState } from "react";
import { FAQS } from "../../data/content";
import SectionHead from "../ui/SectionHead";
import Reveal from "../ui/Reveal";
import "./Faq.css";

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="section">
      <div className="container faq-wrap">
        <SectionHead eyebrow="ASKED OFTEN" title={<>Questions people whisper <em>on the first call.</em></>} />
        {FAQS.map((f, i) => (
          <Reveal key={f.q} delay={i * 60}>
            <div className={`faq-item ${open === i ? "open" : ""}`}>
              <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
                <span>{f.q}</span><span className="fx">+</span>
              </button>
              <div className="faq-a"><p>{f.a}</p></div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}