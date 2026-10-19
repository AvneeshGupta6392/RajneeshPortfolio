import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { siteConfig } from "../config/siteConfig.js";
import ProfileAvatar from "./ProfileAvatar.jsx";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => setOpen(false), [pathname]);
  return (
    <header className="nav">
      <Link to="/" className="brand"><ProfileAvatar size="sm" /><span>{siteConfig.name}</span></Link>
      <button className="burger" aria-label="Toggle menu" aria-expanded={open} aria-controls="menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      <nav id="menu" className={open ? "open" : ""} aria-label="Primary">
        {siteConfig.nav.map((n) => <NavLink key={n.to} to={n.to} end={n.to === "/"}>{n.label}</NavLink>)}
      </nav>
    </header>
  );
}
