import { STATS } from "../../data/content";
import CountUp from "../ui/CountUp";
import "./StatsBand.css";

export default function StatsBand() {
  return (
    <section className="stats-band">
      <div className="container stats-grid">
        {STATS.map(s => (
          <div className="stat" key={s.label}>
            <span className="stat-num"><CountUp to={s.to} suffix={s.suffix || ""} /></span>
            <span className="stat-label">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}