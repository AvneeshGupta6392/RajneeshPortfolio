import { Link } from "react-router-dom";
import usePageMeta from "../hooks/usePageMeta.js";
const steps = [
  ["01", "Listen", "I start by understanding what you are looking for and what matters to you."],
  ["02", "Explore", "We look through the Rootpure range together, at your pace."],
  ["03", "Inform", "I share verified product information so you can decide with confidence. I don't guarantee earnings or health outcomes."],
  ["04", "Support", "I follow up reasonably and stay available for your questions."],
];
export default function MyApproach({ embedded = false }) {
  const H = embedded ? "h2" : "h1";
  usePageMeta(embedded ? null : "My Approach", "A four-step approach: listen, explore, inform and support.");
  return (
    <section className="page approach">
      <H>My Approach</H><div className="rule" />
      <ol className="timeline">{steps.map(([n, t, d]) => <li key={n}><span className="num">{n}</span><h2>{t}</h2><p>{d}</p></li>)}</ol>
      <div className="actions"><Link className="btn gold" to="/products">Product Discovery</Link><Link className="btn ghost" to="/connect">Let's Connect</Link></div>
    </section>
  );
}
