import { VA } from "../../data/content";
import SectionHead from "../ui/SectionHead";
import Reveal from "../ui/Reveal";

export default function About() {
  // Extract just the first name for the greeting and signature
  const firstName = VA.name.split(" ")[0];

  return (
    <section id="about" className="section section-tint">
      <div className="container about-grid">
        <Reveal className="about-photo">
          <img src="https://picsum.photos/seed/nathaniel-va-portrait/640/760" alt={`${VA.name} at work`} />
        </Reveal>
        <div>
          <SectionHead eyebrow="THE HUMAN" title={<>Hi, I'm {firstName} — <em>your remote right hand.</em></>} />
          <Reveal delay={80}>
            <p className="about-bio">
              I started in {VA.since} running social pages for a local fitness brand — and discovered I
              genuinely love the back-office work nobody else wants to do. Two years and 3,200+
              delivered hours later, I help founders and creators with social media that ships on
              time, data they can actually trust, and calendars that finally breathe.
            </p>
            <ul className="facts">
              <li><span>Based in</span><b>{VA.location}</b></li>
              <li><span>Experience</span><b>2 years — Social Media · Data · EA</b></li>
              <li><span>Typing</span><b>65+ WPM · 98% accuracy</b></li>
              <li><span>Languages</span><b>English · Tagalog · Hiligaynon</b></li>
              <li><span>Confidentiality</span><b>NDA on request, least-privilege access</b></li>
              <li><span>Unreasonable skill</span><b>Spotting a duplicate row from across the room</b></li>
            </ul>
            <p className="signature">— {firstName}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}