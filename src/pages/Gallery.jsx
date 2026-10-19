import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { gallery } from "../data/gallery.js";
import { siteConfig } from "../config/siteConfig.js";
import usePageMeta from "../hooks/usePageMeta.js";
import GalleryCard from "../components/GalleryCard.jsx";
function Lightbox({ items, index, setIndex, onClose }) {
  const box = useRef(), closeBtn = useRef(), touch = useRef(0); const it = items[index];
  const go = (d) => setIndex((index + d + items.length) % items.length);
  useEffect(() => { const prev = document.activeElement; closeBtn.current.focus(); document.body.style.overflow = "hidden"; return () => { document.body.style.overflow = ""; prev?.focus(); }; }, []);
  const key = (e) => {
    if (e.key === "Escape") onClose(); else if (e.key === "ArrowLeft") go(-1); else if (e.key === "ArrowRight") go(1);
    else if (e.key === "Tab") { const f = box.current.querySelectorAll("button"); const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); } else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); } }
  };
  return (
    <div className="lb" role="dialog" aria-modal="true" aria-label={it.title || it.category} ref={box} onKeyDown={key}
      onTouchStart={(e) => (touch.current = e.touches[0].clientX)} onTouchEnd={(e) => { const d = e.changedTouches[0].clientX - touch.current; if (Math.abs(d) > 50) go(d > 0 ? -1 : 1); }}>
      <button ref={closeBtn} className="lb-x" aria-label="Close" onClick={onClose}><X /></button>
      {items.length > 1 && <button className="lb-n prev" aria-label="Previous image" onClick={() => go(-1)}><ChevronLeft /></button>}
      <figure><img src={it.image} alt={it.altText || it.title} />
        <figcaption>{it.title && <h2>{it.title}</h2>}<p className="meta">{[it.category, it.award, it.date && new Date(it.date).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })].filter(Boolean).join(" · ")}</p>{it.description && <p>{it.description}</p>}</figcaption></figure>
      {items.length > 1 && <button className="lb-n next" aria-label="Next image" onClick={() => go(1)}><ChevronRight /></button>}
    </div>
  );
}
export default function Gallery({ embedded = false }) {
  const H = embedded ? "h2" : "h1";
  usePageMeta(embedded ? null : "Gallery", "Moments, milestones and memories from the journey of Rajneesh Kumar Gupta.");
  const [cat, setCat] = useState("All"), [open, setOpen] = useState(-1);
  const pick = (c) => { setCat(c); setOpen(-1); };
  const all = gallery.filter((i) => i.published !== false);
  const shown = all.filter((i) => cat === "All" || i.category === cat);
  return (
    <section className="page gallery">
      <H>Moments, Milestones &amp; Memories</H><div className="rule" />
      <p className="lead">A collection of meaningful experiences, personal milestones, certificates, awards, and moments from my journey.</p>
      <div className="filters" role="group" aria-label="Filter gallery">
        {["All", ...siteConfig.categories].map((c) => <button key={c} aria-pressed={cat === c} className={cat === c ? "on" : ""} onClick={() => pick(c)}>{c}</button>)}
      </div>
      {shown.length === 0 && <div className="empty"><p>{all.length ? "Nothing in this category yet." : "The gallery is empty for now. New moments and milestones will appear here soon."}</p></div>}
      <div className="ggrid">{shown.map((it, i) => <GalleryCard key={it.id} item={it} priority={i < 6} onOpen={() => setOpen(i)} />)}</div>
      {open >= 0 && <Lightbox items={shown} index={open} setIndex={setOpen} onClose={() => setOpen(-1)} />}
    </section>
  );
}
