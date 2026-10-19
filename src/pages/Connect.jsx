import { Suspense } from "react";
import { Phone, MessageCircle, Instagram } from "lucide-react";
import { siteConfig as s, wa } from "../config/siteConfig.js";
import { lazyRetry } from "../utils/lazyRetry.js";
import usePageMeta from "../hooks/usePageMeta.js";
import ErrorBoundary from "../components/ErrorBoundary.jsx";
import ProfileAvatar from "../components/ProfileAvatar.jsx";
const Scene = lazyRetry(() => import("../three/BotanicalScene.jsx"));
export default function Connect({ embedded = false }) {
  const H = embedded ? "h2" : "h1";
  usePageMeta(embedded ? null : "Let's Connect", "Say hello to Rajneesh Kumar Gupta, Rootpure Advisor, on WhatsApp, phone or Instagram.");
  return (
    <section className={`connect${embedded ? " embedded" : ""}`}>
      {!embedded && <div className="stage"><ErrorBoundary fallback={<div className="gl-fallback" />}><Suspense fallback={null}><Scene compact /></Suspense></ErrorBoundary></div>}
      <div className="cbox">
        <ProfileAvatar size="md" />
        <H>{s.name}</H><p className="role">{s.role} · {s.country}</p>
        <p>Have a question, or just want to say hello? I'd love to hear from you.</p>
        <div className="actions">
          <a className="btn gold" href={wa("Hello Rajneesh, I'd like to connect with you.")} target="_blank" rel="noopener noreferrer"><MessageCircle size={18} />WhatsApp</a>
          <a className="btn ghost" href={s.phoneUrl}><Phone size={18} />{s.phoneDisplay}</a>
          <a className="btn ghost" href={s.instagramUrl} target="_blank" rel="noopener noreferrer"><Instagram size={18} />{s.instagramHandle}</a>
        </div>
      </div>
    </section>
  );
}
