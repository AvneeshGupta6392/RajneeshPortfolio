import { Link } from "react-router-dom";
import { Phone, MessageCircle, Instagram } from "lucide-react";
import { siteConfig as s } from "../config/siteConfig.js";
import ProfileAvatar from "./ProfileAvatar.jsx";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="fcols">
        <div className="fid"><ProfileAvatar size="sm" /><div><strong>{s.name}</strong><br />{s.role} · {s.country}</div></div>
        <nav aria-label="Footer">{s.nav.map((n) => <Link key={n.to} to={n.to}>{n.label}</Link>)}</nav>
        <div className="fcontact">
          <a href={s.whatsappUrl} target="_blank" rel="noopener noreferrer"><MessageCircle size={16} /> WhatsApp</a>
          <a href={s.phoneUrl}><Phone size={16} /> {s.phoneDisplay}</a>
          <a href={s.instagramUrl} target="_blank" rel="noopener noreferrer"><Instagram size={16} /> {s.instagramHandle}</a>
        </div>
      </div>
      <p className="fine">© {new Date().getFullYear()} {s.name}. Personal portfolio of an independent Rootpure Advisor; not an official Rootpure website. No earnings or health outcomes are promised or implied.</p>
    </footer>
  );
}
