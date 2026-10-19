import { useState } from "react";
import { siteConfig } from "../config/siteConfig.js";
// Shows /images/profile.jpg (set in siteConfig.profile); falls back to a placeholder if the file is missing.
export default function ProfileAvatar({ size = "md", shape = "circle", className = "" }) {
  const [failed, setFailed] = useState(false);
  const { image, objectPosition } = siteConfig.profile;
  return (
    <div className={`avatar ${size} ${shape} ${className}`}>
      {!failed
        ? <img src={image} alt={`Portrait of ${siteConfig.name}`} style={{ objectPosition }} loading={size === "sm" ? "eager" : "lazy"} onError={() => setFailed(true)} />
        : <span className="ph" role="img" aria-label="Profile photo placeholder">RG</span>}
    </div>
  );
}
