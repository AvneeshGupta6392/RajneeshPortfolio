import { Suspense } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";
import { siteConfig as s, wa } from "../config/siteConfig.js";
import { lazyRetry } from "../utils/lazyRetry.js";
import usePageMeta from "../hooks/usePageMeta.js";
import ErrorBoundary from "../components/ErrorBoundary.jsx";
import ProfileAvatar from "../components/ProfileAvatar.jsx";
import About from "./About.jsx"; import MyApproach from "./MyApproach.jsx"; import Products from "./Products.jsx";
import Gallery from "./Gallery.jsx"; import Contact from "./Contact.jsx"; import Connect from "./Connect.jsx";
const Scene = lazyRetry(() => import("../three/BotanicalScene.jsx"));
// Every page also appears here as a section; navbar links still open the full pages.
const sections = [
  ["about", About, "/about", "About Me"], ["my-approach", MyApproach, "/my-approach", "My Approach"],
  ["products", Products, "/products", "Product Discovery"], ["gallery", Gallery, "/gallery", "Gallery"],
  ["contact", Contact, "/contact", "Contact"], ["connect", Connect, "/connect", "Let's Connect"],
];
export default function Home() {
  usePageMeta("Home", "Rajneesh Kumar Gupta, a Rootpure Advisor from India, offers thoughtful product discovery and personal guidance.");
  return (
    <>
      <section className="hero">
        <div className="stage"><ErrorBoundary fallback={<div className="gl-fallback" />}><Suspense fallback={null}><Scene /></Suspense></ErrorBoundary></div>
        <div className="hero-copy">
          <p className="role">{s.role} · {s.country}</p>
          <h1>Rooted in Nature. Guided by Trust.</h1>
          <p className="lede">I'm Rajneesh Kumar Gupta, a Rootpure Advisor focused on thoughtful product discovery, personal guidance, and building meaningful relationships through honest communication.</p>
          <div className="actions">
            <a className="btn gold" href={wa("Hello Rajneesh, I found your website and would like to talk.")} target="_blank" rel="noopener noreferrer"><MessageCircle size={18} />Chat on WhatsApp</a>
            <a className="btn ghost" href={s.phoneUrl}><Phone size={18} />Call Now</a>
            <a className="btn ghost" href="#my-approach">Explore My Journey</a>
            <a className="btn ghost" href="#gallery">View My Gallery</a>
          </div>
        </div>
        <ProfileAvatar size="md" className="hero-portrait" />
      </section>
      {sections.map(([id, Section, to, label]) => (
        <motion.div key={id} id={id} className="home-section" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.8 }}>
          <Section embedded />
          <div className="more"><Link to={to}>Open {label} page →</Link></div>
        </motion.div>
      ))}
    </>
  );
}
