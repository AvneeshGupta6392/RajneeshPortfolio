import { Link } from "react-router-dom";
import usePageMeta from "../hooks/usePageMeta.js";
import ProfileAvatar from "../components/ProfileAvatar.jsx";
const pts = [
  ["Advisor philosophy", "Good advice starts with listening. I share information, not pressure."],
  ["Trust and transparency", "I say what I know, admit what I don't, and never promise outcomes."],
  ["Customer-focused guidance", "Your needs decide which products are worth a look."],
  ["Relationship building", "I stay in touch after the first conversation, at a pace you choose."],
];
export default function About({ embedded = false }) {
  const H = embedded ? "h2" : "h1";
  usePageMeta(embedded ? null : "About Me", "Meet Rajneesh Kumar Gupta, a Rootpure Advisor focused on personal guidance and transparent communication.");
  return (
    <section className="page about">
      <ProfileAvatar size="lg" shape="portrait" />
      <div>
        <H>More Than Products. It's About People.</H><div className="rule" />
        <p className="lead">I'm Rajneesh Kumar Gupta, a Rootpure Advisor focused on building meaningful relationships through personal guidance, thoughtful product discovery, and transparent communication.</p>
        <dl>{pts.map(([t, d]) => <div key={t}><dt>{t}</dt><dd>{d}</dd></div>)}</dl>
        <div className="actions"><Link className="btn gold" to="/my-approach">See My Approach</Link><Link className="btn ghost" to="/gallery">View Gallery</Link></div>
      </div>
    </section>
  );
}
