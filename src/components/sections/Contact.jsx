import { useState } from "react";
import { VA, SERVICES } from "../../data/content";
import SectionHead from "../ui/SectionHead";
import Reveal from "../ui/Reveal";
import useClock from "../../hooks/useClock";
import "./Contact.css";  


const FORMSPREE_ID = "xoeawqoz";

export default function Contact() {
  const now = useClock();
  const [form, setForm] = useState({ name: "", email: "", need: SERVICES[0].title, msg: "" });
  const [errors, setErrors] = useState({});
  const [state, setState] = useState("idle"); // idle | sending | sent | error

  const zone = (tz) => now.toLocaleTimeString("en-GB", { timeZone: tz, hour: "2-digit", minute: "2-digit" });

  const submit = async (e) => {
    e.preventDefault();
    const errs = {};
    if (!form.name.trim()) errs.name = "I'll need a name to say hi back.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.email = "That email looks off — mind checking?";
    if (form.msg.trim().length < 10) errs.msg = "Tell me a little more (10+ characters).";
    setErrors(errs);
    if (Object.keys(errs).length) return;

    setState("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          service: form.need,
          message: form.msg,
        }),
      });
      if (!res.ok) throw new Error("send failed");
      setState("sent");
    } catch {
      setState("error");
    }
  };

  return (
    <section id="contact" className="section section-tint">
      <div className="container contact-grid">
        <div>
          <SectionHead eyebrow="LAST STOP" title={<>Let's clear <em>your plate.</em></>} />
          <Reveal delay={80}>
            <p className="contact-copy">
              Tell me what's eating your week — the content backlog, the messy sheet, the
              calendar chaos. I reply within 24 hours, usually faster.
            </p>
            <a className="contact-email" href={`mailto:${VA.email}`}>{VA.email}</a>
            <div className="clocks">
              <div><span>Iloilo City (me)</span><b>{zone("Asia/Manila")}</b></div>
              <div><span>Sydney (AU)</span><b>{zone("Australia/Sydney")}</b></div>
              <div><span>New York (US)</span><b>{zone("America/New_York")}</b></div>
            </div>
            <p className="hero-status"><span className="pulse-dot" /> {VA.spots}</p>
          </Reveal>
        </div>
        <Reveal delay={120}>
          {state === "sent" ? (
            <div className="form-card sent">
              <span className="sent-mark">✦</span>
              <h3>Lovely — it's in my inbox now.</h3>
              <p>I'll get back to you within 24 hours. Meanwhile, notice how quiet your own inbox feels.</p>
              <button className="btn btn-ghost" onClick={() => { setState("idle"); setForm({ name: "", email: "", need: SERVICES[0].title, msg: "" }); }}>Send another →</button>
            </div>
          ) : (
            <form className="form-card" onSubmit={submit} noValidate>
              <label>Name<input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Jordan Smith" />{errors.name && <small className="err">{errors.name}</small>}</label>
              <label>Email<input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="you@company.com" />{errors.email && <small className="err">{errors.email}</small>}</label>
              <label>What should I take first?
                <select value={form.need} onChange={e => setForm({ ...form, need: e.target.value })}>
                  {SERVICES.map(s => <option key={s.title}>{s.title}</option>)}
                  <option>Something else entirely</option>
                </select>
              </label>
              <label>The details<textarea rows="4" value={form.msg} onChange={e => setForm({ ...form, msg: e.target.value })} placeholder="400 rows of messy data, a dead Instagram page, a calendar that hates me. Help." />{errors.msg && <small className="err">{errors.msg}</small>}</label>
              {state === "error" && <p className="form-error">Hmm — it didn't go through. You can email me directly at {VA.email}.</p>}
              <button className="btn" type="submit" disabled={state === "sending"}>{state === "sending" ? "Filing it…" : "Send it over →"}</button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}