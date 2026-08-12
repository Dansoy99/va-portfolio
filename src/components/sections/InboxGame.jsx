import { useEffect, useRef, useState } from "react";
import { EMAILS } from "../../data/content";
import "./InboxGame.css";

export default function InboxGame() {
  const [archived, setArchived] = useState([]);
  const [sweeping, setSweeping] = useState(false);
  const timerRef = useRef(null);
  const zero = archived.length === EMAILS.length;

  const archive = (id) => setArchived(a => (a.includes(id) ? a : [...a, id]));

  const sweep = () => {
    if (sweeping || zero) return;
    setSweeping(true);
    let pointer = 0;
    while (pointer < EMAILS.length && archived.includes(EMAILS[pointer].id)) pointer++;
    timerRef.current = setInterval(() => {
      setArchived(EMAILS.slice(0, pointer + 1).map(e => e.id));
      pointer++;
      if (pointer >= EMAILS.length) { clearInterval(timerRef.current); setSweeping(false); }
    }, 430);
  };

  const reset = () => { clearInterval(timerRef.current); setSweeping(false); setArchived([]); };
  useEffect(() => () => clearInterval(timerRef.current), []);

  return (
    <div className="inbox">
      <div className="inbox-head">
        <span className="dots"><i className="d1" /><i className="d2" /><i className="d3" /></span>
        <span className="inbox-title">client@company.com — today</span>
        <span className="inbox-badge">{EMAILS.length - archived.length} unread</span>
      </div>

      <div className="inbox-body">
        {EMAILS.map(e => (
          <button key={e.id} className={`mail ${archived.includes(e.id) ? "gone" : ""}`} onClick={() => archive(e.id)} title="Archive">
            <span className="mail-check">{archived.includes(e.id) ? "✓" : ""}</span>
            <span className="mail-main">
              <strong>{e.from}</strong>
              <small>{e.subject}</small>
            </span>
            <span className="mail-meta">
              <em>{e.time}</em>
              <i>{e.tag}</i>
            </span>
          </button>
        ))}
        {zero && <div className="stamp"><span>INBOX ZERO ✦ ACHIEVED</span></div>}
      </div>

      <div className="inbox-foot">
        <span className="inbox-count">{archived.length} archived</span>
        <div className="progress"><span style={{ width: `${(archived.length / EMAILS.length) * 100}%` }} /></div>
        {zero
          ? <button className="btn btn-sm btn-ghost" onClick={reset}>↺ replay</button>
          : <button className="btn btn-sm" onClick={sweep} disabled={sweeping}>{sweeping ? "Sweeping…" : "Run the sweep →"}</button>}
      </div>
      <p className="inbox-hint">(go on — try it. this is what tuesday feels like with me on it.)</p>
    </div>
  );
}