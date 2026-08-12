import Reveal from "./Reveal";
import Decode from "./Decode";
import "./SectionHead.css";

export default function SectionHead({ eyebrow, title, sub }) {
  return (
    <Reveal className="sec-head">
      <p className="eyebrow">✦ <Decode text={eyebrow} /></p>
      <h2>{title}</h2>
      {sub && <p className="sec-sub">{sub}</p>}
    </Reveal>
  );
}