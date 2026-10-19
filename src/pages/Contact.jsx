import { useState } from "react";
import { Phone, MessageCircle, Instagram } from "lucide-react";
import { siteConfig as s, wa } from "../config/siteConfig.js";
import usePageMeta from "../hooks/usePageMeta.js";
export default function Contact({ embedded = false }) {
  const H = embedded ? "h2" : "h1";
  usePageMeta(embedded ? null : "Contact", "Contact Rajneesh Kumar Gupta by WhatsApp, phone or Instagram.");
  const [f, setF] = useState({ name: "", phone: "", message: "" }); const [errs, setErrs] = useState({});
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });
  const submit = (e) => {
    e.preventDefault(); const er = {};
    if (f.name.trim().length < 2) er.name = "Enter your name.";
    if (f.phone && !/^[+\d][\d\s-]{6,15}$/.test(f.phone.trim())) er.phone = "Enter a valid phone number or leave it blank.";
    if (f.message.trim().length < 10) er.message = "Write at least 10 characters.";
    setErrs(er); if (Object.keys(er).length) return;
    window.open(wa(`Hello Rajneesh, I'm ${f.name.trim()}.${f.phone ? ` My number: ${f.phone.trim()}.` : ""}\n${f.message.trim()}`), "_blank", "noopener");
  };
  const cards = [[MessageCircle, "WhatsApp", s.whatsappDisplay, s.whatsappUrl, true], [Phone, "Call", s.phoneDisplay, s.phoneUrl, false], [Instagram, "Instagram", s.instagramHandle, s.instagramUrl, true]];
  return (
    <section className="page contact">
      <H>Contact</H><div className="rule" />
      <div className="ccards">{cards.map(([I, t, d, u, ext]) => (
        <a key={t} className="ccard" href={u} {...(ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}><I size={26} /><h2>{t}</h2><span>{d}</span></a>))}</div>
      <form className="form" onSubmit={submit} noValidate>
        <h2>Send a message</h2><p className="note">Submitting opens WhatsApp with your message prefilled. Nothing is stored on this website.</p>
        {[["name", "Your name", "text"], ["phone", "Phone (optional)", "tel"]].map(([k, l, t]) => (
          <label key={k}>{l}<input type={t} value={f[k]} onChange={set(k)} aria-invalid={!!errs[k]} />{errs[k] && <span className="msg err" role="alert">{errs[k]}</span>}</label>))}
        <label>Message<textarea rows="4" value={f.message} onChange={set("message")} aria-invalid={!!errs.message} />{errs.message && <span className="msg err" role="alert">{errs.message}</span>}</label>
        <button className="btn gold" type="submit"><MessageCircle size={18} />Continue on WhatsApp</button>
      </form>
    </section>
  );
}
