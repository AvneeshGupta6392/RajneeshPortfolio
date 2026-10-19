import { Phone, MessageCircle, Instagram } from "lucide-react";
import { siteConfig as s, wa } from "../config/siteConfig.js";
export default function FloatingContact() {
  return (
    <aside className="float" aria-label="Quick contact">
      <a className="fw" href={wa("Hello Rajneesh, I would like to know more.")} target="_blank" rel="noopener noreferrer"><MessageCircle size={20} /><span>WhatsApp</span></a>
      <a className="fc" href={s.phoneUrl}><Phone size={20} /><span>Call</span></a>
      <a className="fi" href={s.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={20} /></a>
    </aside>
  );
}
