import { QUOTES } from "../../data/content";
import SectionHead from "../ui/SectionHead";

export default function Testimonials() {
  return (
    <section id="testimonials" className="section section-tint">
      <div className="container">
        <SectionHead eyebrow="POSTCARDS FROM CLIENTS" title={<>Proof, <em>slightly rotated.</em></>} />
        <div className="postcards">
          {QUOTES.map(q => (
            <figure className="postcard" key={q.name}>
              <p>"{q.q}"</p>
              <figcaption>
                <img className="blur-avatar" src={`https://picsum.photos/seed/${q.seed}/96/96`} alt="Client photo (blurred for privacy)" />
                <span><b className="blur-name">{q.name}</b><i className="blur-name">{q.role}</i></span>
                <span className="stars">★★★★★</span>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="privacy-note">✦ NAMES & FACES CHANGED FOR CLIENT CONFIDENTIALITY — FULL REFERENCES AVAILABLE ON REQUEST</p>
      </div>
    </section>
  );
}