import { TICKER } from "../../data/content";

export default function Ticker() {
  const row = [...TICKER, ...TICKER];
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {row.map((t, i) => (
          <span key={i}>
            {t} <em>✦</em>
          </span>
        ))}
      </div>
    </div>
  );
}