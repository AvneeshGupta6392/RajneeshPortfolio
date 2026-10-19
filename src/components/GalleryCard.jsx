import { useState } from "react";
export default function GalleryCard({ item, onOpen, priority = false }) {
  const [tries, setTries] = useState(0);
  const failed = !item.image || tries > 0;
  const src = item.image;
  const onError = () => { console.warn("Gallery image failed to load:", item.image); setTries(tries + 1); };
  const label = item.title || item.award || item.category || "Gallery photo";
  return (
    <button type="button" className="gcard" onClick={onOpen} aria-label={`View larger: ${label}`}>
      <span className="gimg">
        {failed ? (
          <span className="gfail" role="img" aria-label={item.altText || label}>Image unavailable</span>
        ) : (
          <img
            src={src}
            alt={item.altText || label}
            width="600"
            height="800"
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            onError={onError}
          />
        )}
      </span>
      <span className="cap"><b>{label}</b><small>{item.category}</small></span>
    </button>
  );
}
